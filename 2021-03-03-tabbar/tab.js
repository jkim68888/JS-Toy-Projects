//문서클래스 담기
var tabLink = document.getElementsByClassName('tabLink'); 
var tabContent = document.getElementsByClassName('tabContent'); 

//첫요소들에 버튼활성화, 컨텐츠 활성화
//className : 문서객체의 클래스명을 컨트롤하는 속성
tabLink[0].className += " active"; //뒤에 클래스 더해서 대입
tabContent[0].style.display = 'block';

for(var i = 0; i<tabLink.length; i++){
    tabLink[i].addEventListener('click',function(){
        //기존의 버튼활성은 모두 사라지게 처리, 컨텐츠도 모두 사라지게 처리
        for(var j = 0; j < tabLink.length; j++){
            tabLink[j].className = 'tabLink';
            tabContent[j].style.display = 'none';
        }

        //클릭한 버튼만 active클래스 추가
        this.className += " active";

        //클릭한 버튼의 텍스트컨텐츠와 같은 아이디를 같은 요소만 보이게 처리
        var idName = this.textContent.toLowerCase();
        document.getElementById(idName).style.display = 'block';
    });
}