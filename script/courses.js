function toggleMkCourse(element) {
    // Get the course container
    const course = element.parentElement;
    
    // Toggle active class on the course
    course.classList.toggle('mk-active');
    
    // Toggle the plus/minus icon
    const toggle = element.querySelector('.mk-course-toggle i');
    toggle.classList.toggle('fa-plus');
    toggle.classList.toggle('fa-minus');
    
    // Toggle the content visibility
    const content = element.nextElementSibling;
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        
        // Set a timeout to hide the content inner after the animation
        setTimeout(() => {
            content.querySelector('.mk-course-content-inner').style.opacity = "0";
            content.querySelector('.mk-course-content-inner').style.transform = "translateY(20px)";
        }, 300);
    } else {
        // Show the content inner immediately
        content.querySelector('.mk-course-content-inner').style.opacity = "1";
        content.querySelector('.mk-course-content-inner').style.transform = "translateY(0)";
        
        // Set the max height for the animation
        content.style.maxHeight = content.scrollHeight + "px";
    }
}