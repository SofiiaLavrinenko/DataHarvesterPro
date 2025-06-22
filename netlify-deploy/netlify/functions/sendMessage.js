exports.handler = async (event, context) => {
  // Simple CORS headers
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: 'Method not allowed'
    };
  }

  console.log('Simple contact function called');
  console.log('Event body:', event.body);

  try {
    // Parse form data
    let formData;
    try {
      formData = JSON.parse(event.body);
    } catch {
      // Parse as form data
      const params = new URLSearchParams(event.body);
      formData = {
        name: params.get('name'),
        email: params.get('email'),
        phone: params.get('phone'),
        message: params.get('message')
      };
    }

    console.log('Parsed data:', formData);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: 'Missing required fields'
      };
    }

    // Get environment variables
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log('Environment check:');
    console.log('Has token:', !!BOT_TOKEN);
    console.log('Has chat ID:', !!CHAT_ID);
    console.log('Chat ID value:', CHAT_ID);

    if (!BOT_TOKEN || !CHAT_ID) {
      console.log('Missing Telegram credentials');
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: 'OK'
      };
    }

    // Prepare message
    const message = `🚴‍♂️ НОВАЯ ЗАЯВКА ROWERHUB.BIKE

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📱 Телефон: ${formData.phone}
💬 Сообщение: ${formData.message || 'Не указано'}

🕐 Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })}`;

    console.log('Sending message to Telegram...');

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    const result = await response.json();
    console.log('Telegram response:', response.status, result);

    // Always return success to prevent form errors
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: 'OK'
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: 'OK'
    };
  }
};
