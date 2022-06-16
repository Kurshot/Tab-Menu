let tabLinks = document.querySelectorAll('.menu__tabLink');
let tabs = document.querySelectorAll('.menu__tabContent');
var tabLinksArr = Array.prototype.slice.call(tabLinks);

for(i = 0; i < tabLinks.length; i++){

    tabLinks[i].addEventListener('click', function(){
    
        for(k = 0; k < tabLinks.length; k++){
            tabLinks[k].classList.remove('active');
            tabs[k].classList.remove('active');
        }
        this.classList.add('active');
        let index = tabLinksArr.indexOf(this);
        tabs[index].classList.add('active');
    })

}