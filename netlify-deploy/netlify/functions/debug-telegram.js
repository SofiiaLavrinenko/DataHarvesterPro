exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log('=== TELEGRAM DEBUG SESSION ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Event method:', event.httpMethod);
    console.log('Event path:', event.path);
    console.log('Request headers:', JSON.stringify(event.headers, null, 2));
    
    // Environment check
    const envCheck = {
      hasToken: !!TELEGRAM_BOT_TOKEN,
      tokenLength: TELEGRAM_BOT_TOKEN ? TELEGRAM_BOT_TOKEN.length : 0,
      tokenPrefix: TELEGRAM_BOT_TOKEN ? TELEGRAM_BOT_TOKEN.substring(0, 10) + '...' : 'N/A',
      hasChatId: !!TELEGRAM_CHAT_ID,
      chatId: TELEGRAM_CHAT_ID,
      chatIdType: typeof TELEGRAM_CHAT_ID
    };
    
    console.log('Environment check:', JSON.stringify(envCheck, null, 2));

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          stage: 'environment',
          message: 'Missing environment variables',
          debug: envCheck
        })
      };
    }

    // Test 1: Bot info
    console.log('Testing bot info...');
    const botInfoUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`;
    const botResponse = await fetch(botInfoUrl);
    const botResult = await botResponse.json();
    
    console.log('Bot info response:', JSON.stringify(botResult, null, 2));

    if (!botResponse.ok || !botResult.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          stage: 'bot_info',
          message: 'Invalid bot token',
          debug: {
            env: envCheck,
            botResponse: {
              status: botResponse.status,
              ok: botResponse.ok,
              result: botResult
            }
          }
        })
      };
    }

    // Test 2: Chat info
    console.log('Testing chat info...');
    const chatInfoUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getChat`;
    const chatResponse = await fetch(chatInfoUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID })
    });
    const chatResult = await chatResponse.json();
    
    console.log('Chat info response:', JSON.stringify(chatResult, null, 2));

    // Test 3: Send message
    console.log('Testing message send...');
    const testMessage = `🔧 ДИАГНОСТИКА TELEGRAM БОТА

⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })}
🤖 Бот: ${botResult.result.username}
💬 Чат: ${TELEGRAM_CHAT_ID}
✅ Статус: Интеграция работает корректно

Этот тест отправлен автоматически для проверки настроек.`;

    const messageUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const messageResponse = await fetch(messageUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'RowerHub-Debug/1.0'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: testMessage,
        parse_mode: 'HTML'
      })
    });

    const messageResult = await messageResponse.json();
    console.log('Message send response:', JSON.stringify(messageResult, null, 2));

    const finalResult = {
      success: messageResponse.ok && messageResult.ok,
      stage: 'complete',
      timestamp: new Date().toISOString(),
      tests: {
        environment: envCheck,
        botInfo: {
          success: botResponse.ok && botResult.ok,
          bot: botResult.result
        },
        chatInfo: {
          success: chatResponse.ok,
          chat: chatResult.result || chatResult
        },
        messageTest: {
          success: messageResponse.ok && messageResult.ok,
          response: messageResult
        }
      }
    };

    console.log('Final debug result:', JSON.stringify(finalResult, null, 2));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(finalResult, null, 2)
    };

  } catch (error) {
    console.error('Debug function error:', error);
    console.error('Error stack:', error.stack);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: false,
        stage: 'error',
        error: error.message,
        stack: error.stack
      })
    };
  }
};