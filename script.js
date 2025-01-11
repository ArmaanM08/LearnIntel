document.addEventListener('DOMContentLoaded', () => {
    //--------------------Courses Page Logic--------------------
    const courseGrid = document.querySelector('.course-grid');

    const courses = [
        { 
            title: 'Python Basics',
            img: '/Users/armaanmulani/Desktop/LearnIntel/Resources/PythonBasics.jpg',
            description: 'Learn the basics of Python with AI...' 
        },
        { 
            title: 'Machine Learning Basics', 
            img: '/Users/armaanmulani/Desktop/LearnIntel/Resources/ML.jpg', 
            description: 'Learn the basics of Machine Learning with AI...' 
        }
        // ... more courses
    ];

    courses.forEach(course => {
        // You need to create string literals using backticks (`) for courseElement
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

    //--------------------User Dashboard Logic--------------------
    // Sample User Data (Replace with actual data from database/server)
    const userData = {
        username: "JohnDoe", 
        courses: [
            { 
                id: "course1",
                title: "Introduction to AI",
                difficulty: "Beginner", 
                progress: 60, // In percentage
                quizScores: [8, null] // Scores for quizzes, null for not taken
            },
            { 
                id: "course2",
                title: "Machine Learning Basics",
                difficulty: "Intermediate",
                progress: 25,
                quizScores: [null, null] 
            }
            // ... more courses
        ]
    };

    // Update the dashboard content dynamically
    document.querySelector('.dashboard h2').textContent = `Welcome, ${userData.username}!`;

    userData.courses.forEach(course => {
        // Find the correct course card to update (assuming you'll use course IDs)
        const courseCard = document.querySelector(`.course-card[data-course-id="${course.id}"]`); 

        if (courseCard) {
            courseCard.querySelector('.course-info h4').textContent = course.title;
            // Assuming you have an element with id 'course1-difficulty' inside .course-info
            courseCard.querySelector('.course-info #course1-difficulty').textContent = course.difficulty;
            courseCard.querySelector('.progress-bar .progress').style.width = `${course.progress}%`; 

            // Update quiz scores (add logic to handle more than 2 quizzes)
            courseCard.querySelector('.quiz-scores #course1-quiz1').textContent = course.quizScores[0] ? `${course.quizScores[0]}/10` : '-';
            courseCard.querySelector('.quiz-scores #course1-quiz2').textContent = course.quizScores[1] ? `${course.quizScores[1]}/10` : '-';
        }
    }); 
});

//-------------------Login form Page Logic-------------------
