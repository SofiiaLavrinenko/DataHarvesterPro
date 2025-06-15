# Настройка Telegram уведомлений через Netlify

## Проблема решена:
Форма отправляется, но уведомления не приходят в Telegram чат.

## Решение - настройка webhook в Netlify:

### Шаг 1: Зайти в настройки форм
1. Админка Netlify → ваш сайт rowerhub.bike
2. Site settings → Forms → Form notifications

### Шаг 2: Добавить webhook уведомление
1. Нажать "Add notification"
2. Выбрать "Outgoing webhook"
3. Настроить webhook:
   - **Event to listen for**: Form submission
   - **URL to notify**: `/.netlify/functions/contact`
   - **HTTP method**: POST

### Шаг 3: Сохранить настройки
Теперь при каждой отправке формы Netlify автоматически вызовет функцию, которая отправит уведомление в Telegram чат -1002126895025.

## Альтернативный способ (если webhook не работает):

### Zapier интеграция:
1. Создать аккаунт на zapier.com
2. Создать Zap: Netlify Forms → Telegram
3. В настройках формы добавить Zapier webhook URL

### Прямая интеграция через email:
1. В Telegram создать бота @EmailToTelegramBot
2. Получить email адрес для пересылки
3. В Netlify Forms добавить email уведомление на этот адрес

## Текущее состояние:
- ✅ Форма работает и сохраняет данные в Netlify
- ✅ Создана функция для отправки в Telegram
- ⏳ Нужно настроить webhook в админке Netlify

После настройки webhook все заявки будут автоматически приходить в Telegram чат.