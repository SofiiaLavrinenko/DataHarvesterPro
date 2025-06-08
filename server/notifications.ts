// Telegram Bot API integration for notifications
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendTelegramNotification(formData: ContactFormData): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error("TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID обязательны для отправки уведомлений");
  }

  try {
    const message = `
🚴‍♂️ *Новая заявка на бронирование велосипеда*

👤 *Клиент:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Телефон:* ${formData.phone}

💬 *Сообщение:*
${formData.message}

⏰ *Время получения:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })} (Warsaw)

🔗 *Связаться с клиентом:*
• Email: ${formData.email}
• Телефон: ${formData.phone}
    `;

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(`Telegram API error: ${result.description || 'Unknown error'}`);
    }

    console.log('Telegram notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    throw error;
  }
}

// Fallback function for when Telegram is not configured
export async function logContactForm(formData: ContactFormData): Promise<boolean> {
  console.log('=== НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ ===');
  console.log(`Имя: ${formData.name}`);
  console.log(`Email: ${formData.email}`);
  console.log(`Телефон: ${formData.phone}`);
  console.log(`Сообщение: ${formData.message}`);
  console.log(`Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })}`);
  console.log('====================================');
  return true;
}

export async function sendContactNotification(formData: ContactFormData): Promise<boolean> {
  try {
    // Try Telegram first
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      return await sendTelegramNotification(formData);
    } else {
      // Fallback to console logging
      console.warn('Telegram not configured, logging to console');
      return await logContactForm(formData);
    }
  } catch (error) {
    console.error('Error sending notification:', error);
    
    // Fallback to console logging if Telegram fails
    console.warn('Fallback to console logging due to error');
    return await logContactForm(formData);
  }
}