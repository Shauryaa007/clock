let a;
let date;
let time;

setInterval(() => {
    a = new Date();
    date=a.getDay() +"/"+ a.getDate() +"/"+a.getFullYear();
    let n=a.getSeconds();
    let m=a.getMinutes();
    let o=a.getHours();
    if(n<10 && n>=0)
    {
        time = a.getHours() + ':' + a.getMinutes() + ':0' + a.getSeconds();
    }
    else
    {
        time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    }

    if(m<10 && m>=0)
    {
        time = a.getHours() + ':0' + a.getMinutes() + ':' + a.getSeconds();
    }
    else
    {
        time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    }
    if(o<10 && o>=0)
    {
        time ='0'+ a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    }
    else
    {
        time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    }

    document.getElementById('clock').innerHTML = time + " on " + date;
}, 1000);
