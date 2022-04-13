let container_01 = document.getElementById('container-01');
let ok_01 = document.getElementById('ok-01');

let container_02 = document.getElementById('container-02');
let ok_02 = document.getElementById('ok-02');

let container_03 = document.getElementById('container-03');
let ok_03 = document.getElementById('ok-03');

let container_04 = document.getElementById('container-04');
let new_time = document.getElementById('new-time');

let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let intervalText = document.getElementById('interval-text');

let time = document.getElementById('time');

let hours = '';
let minutes = '';
let interval = 6; 
let arrayHours = [];

ok_01.addEventListener('click', ()=> {
    container_01.style.display = 'none';
    container_02.style.display = 'flex'
})

ok_02.addEventListener('click', ()=> {
    if(time.value != '') {
        container_02.style.display = 'none';
        container_03.style.display = 'flex';
    
    }
})

ok_03.addEventListener('click', ()=> {
    transform()
    calcular()
    reTransform()
    textTransform()

    container_03.style.display = 'none';
    container_04.style.display = 'flex';
})


leftArrow.addEventListener('click', ()=> {
    if(interval > 0) interval --
    intervalText.innerText = `${interval} em ${interval} horas`
})

rightArrow.addEventListener('click', ()=> {
    if(interval < 24) interval ++
    intervalText.innerText = `${interval} em ${interval} horas`
})



function transform() {
    for(var i of time.value) {
        arrayHours.push(i)
    }
    hours = Number(arrayHours[0] + arrayHours[1]);  
    minutes = Number(arrayHours[3] + arrayHours[4]);
    arrayHours = [];
}

function calcular() {
    hours = hours + Number(interval);
    if(hours > 23) hours = hours - 24;
}

function reTransform() {
    if(hours < 10) hours = '0' + hours
    if(minutes < 10) minutes = '0' + minutes
}

function textTransform() {
    new_time.innerText = " " + hours + ":" + minutes 
    console.log("você deve tomar seu remedio às " + hours + ":" + minutes)
}
















// function calcular() {
//    resultHours = Number(horas.value) + Number(intervalo.value)

//    if(resultHours == 24) {
//     resultHours = '00'
//     return resultHours
//    } 

//    else if(resultHours > 24) {
//     resultHours = resultHours - hours
//     return resultHours
//    }

//    else {
//     return resultHours
//    }

   
// }






// let qeq = 6;
// let iminutes = '';
// let diference = '';


// resultHours = ihours + qeq

// if(resultHours > 24) {
//     diference = resultHours - hours
   
    
// }

// console.log(diference)