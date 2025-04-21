document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.getElementById('show-more-btn');
  const hiddenItems = document.querySelectorAll('.gallery-link.hidden');
  
  showMoreBtn.addEventListener('click', function() {
      // Показываем все скрытые элементы
      hiddenItems.forEach(function(item) {
          item.classList.remove('hidden');
      });
      
      // Скрываем кнопку после показа всех фотографий
      showMoreBtn.classList.add('hidden');
  });
});