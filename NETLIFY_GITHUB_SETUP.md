# Настройка Netlify через GitHub

## Что уже сделано
✅ Создан файл `netlify.toml` в корне проекта
✅ Указан правильный путь публикации: `netlify-deploy`

## Настройки в Netlify Dashboard

После подключения GitHub репозитория в Netlify:

### 1. Build settings
```
Build command: echo 'Site is ready for deployment'
Publish directory: netlify-deploy
```

### 2. Или используйте автоматические настройки
Netlify автоматически прочитает файл `netlify.toml` и применит настройки:
- **Папка публикации:** `netlify-deploy`
- **Команда сборки:** не требуется (файл готов)

### 3. Подключение домена rowerhub.bike

В Netlify перейдите в:
**Site settings → Domain management → Custom domains**

1. Нажмите **"Add custom domain"**
2. Введите: `rowerhub.bike`
3. Подтвердите владение доменом

### 4. DNS настройки в imena.ua

Добавьте эти записи в DNS настройках:

```
Тип: A
Имя: @
Значение: 75.2.60.5

Тип: CNAME
Имя: www  
Значение: [ваш-сайт].netlify.app
```

## Автоматическое обновление

Теперь при каждом обновлении GitHub репозитория:
1. Netlify автоматически пересоберет сайт
2. Возьмет файлы из папки `netlify-deploy`  
3. Опубликует обновления на `rowerhub.bike`

## Проверка развертывания

1. Зайдите в **Deploys** в Netlify dashboard
2. Убедитесь что статус **"Published"**
3. Проверьте что используется папка `netlify-deploy`
4. Протестируйте сайт по временному URL Netlify

Сайт будет доступен через 10-60 минут после настройки DNS.