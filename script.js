document.addEventListener('DOMContentLoaded', () => {
    const courseGrid = document.querySelector('.course-grid');

    // Sample course data (replace with actual data)
    
    const courses = [
        { title: 'Python Basics',
            img: '/Users/armaanmulani/Desktop/LearnIntel/Resources/PythonBasics.jpg',
            description: 'Learn the basics of Python with AI...' },
        { title: 'Machine Learning Basics', 
            img: '/Users/armaanmulani/Desktop/LearnIntel/Resources/ML.jpg', 
            description: 'Learn the basics of Machine Learning with AI...' },
        // ... more courses
    ];

    // Dynamically add courses to the grid
    courses.forEach(course => {
        let courseElement = `
            <div class="course">
                <img src="${course.img}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="#" class="learn-more">Learn More</a>
            </div>
        `;
        courseGrid.innerHTML += courseElement;
    });
//--------------------About Us Page Logic--------------------
    const appearElements = document.querySelectorAll('.appear-text, .appear-image');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)));
    };

    const displayScrollElement = (element) => {
        element.classList.add('show');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('show');
    };

    const handleScrollAnimation = () => {
        appearElements.forEach(el => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', handleScrollAnimation);
});
