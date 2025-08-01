# Руководство по размещению RowerHub.bike на хостинге

## 📁 Готовые файлы для хостинга

Ваш сайт готов к размещению! В папке `production/` находятся все необходимые файлы.

## 🎯 Два варианта размещения

### Вариант 1: Быстрое размещение (рекомендуется)
**Файл**: `production/index.html`
- Полностью автономный HTML файл
- Точная копия вашего текущего сайта
- Работает на любом хостинге
- **Форма связи**: показывает уведомление, данные сохраняются в консоли браузера

### Вариант 2: С Telegram уведомлениями
**Файлы**: `production/server.js` + `production/package.json`
- Полнофункциональный сайт с backend
- Telegram уведомления в ваш чат
- Требует Node.js хостинг

## 🚀 Пошаговая инструкция

### Для статического хостинга (Вариант 1):
1. Скачайте файл `production/index.html`
2. Загрузите на любой хостинг как главную страницу
3. Готово! Сайт работает

**Подходящие хостинги**:
- Netlify (бесплатно)
- Vercel (бесплатно)
- GitHub Pages
- Любой обычный хостинг

### Для хостинга с Node.js (Вариант 2):
1. Загрузите файлы:
   - `production/server.js`
   - `production/package.json`
2. Установите переменные окружения:
   ```
   TELEGRAM_BOT_TOKEN=7887699072:AAHKnmNuENm8EMsGKuZnWEStCFGw95-fhJ4
   TELEGRAM_CHAT_ID=-4869453330
   NODE_ENV=production
   PORT=3000
   ```
3. Запустите: `npm start`

**Подходящие хостинги**:
- Railway (бесплатно)
- Render (бесплатно)
- Heroku

## ✅ Что получится

### Дизайн и функции:
- ✅ Точно такой же внешний вид как сейчас
- ✅ Все анимации и эффекты
- ✅ Переключение языков (RU/EN)
- ✅ Адаптивный дизайн для телефонов
- ✅ Плавная прокрутка к форме
- ✅ Все кнопки "Забронировать" работают

### Контактная форма:
- **Вариант 1**: Показывает уведомление об успешной отправке
- **Вариант 2**: Отправляет в Telegram + показывает уведомление

## 🌐 Рекомендуемые домены

- `rowerhub.bike` (если доступен)
- `ebike-wroclaw.com`
- `courier-bikes.pl`
- Любой короткий и запоминающийся

## 📞 Техническая информация

**Контакты в сайте**:
- Телефон: 800 922 508
- Адрес: Zygmunta Krasińskiego 28, 50-450 Wrocław  
- Telegram: @BaitEb1ke

**Telegram Bot**:
- Токен: 7887699072:AAHKnmNuENm8EMsGKuZnWEStCFGw95-fhJ4
- Chat ID: -4869453330

## 🔧 Поддержка

Если возникнут проблемы:
1. Проверьте, что файл index.html загружен как главная страница
2. Убедитесь, что хостинг поддерживает HTML5
3. Для Telegram уведомлений проверьте переменные окружения

## ✨ Итог

**Ваш сайт будет выглядеть точно так же** как сейчас при размещении на хостинге. Весь дизайн, цвета, анимации и функции сохранены.