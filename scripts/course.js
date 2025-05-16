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

//First step is to tell get the course list and the total credits. 
const courseList = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");

//Create a function to display the courses.
function renderCourses(courseArray) {
//This is creating a function called renderCourses which saying that whatever array/list we give it, the function will use it. 
    courseList.innerHTML = "";
    //Clears the course list before adding new ones.
    courseArray.forEach(course => {
    //This loops thorugh ever course in the list that we gave it. 
    const style = course.completed ? "completed" : "";
    //This sets style to be named completed if it is true and nothing if it is false. 
    courseList.innerHTML += `
            <div class="course-card ${style}">
                <h3>${course.subject} ${course.number}</h3>
        `;
    });

    const total = courseArray.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = `Total Credits: ${total}`;
}

renderCourses(courses);

const allButton = document.querySelector("#all-courses");
allButton.addEventListener("click", () => {
    renderCourses(courses);
});

const wddButton = document.querySelector("#wdd-courses");

wddButton.addEventListener("click", () => {
    //filter through each course by calling the array courses then use .filter and make a function called course.
    const wddCourses = courses.filter(course => course.subject.startsWith('WDD'));
    renderCourses(wddCourses);
});

const cseButton = document.querySelector("#cse-courses");

cseButton.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject.startsWith('CSE'));
    renderCourses(cseCourses);
});