import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Wypełnij wszystkie wymagane pola.' });
      }
      
      // Here you would typically store the message or send an email
      // For now, we'll just return a success response
      
      return res.status(200).json({ message: 'Wiadomość została wysłana pomyślnie.' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return res.status(500).json({ message: 'Wystąpił błąd podczas przetwarzania formularza.' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
