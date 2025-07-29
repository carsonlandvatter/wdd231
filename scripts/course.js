const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//ALL COURSES:
const allCourses = document.getElementById("all");

function displayAllCourses() {
    const totalCredits = document.getElementById("total-credits");
    const classes = document.getElementById('classes');
    classes.innerHTML = '';

    courses.forEach(function(course) {
        let credits = document.getElementById("credits");
        let certDescription = document.getElementById("certificate-description");
        let description = document.getElementById("description");
        let technology = document.getElementById("techonology");
        let closeModal = document.getElementById("closeModal");
        let courseTitle = document.getElementById("courseTitle");
        let courseSubject = document.getElementById("courseSubject");
        let modal = document.getElementById("courseModal")
        const card = document.createElement('div');

        if (course.completed === true) {
            card.classList.add('completed');
        }

        classes.appendChild(card);

        const subject = course.subject;
        const number = course.number;
        

        card.textContent = `${subject} ${number}`;

        const total  = courses.reduce(function(runningTotal, course) {
            return runningTotal + course.credits;
        }, 0);

        totalCredits.textContent = `${total}`;

        card.addEventListener('click', () => {
            modal.showModal();
            courseSubject.textContent = card.textContent;
            courseTitle.textContent = course.title;
            certDescription.textContent = "Certificate: " + course.certificate;
            credits.textContent = course.credits + " credits";
            description.textContent = course.description;
            technology.textContent = "Technology: " + course.technology;
        });

        closeModal.addEventListener('click', () => {
            modal.close();
        });

    });
allCourses.addEventListener('click', displayAllCourses)};

displayAllCourses();

//WDD COURSES: 
const wddCourses = document.getElementById("wdd");

wddCourses.addEventListener('click', () => {
        const totalCredits = document.getElementById("total-credits");
        const classes = document.getElementById('classes');
        classes.innerHTML = '';

        const wddSubject = courses.filter(function(course) {
            return course.subject === 'WDD';
        });

        const total = wddSubject.reduce(function(runningTotal, course) {
            return runningTotal + course.credits;
        }, 0);

        totalCredits.textContent = `${total}`;

        wddSubject.forEach(function(course) {
            let credits = document.getElementById("credits");
            let certDescription = document.getElementById("certificate-description");
            let description = document.getElementById("description");
            let technology = document.getElementById("techonology");
            let closeModal = document.getElementById("closeModal");
            let courseTitle = document.getElementById("courseTitle");
            let courseSubject = document.getElementById("courseSubject");
            let modal = document.getElementById("courseModal")
            const card = document.createElement('div');

            courseTitle.textContent = course.subject;

            if (course.completed === true) {
                card.classList.add('completed');
            }

            classes.appendChild(card);
    
            const subject = course.subject;
            const number = course.number;
    
            card.textContent = `${subject} ${number}`;

            card.addEventListener('click', () => {
                modal.showModal();
                courseSubject.textContent = card.textContent;
                courseTitle.textContent = course.title;
                certDescription.textContent = "Certificate: " + course.certificate;
                credits.textContent = course.credits + " credits";
                description.textContent = course.description;
                technology.textContent = "Technology: " + course.technology;
            });
    
            closeModal.addEventListener('click', () => {
                modal.close();
            });
        });
});

//CSE COURSES:

const cseCourses = document.getElementById("cse");

cseCourses.addEventListener('click', () => {
        const totalCredits = document.getElementById("total-credits");
        const classes = document.getElementById('classes');
        classes.innerHTML = '';

        const cseSubject = courses.filter(function(course) {
            return course.subject === 'CSE';
        });

        const total = cseSubject.reduce(function(runningTotal, course) {
            return runningTotal + course.credits;
        }, 0);

        totalCredits.textContent = `${total}`;

        cseSubject.forEach(function(course) {
            let credits = document.getElementById("credits");
            let certDescription = document.getElementById("certificate-description");
            let description = document.getElementById("description");
            let technology = document.getElementById("techonology");
            let closeModal = document.getElementById("closeModal");
            let courseTitle = document.getElementById("courseTitle");
            let courseSubject = document.getElementById("courseSubject");
            let modal = document.getElementById("courseModal")
            const card = document.createElement('div');


            courseTitle.textContent = course.subject;

            if (course.completed === true) {
                card.classList.add('completed');
            }

            classes.appendChild(card);
    
            const subject = course.subject;
            const number = course.number;
    
            card.textContent = `${subject} ${number}`;

            card.addEventListener('click', () => {
                modal.showModal();
                courseSubject.textContent = card.textContent;
                courseTitle.textContent = course.title;
                certDescription.textContent = "Certificate: " + course.certificate;
                credits.textContent = course.credits + " credits";
                description.textContent = course.description;
                technology.textContent = "Technology: " + course.technology;
            });
    
            closeModal.addEventListener('click', () => {
                modal.close();
            });
        });
});


//MODAL:
let credits = document.getElementById("credits");
let certDiscription = document.getElementById("certificate-description");
let description = document.getElementById("description");
let technology = document.getElementById("techonology");
let closeModal = document.getElementById("closeModal");
let courseTitle = document.getElementById("courseTitle");
let modal = document.getElementById("courseModal");