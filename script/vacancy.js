document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const vacancyCards = document.querySelectorAll('.vacancy-card');
    const vacanciesGrid = document.querySelector('.vacancies-grid');
    
    // Фильтрация вакансий
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс к нажатой кнопке
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Фильтруем вакансии
            let visibleCards = 0;
            
            vacancyCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                    card.style.display = 'block';
                    visibleCards++;
                    
                    // Сбросим анимации, чтобы они запустились заново
                    card.style.animation = 'none';
                    card.offsetHeight; // Форсируем reflow
                    
                    if (visibleCards % 2 === 1) {
                        card.style.animation = 'fadeInLeft 0.6s ease forwards';
                    } else {
                        card.style.animation = 'fadeInRight 0.6s ease forwards';
                    }
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Показываем сообщение, если нет результатов
            const noResultsElem = document.querySelector('.no-results');
            
            if (visibleCards === 0) {
                if (!noResultsElem) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.textContent = 'По вашему запросу вакансий не найдено';
                    vacanciesGrid.appendChild(noResults);
                }
            } else if (noResultsElem) {
                noResultsElem.remove();
            }
        });
    });
    
    // Эффект при наведении для кнопок "Откликнуться"
    const applyBtns = document.querySelectorAll('.apply-btn');
    
    applyBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.textContent = '→ Отправить резюме';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.textContent = 'Откликнуться';
        });
        
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const vacancy = this.closest('.vacancy-card').querySelector('.vacancy-title').textContent;
            alert(`Вы откликнулись на вакансию: ${vacancy}`);
        });
    });
    
    // Анимация при клике на карточку
    vacancyCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.03)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
});