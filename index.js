let a;
let date;
let time;

setInterval(() => {
    a = new Date();
    date=a.getDay() +"/"+ a.getDate() +"/"+a.getFullYear();
     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('clock').innerHTML = time + " on " + date;
}, 1000);