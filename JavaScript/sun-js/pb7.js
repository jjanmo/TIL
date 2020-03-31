// a,b,c,d 값을 구하시요
function closure(start) {
    return function count() {
        return {
            inc: function() {
                start++;
            },
            get: function() {
                return start;
            }
        };
    };
}
var f1 = closure(0);
var f2 = f1;
var f3 = closure(0);
var fc1 = f1();
var fc2 = f2();
var fc3 = f3();
var fc4 = fc1;
fc1.inc();
fc2.inc();
fc3.inc();
fc4.inc();
var a = fc1.get();
var b = fc2.get();
var c = fc3.get();
var d = fc4.get();

//예제1
var x = 1;
function innerF() {
    return x + 1;
}

function outterF() {
    var x = 2;
    return innerF();
}

console.log(outterF()); // 2

//예제2
function a() {
    var i = 0;
    function b() {
        var i = 1;
        function c() {
            console.log(i); // 1
        }
        c();
    }
    b();
}
a();

//예제3 : high order function 1급객체
function fn(x) {
    return function inner() {
        return x;
    };
}
var f1 = fn(1);
var f2 = fn(2);

console.log(f1()); //1
console.log(f2()); //2

//예제4
//1과 2의 결과값이 같을까 다를까? : 다름!!
function f(x) {
    return {
        fn: function() {
            return x;
        }
    };
}
var a = f(0);
a.fn(); // - 1

function f(x) {
    return {};
}
var a = f(0);
a.fn = function() {
    return x;
};
a.fn(); // - 2

//예제5 일명 클로저 문제

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    });
}
// 0 1 2 3 4 로 출력안됨... 모두 5로 출력됨
//1)클로저 변수의 공유
//2)비동기 프로그래밍 : setTimeout()

function a() {
    var i = 0;
    return function() {
        return i++;
    };
}
var a1 = a();
var a2 = a();
a1();
a1();
a2();
a2();
