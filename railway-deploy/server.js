import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        message: 'Заполните все обязательные поля' 
      });
    }

    // Send to Telegram if configured
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const message = `🚴‍♂️ НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ

👤 ${name}
📧 ${email}
📱 ${phone}

⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })}

#заявка #велосипед #аренда`;

        const telegramResponse = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message
          })
        });

        if (!telegramResponse.ok) {
          console.error('Telegram error:', await telegramResponse.text());
        } else {
          console.log('Telegram notification sent successfully');
        }
      } catch (telegramError) {
        console.error('Telegram notification failed:', telegramError);
      }
    }

    // Always log to console as backup
    console.log('=== НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ ===');
    console.log(`Имя: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Телефон: ${phone}`);
    console.log(`Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Warsaw' })}`);
    console.log('====================================');

    res.json({ 
      message: 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Произошла ошибка при обработке заявки' 
    });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`RowerHub.bike server running on port ${PORT}`);
  console.log('Railway deployment ready');
});