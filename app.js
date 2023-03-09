let accordionBtn = document.querySelectorAll('.accordion-title');
let content = document.querySelectorAll('.content');

for (let i =0; i < accordionBtn.length; i++){
    accordionBtn[i].addEventListener('click', function(){

        // Проверка наличие класса .active у accordionBtn[i], если есть то удалить .active у accordionBtn[i] и content[i], чтоб по двойному клику вкладка открывалась и закрывалась
        if (this.classList.contains('active')){
            this.classList.remove('active')
            content[i].classList.remove('active')

        // Если класса нет, то
        } else {
            // Удалить класс .active у всех других accordionBtn items
            for (let i = 0; i < accordionBtn.length; i++){
                accordionBtn[i].classList.remove('active')
            }
            // Добавить класс .active для accordionBtn[i] именно той по которой кликаем
            this.classList.add('active')
            
            // Удалить класс .active у всех других content items  
            for (let i = 0; i < content.length; i++){
                content[i].classList.remove('active')
            }
            // Добавить класс .active для content[i] 
                content[i].classList.add('active')
        }
    })
}
