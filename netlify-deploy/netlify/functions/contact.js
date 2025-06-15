exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method not allowed' };
  }

  console.log('Received request:', event.body);

  try {
    let formData;
    
    // Handle both JSON and form-encoded data
    if (event.headers['content-type']?.includes('application/json')) {
      formData = JSON.parse(event.body);
    } else {
      // Parse form data from Netlify Forms
      const params = new URLSearchParams(event.body);
      formData = {
        name: params.get('name'),
        email: params.get('email'),
        phone: params.get('phone'),
        message: params.get('message')
      };
    }

    console.log('Parsed form data:', formData);

    if (!formData.name || !formData.email || !formData.phone) {
      console.log('Missing required fields');
      return {
        statusCode: 400,
        headers,
        body: 'Missing required fields'
      };
    }

    const telegramMessage = `🚴‍♂️ НОВАЯ ЗАЯВКА ROWERHUB.BIKE

👤 Имя: ${formData.name}
📧 Email: ${formData.email}  
📱 Телефон: ${formData.phone}
💬 Сообщение: ${formData.message || 'Не указано'}

🕐 Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })}`;

    const TELEGRAM_BOT_TOKEN = '6838629436:AAGbWVh7OrjkUmYCcQHaOe-lXCYoU_0uYK8';
    const TELEGRAM_CHAT_ID = '-1002126895025';

    console.log('Sending to Telegram...');

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage
      })
    });

    const result = await response.text();
    console.log('Telegram response:', response.status, result);

    if (response.ok) {
      console.log('Message sent successfully');
      return {
        statusCode: 200,
        headers,
        body: 'Success'
      };
    } else {
      console.error('Telegram API error:', result);
      return {
        statusCode: 200, // Return 200 to prevent form error
        headers,
        body: 'Form received but notification failed'
      };
    }

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 200, // Return 200 to prevent form error
      headers,
      body: 'Form received'
    };
  }
};