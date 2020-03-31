//배열
const member = ['jjanmo', 'song2', 'kihyeon', 'hwajong'];
//배열에서의 요소의 접근 : 배열의 인덱스로 함 / 배열을 0번 인덱스 부터
console.log('member[2] : ', member[2], ' member[4] : ', member[4]);
//특이점 : 배열에서 없는 인덱스값으로 접근 할 경우, 다른 언어는 out of index error발생하지만
//자바스크립트는 undefined값이 나옴

//객체
//객체란 연관된 변수나 함수(객체안에서는 메소드)를 "그룹핑"해 놓은 것에 이름을 붙인 것
//-> 객체라는 정보에 대한  CRUD를 알아보자

//1) Creat : 객체 생성
const memberObj = {
    fullstack: 'jjanmo',
    analyst: 'kihyeon',
    frontend: 'song2',
    devops: 'hwajong'
};

//2) Read : 객체 읽기 (객체 접근)
console.log('memberObj.devops : ', memberObj.devops);
console.log('memberObj["analyst"] : ', memberObj['analyst']);
//.접근  / [] 접근
//주로 .접근을 많이 사용함
//하지만 변수로 접근할때는 [] 접근을 사용하는 것이 유용
const role = 'fullstack';
console.log('memberObj[role] : ', memberObj[role]);

//3) Update : 객체 수정
console.log('BEFORE UPDATE memberObj.frontend : ', memberObj.frontend);
memberObj.frontend = 'sing2song';
console.log('AFTER UPDATE memberObj.frontend : ', memberObj.frontend);
//참고 : 없는 속성을 만들때도 이렇게 사용할 수 있음
memberObj.teacher = 'ohTr';
console.log(memberObj);

//4) Delete : 객체 삭제
console.log('BEFORE DELETE ', memberObj);
delete memberObj.fullstack;
console.log('AFTER DELETE ', memberObj);
