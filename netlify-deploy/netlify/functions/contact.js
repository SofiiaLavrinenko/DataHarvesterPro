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

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log('Environment check:');
    console.log('TELEGRAM_BOT_TOKEN exists:', !!TELEGRAM_BOT_TOKEN);
    console.log('TELEGRAM_CHAT_ID exists:', !!TELEGRAM_CHAT_ID);
    console.log('TELEGRAM_CHAT_ID value:', TELEGRAM_CHAT_ID);

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram credentials');
      return {
        statusCode: 200,
        headers,
        body: 'Form received but missing Telegram configuration'
      };
    }

    console.log('Sending to Telegram...');

    const telegramPayload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: telegramMessage,
      parse_mode: 'HTML'
    };
    
    console.log('Telegram API URL:', `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN.substring(0, 10)}...`);
    console.log('Telegram payload:', JSON.stringify(telegramPayload, null, 2));

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'RowerHub-Contact-Form/1.0'
      },
      body: JSON.stringify(telegramPayload)
    });

    const result = await response.json();
    console.log('Telegram response status:', response.status);
    console.log('Telegram response body:', JSON.stringify(result, null, 2));

    if (response.ok && result.ok) {
      console.log('Message sent successfully to Telegram');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'Заявка успешно отправлена!' })
      };
    } else {
      console.error('Telegram API error:', result);
      console.error('Error code:', result.error_code);
      console.error('Error description:', result.description);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Заявка получена, но уведомление не отправлено',
          error: result.description || 'Unknown error'
        })
      };
    }

  } catch (error) {
    console.error('Function error:', error);
    console.error('Error stack:', error.stack);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Произошла ошибка при обработке заявки',
        error: error.message
      })
    };
  }
};