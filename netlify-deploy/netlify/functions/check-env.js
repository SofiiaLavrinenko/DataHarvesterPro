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

  console.log('Checking environment variables...');

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const result = {
    timestamp: new Date().toISOString(),
    environment: {
      hasToken: !!TELEGRAM_BOT_TOKEN,
      tokenLength: TELEGRAM_BOT_TOKEN ? TELEGRAM_BOT_TOKEN.length : 0,
      hasChatId: !!TELEGRAM_CHAT_ID,
      chatIdValue: TELEGRAM_CHAT_ID,
      chatIdType: typeof TELEGRAM_CHAT_ID
    },
    status: 'checked'
  };

  console.log('Environment check result:', result);

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(result)
  };
};