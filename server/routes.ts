import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "../shared/schema";
import { sendContactEmail, sendConfirmationEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validation = contactFormSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: 'Проверьте правильность заполнения формы',
          errors: validation.error.issues.map(issue => ({
            field: issue.path[0],
            message: issue.message
          }))
        });
      }

      const formData = validation.data;

      // Send email to company
      try {
        await sendContactEmail(formData);
        
        // Try to send confirmation email to user (optional)
        try {
          await sendConfirmationEmail(formData);
        } catch (confirmError) {
          console.warn('Could not send confirmation email:', confirmError);
          // Don't fail the request if confirmation email fails
        }

        return res.status(200).json({ 
          message: 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' 
        });
      } catch (emailError) {
        console.error('Error sending contact email:', emailError);
        
        // Check if it's due to missing API key
        if (emailError instanceof Error && emailError.message.includes('SENDGRID_API_KEY')) {
          return res.status(500).json({ 
            message: 'Сервис временно недоступен. Пожалуйста, свяжитесь с нами напрямую по телефону 800 922 508 или через Telegram @BaitEb1ke.' 
          });
        }
        
        return res.status(500).json({ 
          message: 'Произошла ошибка при отправке сообщения. Попробуйте еще раз или свяжитесь с нами напрямую.' 
        });
      }
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        message: 'Произошла ошибка при обработке формы. Попробуйте еще раз.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
