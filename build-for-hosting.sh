#!/bin/bash

echo "Создание production сборки для хостинга..."

# Создать папку production
mkdir -p production

# Копировать готовые файлы для хостинга
cp package.production.json production/package.json
cp server.production.js production/server.js
cp DEPLOY_GUIDE.md production/

# Копировать shared схемы
cp -r shared production/

# Создать основные HTML файлы для статического хостинга
mkdir -p production/static

echo "Создание упрощенной HTML версии..."

cat > production/static/index.html << 'EOF'
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RowerHub.bike - Аренда электровелосипедов во Вроцлаве</title>
    <meta name="description" content="Профессиональная аренда электровелосипедов для курьеров во Вроцлаве. Надежные велосипеды, доступные цены, круглосуточная поддержка.">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root {
            --primary: 22 163 74;
            --background: 255 255 255;
            --foreground: 0 0 0;
        }
        .hero-bg {
            background: linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(21, 128, 61) 100%);
        }
    </style>
</head>
<body class="bg-white text-gray-900">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-green-600">RowerHub.bike</div>
            <div class="flex gap-4">
                <button onclick="setLanguage('ru')" class="px-3 py-1 rounded bg-gray-100">RU</button>
                <button onclick="setLanguage('en')" class="px-3 py-1 rounded bg-gray-100">EN</button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-bg text-white py-20">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6" data-ru="Аренда электровелосипедов для курьеров" data-en="E-bike rental for couriers">
                Аренда электровелосипедов для курьеров
            </h1>
            <p class="text-xl mb-8" data-ru="Профессиональные решения мобильности во Вроцлаве" data-en="Professional mobility solutions in Wrocław">
                Профессиональные решения мобильности во Вроцлаве
            </p>
            <button onclick="scrollToContact()" class="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition" data-ru="Забронировать сейчас" data-en="Book now">
                Забронировать сейчас
            </button>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12" data-ru="Тарифы" data-en="Pricing">Тарифы</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4" data-ru="Дневной" data-en="Daily">Дневной</h3>
                    <div class="text-3xl font-bold text-green-600 mb-4">50 zł</div>
                    <p class="text-gray-600 mb-6" data-ru="За 24 часа" data-en="Per 24 hours">За 24 часа</p>
                    <button onclick="scrollToContact()" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition" data-ru="Забронировать" data-en="Book">
                        Забронировать
                    </button>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-2 border-green-600">
                    <h3 class="text-xl font-semibold mb-4" data-ru="Недельный" data-en="Weekly">Недельный</h3>
                    <div class="text-3xl font-bold text-green-600 mb-4">300 zł</div>
                    <p class="text-gray-600 mb-6" data-ru="7 дней" data-en="7 days">7 дней</p>
                    <button onclick="scrollToContact()" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition" data-ru="Забронировать" data-en="Book">
                        Забронировать
                    </button>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4" data-ru="Месячный" data-en="Monthly">Месячный</h3>
                    <div class="text-3xl font-bold text-green-600 mb-4">1000 zł</div>
                    <p class="text-gray-600 mb-6" data-ru="30 дней" data-en="30 days">30 дней</p>
                    <button onclick="scrollToContact()" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition" data-ru="Забронировать" data-en="Book">
                        Забронировать
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="kontakt" class="py-16">
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12" data-ru="Свяжитесь с нами" data-en="Contact us">Свяжитесь с нами</h2>
            
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-xl font-semibold mb-6" data-ru="Контактная информация" data-en="Contact information">Контактная информация</h3>
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="text-green-600">📞</span>
                            <a href="tel:800922508" class="hover:text-green-600">800 922 508</a>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-green-600">📍</span>
                            <span>Zygmunta Krasińskiego 28, 50-450 Wrocław</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-green-600">💬</span>
                            <a href="https://t.me/BaitEb1ke" target="_blank" class="hover:text-green-600">@BaitEb1ke</a>
                        </div>
                    </div>
                </div>

                <div>
                    <form id="contactForm" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2" data-ru="Имя" data-en="Name">Имя</label>
                            <input type="text" id="name" required class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2" data-ru="Email" data-en="Email">Email</label>
                            <input type="email" id="email" required class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2" data-ru="Телефон" data-en="Phone">Телефон</label>
                            <input type="tel" id="phone" required class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                        </div>
                        <button type="submit" class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold" data-ru="Отправить заявку" data-en="Send request">
                            Отправить заявку
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2025 RowerHub.bike - <span data-ru="Аренда электровелосипедов во Вроцлаве" data-en="E-bike rental in Wrocław">Аренда электровелосипедов во Вроцлаве</span></p>
        </div>
    </footer>

    <script>
        let currentLanguage = 'ru';

        function setLanguage(lang) {
            currentLanguage = lang;
            document.querySelectorAll('[data-ru]').forEach(el => {
                if (lang === 'ru') {
                    el.textContent = el.getAttribute('data-ru');
                } else {
                    el.textContent = el.getAttribute('data-en');
                }
            });
        }

        function scrollToContact() {
            document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
        }

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Show success message
            alert(currentLanguage === 'ru' ? 
                'Ваша заявка принята! Мы свяжемся с вами в ближайшее время.' : 
                'Your request has been received! We will contact you soon.'
            );

            // Reset form
            this.reset();
        });
    </script>
</body>
</html>
EOF

echo "Production файлы готовы!"
echo ""
echo "Для размещения на хостинге:"
echo "1. Статический сайт: загрузите файлы из production/static/"
echo "2. Полнофункциональный сайт: загрузите файлы из production/"
echo "3. Инструкции: см. production/DEPLOY_GUIDE.md"