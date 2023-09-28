const circle = document.getElementById("circle")

circle.addEventListener("mouseenter", () => {
    if(!circle.classList.contains("hover")){
        circle.classList.add("hover")
    }
})

circle.addEventListener("mouseleave", () => {
    if(circle.classList.contains("hover")){
        circle.classList.remove("hover")
    }
})

// // this is new line

const phoneIphone = document.querySelector(".iphone");
const samsungPhone = document.querySelector(".samsung");

phoneIphone.addEventListener("click", () => {
  if (!phoneIphone.classList.contains("samsung")) {
    phoneIphone.classList.add("samsung");
    samsungPhone.classList.remove("samsung");
  }
});

samsungPhone.addEventListener("click", () => {
  if (phoneIphone.classList.contains("samsung")) {
    phoneIphone.classList.remove("samsung");
    samsungPhone.classList.add("samsung");
  }
});


const button = document.querySelector(".click")
const paragraph = document.querySelector(".paragraph")
button.addEventListener("click",()=>{
paragraph.classList.toggle("visible")

})
