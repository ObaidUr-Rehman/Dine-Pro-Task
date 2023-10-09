const div1 = document.querySelector('.option1')
const div2 = document.querySelector('.option2')
const div3 = document.querySelector('.option3')
const div4 = document.querySelector('.option4')
const img=document.getElementById('myimg')


const icon = document.getElementById('responsive')
const responsive = document.getElementById('nav_mobile')

icon.addEventListener('click', () => {
//    responsive.style.display = "block";
   if (responsive.style.display === "none" || responsive.style.display === "") {
       responsive.style.display = "block";
     } else {
       responsive.style.display = "none"; 
    }
})


// Mouse over event
div1.addEventListener('mouseover', () => {
    img.src="./img/Delivery.gif"
});

div2.addEventListener('mouseover', () => {
    img.src="./img/Take_Away.gif"
});

div3.addEventListener('mouseover', () => {
    img.src="./img/Dine_In.gif"
});

div4.addEventListener('mouseover', () => {
    img.src="./img/Delivery.gif"
});


// Mouse out event
div1.addEventListener('mouseout', () => {
    img.src="./img/Order_girl.png"
});

div2.addEventListener('mouseout', () => {
    img.src="./img/Order_girl.png"
});

div3.addEventListener('mouseout', () => {
    img.src="./img/Order_girl.png"
});

div4.addEventListener('mouseout', () => {
    img.src="./img/Order_girl.png"
});