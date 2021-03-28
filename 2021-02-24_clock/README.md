# Javascript Study - 01. 시계 만들기
바닐라 자바스크립트를 이용하여 시계를 구현하였습니다.

<br>

![clock_recording_2021-03-28](https://user-images.githubusercontent.com/75922558/112740940-ee06a000-8fbb-11eb-8e75-56af5249c304.gif)


## 개요
- 현재 날짜와 요일 그리고 시간을 시, 분, 초 단위로 나타내었습니다.

## 사용 언어
- HTML
- CSS
- JS

## JS 코드
``` JS
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

```

## 오류 및 개선방안
- 오류
  - 요일이 제대로 구현되지 않았다.
- 오류 코드
  ``` JS
  var today = new Date();
  var week = new Array('Monday','Tuseday','Wendsday','Thursday','Friday','Saturday','Sunday');
  var today_week = week[today.getDay() - 1];

  document.getElementById('weekday').textContent = today_week;
  ```
- 개선 방안
  - 영어 요일을 배열에 담을 때에는 'SUNDAY' 부터 담아야한다.