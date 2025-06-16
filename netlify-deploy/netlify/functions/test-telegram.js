exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log('Testing Telegram configuration...');
    console.log('TELEGRAM_BOT_TOKEN exists:', !!TELEGRAM_BOT_TOKEN);
    console.log('TELEGRAM_CHAT_ID exists:', !!TELEGRAM_CHAT_ID);
    console.log('TELEGRAM_CHAT_ID value:', TELEGRAM_CHAT_ID);

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Missing environment variables',
          config: {
            hasToken: !!TELEGRAM_BOT_TOKEN,
            hasChatId: !!TELEGRAM_CHAT_ID,
            chatId: TELEGRAM_CHAT_ID
          }
        })
      };
    }

    // Test bot info
    const botResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
    const botResult = await botResponse.json();

    if (!botResponse.ok || !botResult.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Bot token invalid',
          error: botResult
        })
      };
    }

    // Test sending message
    const testMessage = `🧪 ТЕСТ TELEGRAM БОТА
    
Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })}
Статус: Конфигурация работает корректно ✅`;

    const messageResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: testMessage
      })
    });

    const messageResult = await messageResponse.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: messageResponse.ok && messageResult.ok,
        botInfo: botResult.result,
        messageTest: messageResult,
        config: {
          hasToken: true,
          hasChatId: true,
          chatId: TELEGRAM_CHAT_ID
        }
      })
    };

  } catch (error) {
    console.error('Test function error:', error);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};