# Настройка Telegram уведомлений

## Что уже настроено:
✅ Telegram Bot API интеграция
✅ Автоматическая отправка уведомлений о заявках
✅ Fallback система (заявки записываются в консоль)
✅ Полная валидация формы

## Вариант 1: Личные уведомления
1. **Найдите вашего бота в Telegram**
2. **Отправьте ему команду `/start`**
3. **Попробуйте отправить заявку** через форму на сайте

## Вариант 2: Групповой чат (рекомендуется)
1. **Создайте групповой чат** в Telegram
2. **Добавьте бота в этот чат**
3. **Сделайте бота администратором** группы
4. **Отправьте любое сообщение в группу** (чтобы активировать чат)
5. **Получите CHAT_ID группы**:
   - Отправьте сообщение в группу
   - Перейдите: https://api.telegram.org/bot[ВАШ_ТОКЕН]/getUpdates
   - Найдите "chat":{"id":-ЧИСЛО} - отрицательное число это ID группы
6. **Обновите TELEGRAM_CHAT_ID** на ID группы

## Что будет приходить в Telegram:
```
🚴‍♂️ НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ ВЕЛОСИПЕДА

👤 Клиент: Имя клиента
📧 Email: email@example.com
📱 Телефон: +48123456789

💬 Сообщение:
Текст сообщения от клиента

⏰ Время: 08.06.2025, 13:18:06 (Warsaw)

Свяжитесь с клиентом:
• Email: email@example.com
• Телефон: +48123456789
```

## Если уведомления не приходят:
- Проверьте, что отправили сообщение боту первым
- Заявки будут записываться в консоль сервера как резервный способ
- Все заявки обрабатываются, просто способ уведомления может отличаться

## Контактная форма включает:
- Валидация всех полей
- Защита от спама
- Переводы на русский/английский
- Уведомления об успешной отправке