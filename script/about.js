 // Create and animate floating objects
 document.addEventListener('DOMContentLoaded', function() {
    const floatingBackground = document.querySelector('.floating-objects-background');
    
    // Different shapes, sizes, and colors for variety
    const shapes = ['', 'square', 'triangle', 'diamond'];
    const sizes = ['', 'medium', 'large'];
    const colors = ['', 'pink', 'cherry'];
    
    // MODIFIED: Create 30 random floating objects (doubled from 15)
    for (let i = 0; i < 30; i++) {
        const object = document.createElement('div');
        
        // Random appearance
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random position
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        // Set classes and position
        object.className = `floating-object ${shape} ${size} ${color}`;
        object.style.left = `${xPos}%`;
        object.style.top = `${yPos}%`;
        
        // Add to background
        floatingBackground.appendChild(object);
    }
    
    // Mouse interaction effect (desktop only)
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (!isMobile) {
        document.addEventListener('mousemove', function(e) {
            const objects = document.querySelectorAll('.floating-object');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            objects.forEach(object => {
                const rect = object.getBoundingClientRect();
                const objectCenterX = rect.left + rect.width / 2;
                const objectCenterY = rect.top + rect.height / 2;
                
                // Calculate distance between mouse and object center
                const distX = mouseX - objectCenterX;
                const distY = mouseY - objectCenterY;
                const distance = Math.sqrt(distX * distX + distY * distY);
                
                // Apply repulsion effect when mouse is within 300px
                if (distance < 300) {
                    // Stronger effect when closer
                    const repulsionStrength = 40 * (1 - distance / 300);
                    
                    // Calculate movement direction (away from mouse)
                    const moveX = (distX / distance) * -repulsionStrength;
                    const moveY = (distY / distance) * -repulsionStrength;
                    
                    // Apply transformation
                    object.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    // Reset position when mouse is far away
                    object.style.transform = '';
                }
            });
        });
    }
});