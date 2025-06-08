# Размещение RowerHub.bike на Railway

## Шаг 1: Регистрация на Railway

1. Перейдите на https://railway.app
2. Нажмите "Login" и войдите через GitHub
3. Подтвердите аккаунт

## Шаг 2: Создание проекта

1. Нажмите "New Project"
2. Выберите "Deploy from GitHub repo"
3. Или выберите "Empty Project" если будете загружать файлы

## Шаг 3: Загрузка файлов

Если выбрали "Empty Project":
1. Нажмите "Add Service" → "GitHub Repo"
2. Загрузите эти файлы:
   - `server.js`
   - `package.json` 
   - `public/index.html`

## Шаг 4: Настройка переменных окружения

В настройках проекта добавьте:

```
TELEGRAM_BOT_TOKEN=7887699072:AAHKnmNuENm8EMsGKuZnWEStCFGw95-fhJ4
TELEGRAM_CHAT_ID=-4869453330
NODE_ENV=production
```

## Шаг 5: Деплой

1. Railway автоматически начнет деплой
2. Дождитесь сообщения "Deployment successful"
3. Получите ссылку вида: https://your-app.railway.app

## Шаг 6: Подключение домена

1. В настройках проекта найдите "Domains"
2. Нажмите "Add Domain"
3. Введите ваш домен
4. Скопируйте CNAME запись
5. В настройках домена добавьте CNAME:
   - Имя: www (или @)
   - Значение: [данные от Railway]

## Шаг 7: Проверка

1. Откройте ваш сайт по домену
2. Заполните форму контактов
3. Проверьте Telegram чат на уведомления

## Структура файлов для Railway:

```
railway-deploy/
├── server.js          # Серверная часть
├── package.json       # Зависимости
└── public/
    └── index.html     # Ваш сайт
```

## Готово!

Ваш сайт будет доступен 24/7 с Telegram уведомлениями.
Railway предоставляет бесплатный план с ограничениями.