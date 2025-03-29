const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const { name, email, phone } = req.body;
  const text = `🚀У вас нове повідомлення!🚀\n👤Ім'я: ${name}!\n📨Електронна пошта: ${email}\n📱Телефон: ${phone}`;

  try {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        chat_id: process.env.TELEGRAM_CHAT_ID,
      }),
    });

    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Не вдалося надіслати повідомлення' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
