// Telegram Bot API integration for notifications
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const COMPANY_EMAIL = 'info@rowerhub.bike'; // Замените на реальный email компании
const COMPANY_PHONE = '800922508'; // Номер телефона компании

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("SENDGRID_API_KEY is required for sending emails");
  }

  try {
    const emailToCompany = {
      to: COMPANY_EMAIL,
      from: COMPANY_EMAIL, // SendGrid требует верифицированный email отправителя
      subject: `Новая заявка на бронирование велосипеда - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Новая заявка на бронирование велосипеда</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Контактная информация клиента:</h3>
            <p><strong>Имя:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Телефон:</strong> ${formData.phone}</p>
          </div>
          
          <div style="background-color: #fff5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
            <h3 style="color: #333; margin-top: 0;">Сообщение:</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e5f3ff; border-radius: 8px;">
            <p style="margin: 0; color: #0066cc;">
              <strong>Свяжитесь с клиентом:</strong><br>
              📧 Email: <a href="mailto:${formData.email}">${formData.email}</a><br>
              📱 Телефон: <a href="tel:${formData.phone}">${formData.phone}</a>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            Это автоматическое сообщение с сайта RowerHub.bike<br>
            Время получения: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })} (Warsaw)
          </p>
        </div>
      `,
      text: `
Новая заявка на бронирование велосипеда

Контактная информация клиента:
Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone}

Сообщение:
${formData.message}

Свяжитесь с клиентом:
Email: ${formData.email}
Телефон: ${formData.phone}

Время получения: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })} (Warsaw)
      `
    };

    await sgMail.send(emailToCompany);
    console.log('Contact form email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact form email:', error);
    throw error;
  }
}

export async function sendConfirmationEmail(formData: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    return false; // Не отправляем подтверждение если нет API ключа
  }

  try {
    const confirmationEmail = {
      to: formData.email,
      from: COMPANY_EMAIL,
      subject: 'Ваша заявка получена - RowerHub.bike',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Спасибо за вашу заявку!</h2>
          
          <p>Здравствуйте, ${formData.name}!</p>
          
          <p>Мы получили вашу заявку на бронирование электровелосипеда и свяжемся с вами в ближайшее время.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Детали вашей заявки:</h3>
            <p><strong>Имя:</strong> ${formData.name}</p>
            <p><strong>Телефон:</strong> ${formData.phone}</p>
            <p><strong>Сообщение:</strong> ${formData.message}</p>
          </div>
          
          <div style="background-color: #e5f3ff; padding: 15px; border-radius: 8px;">
            <h3 style="color: #0066cc; margin-top: 0;">Наши контакты:</h3>
            <p>📱 Телефон: ${COMPANY_PHONE}</p>
            <p>📧 Email: ${COMPANY_EMAIL}</p>
            <p>📱 Telegram: @BaitEb1ke</p>
            <p>📍 Адрес: Zygmunta Krasińskiego 28, 50-450 Wrocław</p>
          </div>
          
          <p>С уважением,<br>Команда RowerHub.bike</p>
        </div>
      `,
      text: `
Спасибо за вашу заявку!

Здравствуйте, ${formData.name}!

Мы получили вашу заявку на бронирование электровелосипеда и свяжемся с вами в ближайшее время.

Детали вашей заявки:
Имя: ${formData.name}
Телефон: ${formData.phone}
Сообщение: ${formData.message}

Наши контакты:
Телефон: ${COMPANY_PHONE}
Email: ${COMPANY_EMAIL}
Telegram: @BaitEb1ke
Адрес: Zygmunta Krasińskiego 28, 50-450 Wrocław

С уважением,
Команда RowerHub.bike
      `
    };

    await sgMail.send(confirmationEmail);
    console.log('Confirmation email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false; // Не блокируем основной процесс если подтверждение не отправилось
  }
}