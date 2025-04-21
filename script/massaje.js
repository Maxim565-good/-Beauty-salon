 // Create bubbles
 function createBubbles() {
    const container = document.getElementById('bubbles-container');
    const colors = ['#ff9ebc', '#ffcfdb', '#b9b2cc', '#990033'];
    
    for (let i = 0; i < 40; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random properties
        const size = Math.random() * 50 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 15;
        
        // Apply styles
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.backgroundColor = color;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.opacity = Math.random() * 0.3;
        
        container.appendChild(bubble);
    }
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Add animation classes when scrolled into view
function animateOnScroll() {
    const elements = [
        document.getElementById('section-title'),
        document.getElementById('massage-intro'),
        document.getElementById('photo-1'),
        document.getElementById('photo-2'),
        document.getElementById('photo-3'),
        document.getElementById('photo-4'),
        document.getElementById('photo-5'),
        document.getElementById('cta-container')
    ];
    
    elements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('animate')) {
            element.classList.add('animate');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createBubbles();
    animateOnScroll(); // Initial check on page load
    
    // Scroll event listener
    window.addEventListener('scroll', animateOnScroll);
});

// For demo purposes - trigger animations right away
setTimeout(() => {
    document.getElementById('section-title').classList.add('animate');
    document.getElementById('massage-intro').classList.add('animate');
    
    setTimeout(() => {
        document.getElementById('photo-1').classList.add('animate');
        
        setTimeout(() => {
            document.getElementById('photo-2').classList.add('animate');
            
            setTimeout(() => {
                document.getElementById('photo-3').classList.add('animate');
                
                setTimeout(() => {
                    document.getElementById('photo-4').classList.add('animate');
                    
                    setTimeout(() => {
                        document.getElementById('photo-5').classList.add('animate');
                        
                        setTimeout(() => {
                            document.getElementById('cta-container').classList.add('animate');
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 500);
}, 500);