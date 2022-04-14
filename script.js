let container_01 = document.getElementById('container-01');
let container_02 = document.getElementById('container-02');
let container_03 = document.getElementById('container-03');
let apelido = document.getElementById('apelido');



let container_04 = document.getElementById('container-04');
let new_time = document.getElementById('new-time');

let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let intervalText = document.getElementById('interval-text');
let final = document.getElementById('final');

let time = document.getElementById('time');
time.value = '00:00'
let newTime ='';
let toptop = '';
let hours = '';
let minutes = '';
let interval = 6; 
let arrayHours = [];
let apelidosArr = [' meu bem', ' neném', ' bb', ' meu amor', ' meu amorzinho',' minha princesa', ' meu anjo', ' gatinha', ' lindona'];

let arr = ['Show Show', 'Muito bom', 'Top top', 'Show', 'Top'];

animation(container_01)
apelidos()

ok1.addEventListener('click', ()=> {
    container_01.style.display = 'none'
    container_02.style.display = 'flex'
    animation(container_02)
})

ok2.addEventListener('click', ()=> {
    if(time.value != '') {
        container_02.style.display = 'none';
        container_03.style.display = 'flex';
        animation(container_03)
    
    }
})

ok3.addEventListener('click', ()=> {
    transform()
    calcular()
    reTransform()
    textTransform()

    container_03.style.display = 'none';
    container_04.style.display = 'flex';
    animation(container_04)
})


leftArrow.addEventListener('click', ()=> {
    if(interval > 1) {
        interval --
        animation2(`slide`,`5rem`)
    }
  
})

rightArrow.addEventListener('click', ()=> {
    if(interval < 24) {
        interval ++
        animation2(`slide`,`-5rem`)
    }
})

function animation2(animation, translate) {
    if(interval > 0 && interval < 24) {
        intervalText.style.display = 'none'
        intervalText.innerText = `${interval} em ${interval} horas`
        if(interval == 1) intervalText.innerText = `${interval} em ${interval} hora`
        intervalText.style.transform = `translateX(${translate})`
        intervalText.style.display = 'flex'
        intervalText.style.animationName = `${animation}`;
        
        

        setTimeout(()=>{
            intervalText.style.transform = 'translateX(0)'
            intervalText.style.animationName = '';
        },300)
    }
}



function transform() {
    for(var i of time.value) {
        arrayHours.push(i)
    }
    hours = Number(arrayHours[0] + arrayHours[1]);  
    minutes = Number(arrayHours[3] + arrayHours[4]);
    arrayHours = [];
}

function calcular() {
    newTime = hours + Number(interval);
    
    if(newTime > 23) newTime = newTime - 24;

}

function reTransform() {
    interval = (interval == 1) ? interval + ' em ' + interval + ' hora' : interval + ' em ' + interval + ' horas'
   
    if(minutes < 10) minutes = '0' + minutes 
    if(hours < 10) hours = '0' + hours 
    if(newTime < 10) newTime = '0' + newTime
    
    if(newTime > 0 && newTime < 12) newTime = newTime + ':' + minutes + ' da manhã';
    if(newTime >= 12 && newTime <= 18) newTime = newTime + ':' + minutes + ' da tarde';
    if(newTime >= 18 || newTime == 0) newTime = newTime + ':' + minutes + ' da noite';

    if(hours > 0 && hours < 12) hours = hours + ':' + minutes + ' da manhã,';
    if(hours >= 12 && hours <= 18) hours = hours + ':' + minutes + ' da tarde,';
    if(hours >= 18 || hours == 0) hours = hours + ':' + minutes + ' da noite,';
    
 
    
     
    
}

function textTransform() {
    final.innerText = toptop + '! Se você tomou, ou irá tomar o seu remédio às '+ 
    hours + ' e o intervalo de tempo é de ' + interval + ', então a próxima vez que você irá tomar o seu remédio será às '
    new_time.innerText = " " + newTime
}

function animation(element) {
    element.style.animationName = 'slide';
}

function apelidos() {

    toptop = arr[Math.floor(Math.random() * arr.length)];
    
    apelido.innerHTML = apelidosArr[Math.floor(Math.random() * apelidosArr.length)];

    
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