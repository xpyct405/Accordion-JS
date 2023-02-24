let accordion = document.querySelectorAll('.accordion-title');
let content = document.querySelectorAll('.content');

for (let i =0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){

        //  Вариант 1
        // accordion[i].classList.toggle('active');

        //  Вариант 2
        // Remove .active class from all acordion items
        for (let i = 0; i < accordion.length; i++){
            accordion[i].classList.remove('active')
        }
        // Add .active class to accordion item
        accordion[i].classList.add('active')

        // Remove .active class from all content items
        for (let i = 0; i < content.length; i++){
            content[i].classList.remove('active')
        }
        // Add .active class to content item
        content[i].classList.add('active')
    })
    }


// var acc = document.getElementsByClassName("accordion-title");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }