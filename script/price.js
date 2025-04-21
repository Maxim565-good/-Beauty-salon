document.addEventListener('DOMContentLoaded', function() {
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        
      
        document.querySelectorAll('.category-content').forEach(item => {
          if (item !== content && item.classList.contains('active')) {
            item.classList.remove('active');
            item.previousElementSibling.querySelector('.arrow').classList.remove('up');
          }
        });
        
        
        content.classList.toggle('active');
        arrow.classList.toggle('up');
      });
    });
  });