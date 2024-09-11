const clock = document.querySelector('#Clock')
// document.getElementById('Clock')

// date
// let date = new Date()
// console.log(date.toLocaleDateString());

//setinterval select the with a fixed time delay between each call.
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000);