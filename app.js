let accordion = document.querySelectorAll('.accordion-title');
let content = document.querySelectorAll('.content');

for (let i =0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){

        // Проверка наличие класса .active у accordion[i], если есть то удалить .active у accordion[i] и content[i], чтоб по двойному клику вкладка открывалась и закрывалась
        if (accordion[i].classList.contains('active')){
            accordion[i].classList.remove('active')
            content[i].classList.remove('active')

        // Если класса нет, то
        } else {
            // Удалить класс .active у всех других accordion items
            for (let i = 0; i < accordion.length; i++){
                accordion[i].classList.remove('active')
            }
            // Добавить класс .active для accordion[i]
            accordion[i].classList.add('active')
            
            // Удалить класс .active у всех других content items  
            for (let i = 0; i < content.length; i++){
                content[i].classList.remove('active')
            }
            // Добавить класс .active для content[i] 
                content[i].classList.add('active')
            }
    })
    }
