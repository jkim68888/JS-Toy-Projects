## fetch 함수

``` js
fetch('https://www.google.com')
//fetch 함수 : 서버에 요청(request)을 보내고 응답(response)을 받는 함수

    .then((response) => response.text())
    //text 메소드는 우리가 원하는 리스폰스의 실제 내용을 보기 위한 메소드이다.
    //이 화살표 함수는 fetch 함수가 실행될때 바로 실행되는 함수가 아니라,
    //서버에 response가 온 후에야 실행되는 함수이다.
    //이렇게 나중에 어떤 조건을 만족시켰을때 실행되는 함수를 콜백함수라 한다.
    
    .then((result) => {console.log(result);});
    //이 콜백함수는 위의 then절의 콜백함수가 실행된 후에 실행된다.

    //then method : fetch 함수가 return 하는 promise 객체의 메소드이며,
    //then 메소드는 콜백을 등록하는 메소드이다.

    //이전 콜백의 return 값을 다음 콜백이 넘겨받을 수 있다.
    //즉, response.text() 라는 return 값이 result라는 파라미터로 넘어간다.
    //result는 임의로 정한 이름이다.
    //파라미터에 넘어온 값을 콘솔로 찍어보면 어떤 reponse를 받았는지 알수 있다.
```

<br/>

## URL


``` https://www.codeitshopping.com/men/shirts?color=blue&size=m ```


- ``` https ``` : 스킴 (Scheme) => 프로토콜의 이름 
- ``` www.codeitshopping.com ```: 특정 서버를 가르킨다.
- /men/shirts : 경로 (Path) => 서버에 있는 데이터 중 원하는 데이터를 특정한다.
- ?color=blue&size=m : 쿼리 => 데이터에 관한 세부적인 요구사항 (각각의 쿼리는 & 로 이어진다.)


<br/>

## HTTP

(HyperText Transfer Protocol)

프로토콜이란 웹통신 규약이다.

HTTPS는 HTTP 에 보안이 더해진 프로토콜이다. (HTTP + Secure)

