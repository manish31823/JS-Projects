const buttons=document.querySelectorAll('.button')
const body = document.querySelectorAll('button')

//js Events -performing some task or activtices is called events
 buttons.forEach(function(button){
    console.log(buttons);
    button.addEventListener('click',function(hihi){
        console.log(hihi);
        console.log(hihi.target);
        
        

    })
    
 });