// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Portfolio filter functionality
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else {
            const tags = project.querySelectorAll('span.text-xs');
            let hasTag = false;
            tags.forEach(tag => {
                if (tag.textContent.toLowerCase().includes(category)) {
                    hasTag = true;
                }
            });
            project.style.display = hasTag ? 'block' : 'none';
        }
    });
}
// Add any additional interactive elements here