//a, b의 값은?

// var a = 0;
// for (var i = 5; i--; ) {
//     a++;
// }
// console.log(a);

// var b = 0;
// for (var i = 5; i--, i; ) {
//     b++;
// }
// console.log(b);

//&& || 연산 + 연산자 우선 순위
function a() {
    console.log(1);
    return false;
}
function b() {
    console.log(2);
    return true;
}

// a() && b(); //1. output? 1 (false)

function fn(a, b) {
    return a && b;
}

fn(a(), b()); //2. output? 1 (return false) 2 (return true) (전체 return false)

console.log(1) + console.log(2); // 3.output? 1, 2

//추가 내용 : for문에 대한 이해

p = [2];
i = 3;
l = j = 1;
while (i < 100) {
    (!j && (l = j = p.push(i++))) || i % p[--j] || (i++, (j = l));
}
console.log(p);

//&& => if문으로 변경 가능  || => else if문으로 변경 가능

/*
//위의 코드와 같은 코드
while (i < 100) {
    if (j === 0) {
        l = j = p.push(i++);
    } else if (i % p[--j] === 0) {
        i++;
        j = l;
    }
}
*/
