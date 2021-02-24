//시간
setInterval(function(){
    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    if(h < 10){
        document.getElementById('hour').textContent = '0' + h.toString();
    }else{
        document.getElementById('hour').textContent = h;
    }

    if(m < 10){
        document.getElementById('minute').textContent = '0' + m.toString();
    }else{
        document.getElementById('minute').textContent = m;
    }

    if(s < 10){
        document.getElementById('second').textContent = '0' + s.toString();
    }else{
        document.getElementById('second').textContent = s;
    }



});



//날짜
var today = new Date();
var week = new Array('Monday','Tuseday','Wendsday','Thursday','Friday','Saturday','Sunday');

var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
var today_week = week[today.getDay() - 1];

document.getElementById('year').textContent = year;

if(month < 10){
    document.getElementById('month').textContent = '0' + month.toString();
}else{
    document.getElementById('month').textContent = month;
}

if(day < 10){
    document.getElementById('date').textContent = '0' + day.toString();
}else{
    document.getElementById('date').textContent = day;
}

document.getElementById('weekday').textContent = today_week;

