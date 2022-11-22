const reviews =[
    {
        id:1,
        name:"Susan Smith",
        job:"Software Developer",
        image:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque numquam repellendus nisi officiis, magnam amet impedit repudiandae earum dicta, voluptatem odit ducimus libero suscipit voluptate harum saepe exercitationem consectetur hic."
    },
    {
        id:2,
        name:"Jane Bogha",
        job:"Software Engineer",
        image:"https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi fuga architecto laboriosam repellendus, eligendi inventore distinctio maxime? Asperiores alias corporis, natus laboriosam ad repudiandae labore enim esse veritatis sed."
    },
    {
        id:3,
        name:"Kim Jane",
        job:"UI Developer",
        image:"https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg?w=2000",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis harum sequi commodi eius, doloribus excepturi quasi natus iure voluptates eligendi tempore, facilis veniam accusamus quod nostrum molestias porro dolorum."
    },
    {
        id:4,
        name:"Avan Grad",
        job:"Frontend Developer",
        image:"https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugiat magnam consequatur aut ut veniam neque? Numquam cupiditate vel harum ipsam. Explicabo velit, sequi ex eos quisquam dignissimos ut similique."
    },
    {
        id:5,
        name:"Elia Nona",
        job:"Backend Developer",
        image:"https://image.shutterstock.com/image-photo/close-portrait-satisfied-gorgeous-person-260nw-1882005331.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, impedit dolore nulla quidem earum pariatur voluptas dicta praesentium recusandae, dolores ipsam consectetur quo veniam mollitia officia, laboriosam vel. Nostrum, quibusdam."
    },
    {
        id:6,
        name:"Nola Granus",
        job:"Devops Engineer",
        image:"https://www.andreasollenberger.com/wp-content/uploads/2017/06/Photos-Women-Photography-Glamor-Gainesville-Florida-14.jpg",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis cupiditate, quibusdam a rerum quidem est. Quam necessitatibus obcaecati ratione ut voluptate cupiditate, sit adipisci sapiente recusandae, quidem libero quas ipsa."
    },
    {
        id:7,
        name:"Sara Jonas",
        job:"Wev Desighner",
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        text:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quis nihil blanditiis saepe cumque quae, vitae beatae exercitationem nobis, facere assumenda dolor reiciendis iste voluptatum perferendis impedit distinctio esse recusandae omnis quos."
    }
]

const personImage = document.getElementById("person-image")
const author= document.getElementById("author")
const job = document.getElementById("job")
const text = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// setting initial review 
let currentReview = 0;

// to display an initial review

window.addEventListener('DOMContentLoaded', function(){
   showPerson(currentReview)
})

function showPerson(person){
    const item = reviews[person]
    personImage.src = item.image;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

prevBtn.addEventListener('click', function(){
   
    if(currentReview > 0){
    currentReview--
    }
    showPerson(currentReview)
})
nextBtn.addEventListener('click', function(){
   
    if(currentReview < reviews.length-1){
        currentReview++
        }
        showPerson(currentReview)
})
randomBtn.addEventListener('click', function(){
    currentReview = getRandomNumber()
    showPerson(currentReview)
})

const getRandomNumber = () =>{
    return Math.floor(Math.random()*reviews.length)
}