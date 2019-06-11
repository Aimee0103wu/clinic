
var buttonwu = document.getElementById('option_wu');
var buttonwang = document.getElementById('option_wang');
var reactwu = document.querySelectorAll('.wu');
var reactwang =document.querySelectorAll('.wang');

buttonwu.addEventListener('click', function(){

    if (buttonwu.className.includes('optionselected')){
        buttonwu.classList.remove('optionselected');
    } else {
        buttonwu.classList.add('optionselected')
    }
    reactwu.forEach(function(el){
        if (el.className.includes('optionselected')){
            el.classList.remove('optionselected');
        } else {
            el.classList.add('optionselected');
        }    
    });
});

buttonwang.addEventListener('click', function(){

    if (buttonwang.className.includes('optionselected')){
        buttonwang.classList.remove('optionselected');
    } else {
        buttonwang.classList.add('optionselected')
    }
    reactwang.forEach(function(el){
        if (el.className.includes('optionselected')){
            el.classList.remove('optionselected');
        } else {
            el.classList.add('optionselected');
        }    
    });
});


var nav = document.querySelector('nav');
var main = document.querySelector('main')
var position = main.offsetTop;

window.addEventListener('scroll', function(){
    
    if (window.scrollY <= position) {
        nav.classList.remove('scrollednav');
        nav.classList.remove('navbar-dark');
    } else {
        nav.classList.add('scrollednav');
        nav.classList.add('navbar-dark');
    }
});
