const courses = [
    {
        name:"Create an LMS Website with LearnPress",
        author:"by Determined-Poitras",
        time:"2Weeks",
        students: 156,
        level:"All levels",
        lessons: 20,
        price: 29.0,
        Status:"Free",
        image:"picture/CreateAn.png",
        category:"Photography",
        Quiz: 3

    },
    {
        name:"Create an LMS Website with LearnPress",
        author:"by Determined-Poitras",
        time:"2Weeks",
        students: 156,
        level:"All levels",
        lessons: 20,
        price: 29.0,
        Status:"Free",
        image:"picture/DesignAweb.png",
        category:"Photography",
        Quiz: 3
    },
    {
        name:"Create an LMS Website with LearnPress",
        author:"by Determined-Poitras",
        time:"2Weeks",
        students: 156,
        level:"All levels",
        lessons: 20,
        price: 29.0,
        Status:"Free",
        image:"picture/img3.png" ,
        category:"Photography",
        Quiz: 3
    },
    
    {
        name:"Create an LMS Website with LearnPress",
        author:"by Determined-Poitras",
        time:"2Weeks",
        students: 156,
        level:"All levels",
        lessons: 20,
        price: 29.0,
        Status:"Free",
        image:"picture/img4.png",
        category:"Photography",
        Quiz: 3
    },
    {
        name:"Create an LMS Website with LearnPress",
        author:"by Determined-Poitras",
        time:"2Weeks",
        students: 156,
        level:"All levels",
        lessons: 20,
        price: 29.0,
        Status:"Free",
        image:"picture/img5.png",
        category:"Photography",
        Quiz: 3
    },
    {
        name:"Create an LMS Website with LearnPress",
        author:"by Determined-Poitras",
        time:"2Weeks",
        students: 156,
        level:"All levels",
        lessons: 20,
        price: 29.0,
        Status:"Free",
        image:"picture/img6.png",
        category:"Photography",
        Quiz: 3
    }

];

const curriculum = [
    {
        SectionTitle:"Lessons With Video Content 1",
        Lessons: 5,
        Duration: 45,
        content:[{
        Title:"Lessons with video content",
        duration: "12:20"},
        {
        Title:"Lessons with video content",
        duration: "10:05"
        },
        {
        Title:"Lessons with video content",
        duration: "22:25"
        }]
    },

    {
        SectionTitle:"Lessons With Video Content 2",
        Lessons: 3,
        Duration: 45,
        content:[{
        Title:"Lessons with video content",
        duration: "12:20"
        },
        {
        Title:"Lessons with video content",
        duration: "10:05"
        },
        {
        Title:"Lessons with video content",
        duration: "22:25"
        }]
    },

    {
        SectionTitle:"Lessons With Video Content 3",
        Lessons: 5,
        Duration: 45,
        content:[{
        Title:"Lessons with video content",
        duration: "12:20"},
        {
        Title:"Lessons with video content",
        duration: "10:05"
        },
        {
        Title:"Lessons with video content",
        duration: "22:25"
        }]
    },
    {
        SectionTitle:"Lessons With Video Content 4",
        Lessons: 5,
        Duration: 45,
        content:[{
        Title:"Lessons with video content",
        duration: "12:20"},
        {
        Title:"Lessons with video content",
        duration: "10:05"
        },
        {
        Title:"Lessons with video content",
        duration: "22:25"
        }]
    }
        ];

const Overview = {
    describe:`<p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.</p>
    
    <p>LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress? No comments yet! You be the first to comment.</p>`

};

const Instructor = [{
    image: "./picture/Instructor.png",
    name: "ThimPress",
    describe:"LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    students: 156,
    Lessons: 20,
    quotes:"LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online."

}];

const FAQs = [{
    question: "What Does Royalty Free Mean?" ,
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
},
{
    question: "What Does Royalty Free Mean?" ,
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
},
{
    question: "What Does Royalty Free Mean?" ,
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
},
{
    question: "What Does Royalty Free Mean?" ,
    Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
},

];

var users= [
    {
        username: "phatquang1102",
        email:"phatquang1102@gmail.com",
        password: "trien123"
    
    },
{
    username:"phamquangphat1102",
    email:"phamquangphat1102@gmail.com",
    password:"trien123"
}];
    

//hien thi du lieu khoa hoc
function renderCourses (courseArray) {
const courseListContainer = document.getElementById('course-list');
const template = document.getElementById('course-template');


    courseListContainer.innerHTML ='';
    courseArray.forEach(course => {
        const courseCard = template.content.cloneNode(true);

        courseCard.querySelector("img").src = course.image;
        courseCard.querySelector(".course-category").textContent = course.category;
        courseCard.querySelector("h1").textContent = course.name;
        courseCard.querySelector(".author").textContent =course.author;
        courseCard.querySelector(".time").textContent = course.time;
        courseCard.querySelector(".students").textContent = course.students;
        courseCard.querySelector(".level").textContent = course.level;
        courseCard.querySelector(".lessons").textContent = course.lessons;
        courseCard.querySelector(".course-price").textContent = `$${course.price}`;
        courseCard.querySelector(".course-status").textContent = course.Status;

        courseListContainer.appendChild(courseCard);


    });

};
document.addEventListener('DOMContentLoaded', () => {
    renderCourses(courses);
});


//Nut scroll top page
const btn = document.querySelector(".scroll-up-btn");

btn.addEventListener('click',() =>{
    document.documentElement.scrollTo({
        top:0,
        behavior:"smooth",
    });
});



//Courselisting Page
document.querySelector('.time').innerHTML= courses[0].time;
document.querySelector('.students').innerHTML = courses[0].students;
document.querySelector('.level').innerHTML = courses[0].level;
document.querySelector('.lessons').innerHTML = courses[0].lessons;
document.querySelector('.quiz').innerHTML = courses[0].Quiz;    
document.querySelector('.author').innerHTML = courses[0].author;
document.querySelector('.course-price').innerHTML = `$${courses[0].price}`;       
document.querySelector('.course-status').innerHTML = courses[0].Status;
document.querySelector('.Thumbnailpicture').src = courses[0].image;
document.querySelector('.course-category').innerHTML = courses[0].category;



document.querySelector('#Overview').innerHTML = Overview.describe;




//render chi tiet khoa hoc
const CurriculumContainer = document.getElementById('Curriculum-container');
const curriculumTemplate =document.getElementById('Curriculum-template');

 curriculum.forEach ((section,index)=>{
    const clone = curriculumTemplate.content.cloneNode(true);

    clone.querySelector('.dropbtn').setAttribute('data-index', index);
    clone.querySelector('.Curriculumdropdown-content').setAttribute('data-index', index);
    clone.querySelector('.SectionTitle').textContent = section.SectionTitle;
    clone.querySelector('.Lessons').textContent = section.Lessons;
    clone.querySelector('.Duration').textContent = section.Duration;

    const contentSection = clone.querySelector('#content-section');
    contentSection.innerHTML = ''
    section.content.forEach((lesson) => {
        const lessonDiv = document.createElement('div');
        lessonDiv.className = 'flex pr-[20px] py-[10px] justify-between pl-[40px] bg-[white]';
        lessonDiv.innerHTML = `
            <div class="flex gap-[10px] items-center">
                <div class="fit  hover:cursor-pointer"><img src="picture/darkgray.png" alt="Book icon"></div>
                <h2 class="Title hover:text-[#FF782D] hover:cursor-pointer">${lesson.Title}</h2>
            </div>
            <div class="flex gap-[20px] items-center">
                <button class="bg-[#2580D5] rounded-[8px] px-[12px] py-[4px] text-[white]">Preview</button>
                <span class="Durationlesson">${lesson.duration}</span>
            </div>
        `;
        contentSection.appendChild(lessonDiv); // Thêm từng bài học vào content-section
    });


    
    CurriculumContainer.appendChild(clone);
 });

//toggle chi tiet khoa hoc
function dropdown(event) {
    const button= event.target;
    const index = button.getAttribute('data-index');
    document.querySelectorAll('.Curriculumdropdown-content').forEach(dropdown =>{
        if (dropdown.getAttribute('data-index') !== index){
            dropdown.classList.add('hidden');
        }
        });

    
    
    const dropdownContent = document.querySelector(`.Curriculumdropdown-content[data-index ="${index}"]`);
    dropdownContent.classList.toggle('show');
};



//open course detail
function opencoursedetails(evt,element){
    var  tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i <tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByName("tablinks");
    for(var i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active","");

    }
    document.getElementById(element).style.display = "flex";
    evt.currentTarget.className += "active";
    
};



document.querySelector('.Instructorstudents').textContent = Instructor[0].students;
document.querySelector('.Instructorlessons').textContent = Instructor[0].Lessons;
document.querySelector(".Instructorpicture").src=Instructor[0].image;
document.querySelector('.Instructorname').textContent= Instructor[0].name;
document.querySelector('.Instructordescribe').textContent= Instructor[0].describe;
document.querySelector('.quotes').textContent = Instructor[0].quotes;


//hien thi FAQS
function renderFAQs(FAQs){
    const faqContainer = document.getElementById('FAQs');
    faqContainer.innerHTML ='';

    FAQs.forEach((faq,index) =>{
        const faqItem =document.createElement('div');
        faqItem.className = 'faq-item ';

        faqItem.innerHTML = `
        <div class="faq-question " onclick ="toggleAnswer(${index})">
            <h3>${faq.question}</h3>
            <button class="arrow-btn">▼</button>
        </div>
        <div class="faq-answer hidden " id="faq-answer-${index}">
            <p>${faq.Answer}</p>
        </div> `
        ;
        faqContainer.appendChild(faqItem);


    });
};

//toggle FAQS
function toggleAnswer(index){
    const answerElement =document.getElementById(`faq-answer-${index}`);
    const isVisible = answerElement.style.display === 'flex';

    const allanswers = document.querySelectorAll('.faq-answer');
    const allQuestions = document.querySelectorAll('.faq-question');
    allanswers.forEach(answer => answer.style.display = 'none');
    allQuestions.forEach(question => question.classList.remove('active'));

    if(!isVisible){
        answerElement.style.display = 'flex';
        questionElement.classList.add('active');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if(isLogin){
        renderFAQs(FAQs);
    }
    
});

//check email
function checkEmail(email,users){
    for(let i = 0; i < users.length;i++){
        if (users[i].email === email){
            return true;
        }
    }
    return false;

};
//register function
function Register(){
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const cfpassword= document.getElementById('confirm-password').value;

    

if (!username || !email || !password || !cfpassword){
    alert('Vui lòng điền đẩy đủ thông tin');
    return;
}

    if (checkEmail(email,users)){
        alert('Email đã tồn tại, vui lòng chọn emial khác');
        return;
    }
    if (password !== cfpassword){
        alert('Mật khẩu xác nhận không trùng khớp');
        return;
    }

    const newUser = {
        username: username,
        email: email,
        password: password
    };
    users.push(newUser);
    alert('Đăng ký thành công');
    window.location.href = "Loginpage.html";
    

};

//function check user info
function checkuser(username,password,users){
    for(let i = 0; i < users.length;i++){
        if ((users[i].username === username) && (users[i].password === password)){
            return true;
        }
    }
    return false;

}
//login function
function Login(){
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if(checkuser(username,password,users)){
    alert("Bạn đã dăng nhập thành công")
    
    
}
else {
    alert("Email hoặc mật khẩu không đúng")
    return;
} 



};


//forgetpassword 
function forgetpassword(){
const email = document.getElementById('forget-email').value;

if (checkEmail(email,users)){
    alert('Đã gửi lại mã xác nhận qua email'); 
}
else {
    alert('Email không tồn tại');
    return;
}
};


//check login va enroll
var isLogin = false;
var isEnrolled = false;
const overviewTab = document.getElementById('Overview');
const curriculumTab = document.getElementById('Curriculum');
const instructorTab = document.getElementById('Instructor');
const faqsTab = document.getElementById('FAQs');
const enrollbutton = document.getElementById('startnow');

   


if (!isLogin) {
    
    overviewTab.innerHTML = "<p> Vui lòng <a href='Loginpage.html'>  đăng nhập </a> để xem nội dung khoá học";
    curriculumTab.innerHTML ="<p> Vui lòng <a href='Loginpage.html'>  đăng nhập </a> để xem nội dung khoá học";
    instructorTab.innerHTML ="<p> Vui lòng <a href='Loginpage.html'>  đăng nhập </a> để xem nội dung khoá học";
    faqsTab.innerHTML="<p> Vui lòng <a href='Loginpage.html'>  đăng nhập </a> để xem nội dung khoá học";
    

   
}
else{

    if(!isEnrolled){
        curriculumTab.innerHTML ="<p> Vui lòng  đăng kí khoá học để xem nội dung khoá học";
        
}

    else{
    overviewTab.classList.add('active');
    enrollbutton.innerHTML = "Continue Learning";
    
}
};





//function show password
function showpassword(){
    var x = document.getElementById('password');
    
    
    
    if (x.type  === "password"){
        x.type =  "text";
    }
    else {
        x.type ="password";
    }
};

function showpassword1(){
    var y = document.getElementById('register-password');
    if (y.type  === "password"){
        y.type =  "text";
    }
    else {
        y.type ="password";
    }
};

function showpassword2(){
    var z = document.getElementById('confirm-password');
    if (z.type  === "password"){
        z.type =  "text";
    }
    else {
        z.type ="password";
    }
};





    

