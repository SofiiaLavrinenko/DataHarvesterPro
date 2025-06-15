exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Все поля обязательны для заполнения' })
      };
    }

    const telegramMessage = `🚴‍♂️ НОВАЯ ЗАЯВКА ROWERHUB.BIKE

👤 Имя: ${data.name}
📧 Email: ${data.email}  
📱 Телефон: ${data.phone}
💬 Сообщение: ${data.message || 'Не указано'}

🕐 Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })}`;

    // Use environment variables for Telegram credentials
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '6838629436:AAGbWVh7OrjkUmYCcQHaOe-lXCYoU_0uYK8';
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-1002126895025';

    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage
      })
    });

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text();
      console.error('Telegram API error:', error);
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Произошла ошибка при отправке сообщения. Попробуйте еще раз или свяжитесь с нами напрямую через Telegram @BaitEb1ke.' 
        })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' 
      })
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Произошла ошибка при обработке формы. Попробуйте еще раз.' 
      })
    };
  }
};