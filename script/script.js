function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
        
        // Плавная прокрутка к якорям
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Если меню открыто на мобильных, закрываем его
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });

        let lastScrollTop = 0;
const header = document.querySelector("header");
let isHidden = false;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && !isHidden) {
        // Прокрутка вниз — скрываем header быстро
        header.style.transition = "transform 0.3s ease-in-out";
        header.style.transform = "translateY(-100%)";
        isHidden = true;
    } else if (scrollTop < lastScrollTop && isHidden) {
        // Прокрутка вверх — показываем header плавно
        header.style.transition = "transform 0.6s ease-in-out"; // Более плавное появление
        header.style.transform = "translateY(0)";
        isHidden = false;
    }

    lastScrollTop = scrollTop;
});




        document.addEventListener('DOMContentLoaded', function() {
            const bookingButton = document.getElementById('bookingButton');
            const bookingSidebar = document.getElementById('bookingSidebar');
            const closeSidebar = document.getElementById('closeSidebar');
            const overlay = document.getElementById('overlay');
            const bookingForm = document.getElementById('bookingForm');
            
            // Открытие сайдбара при клике на кнопку
            bookingButton.addEventListener('click', function() {
                bookingSidebar.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Запрет прокрутки основной страницы
            });
            
            // Закрытие сайдбара при клике на крестик
            closeSidebar.addEventListener('click', function() {
                bookingSidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Возвращаем прокрутку
            });
            
            // Закрытие сайдбара при клике на затемнение
            overlay.addEventListener('click', function() {
                bookingSidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Возвращаем прокрутку
            });
            
            // Форматирование телефонного номера
            const phoneInput = document.getElementById('phone');
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 0) {
                    if (value[0] === '7' || value[0] === '8') {
                        value = value.substring(1);
                    }
                    
                    let formattedValue = '+7';
                    
                    if (value.length > 0) {
                        formattedValue += ' (' + value.substring(0, 3);
                    }
                    if (value.length > 3) {
                        formattedValue += ') ' + value.substring(3, 6);
                    }
                    if (value.length > 6) {
                        formattedValue += '-' + value.substring(6, 8);
                    }
                    if (value.length > 8) {
                        formattedValue += '-' + value.substring(8, 10);
                    }
                    
                    e.target.value = formattedValue;
                }
            });
            
            // Обработка отправки формы
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Здесь будет код для отправки данных формы на сервер
                alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время для подтверждения записи.');
                
                // Закрываем сайдбар после успешной отправки
                bookingSidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
                
                // Очищаем форму
                bookingForm.reset();
            });
        });

        // язык
        document.addEventListener('DOMContentLoaded', function() {
            const langDropdown = document.querySelector('.language-dropdown');
            const langBtn = document.querySelector('.language-btn');
            
            if (langBtn && langDropdown) {
              langBtn.addEventListener('click', function(e) {
                // Только для мобильных устройств
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  e.stopPropagation();
                  langDropdown.classList.toggle('active');
                }
              });
              
              // Закрывать меню при клике вне его
              document.addEventListener('click', function(e) {
                if (!langDropdown.contains(e.target) && window.innerWidth <= 768) {
                  langDropdown.classList.remove('active');
                }
              });
              
              // Закрывать меню после выбора языка
              const langOptions = document.querySelectorAll('.language-content a');
              langOptions.forEach(option => {
                option.addEventListener('click', function() {
                  langDropdown.classList.remove('active');
                });
              });
              
              // Обработка переключения между мобильной и десктопной версией
              window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                  langDropdown.classList.remove('active');
                }
              });
            }
          });