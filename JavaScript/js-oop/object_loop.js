const memberObj = {
    fullstack: 'jjanmo',
    analyst: 'kihyeon',
    frontend: 'song2',
    devops: 'hwajong'
};

//객체에서의 루프는 for in 을 사용함

console.group('object loop');
//참고. 그룹핑을 할 수 있음, 그룹핑한 부분에 콘솔에 찍힐때 들여쓰기가 되어서 가독성이 높아짐
for (const member in memberObj) {
    console.log(member); //객체의 속성(property)
    console.log('.접근 : ', memberObj.member); //undefined : .접근은 .바로 뒤가 속성을 지칭, 여기선 속성을 지칭하는 변수를 사용한 것!
    console.log('[]접근 : ', memberObj[member]); //객체 속성값 : 변수일 때는 []를 사용해야 정확한 값이 접근할 수 있음
    console.log('');
}
console.groupEnd('object loop');
