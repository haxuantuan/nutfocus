var user=document.querySelector('.user')
var input=document.querySelector('input')
var ul=document.querySelector('ul')
user.onclick=function(){
    
    ul.classList.toggle('hide')
}
user.onblur=function(){
    ul.classList.remove('hide')
}

