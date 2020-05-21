# Understanding Variables

## Variables(변수)

> 변수란 값을 저장하는 공간이라고 할 수 있다. ES6이전에는 `var` 키워드로만 변수를 선언하였다. 하지만 ES6부터는 `const`와 `let`이라는 키워드로 변수를 선언할 수 있게 되었다. 이렇게 키워드가 더 생기면서 좀 더 변수의 활용이 명료해지는 효과가 생겼다. 이제 각각의 키워드들이 어떤 의미와 기능을 갖고 있는지 알아보자.

### 변수 선언과 할당

> 변수는 선언과 할당 과정을 통해서 생성된다. 그렇다면 변수 선언은 무엇이고 할당은 무엇일까?

```javascript
var a; //변수 선언 => undefined
a = 10; //값 할당

var b = 20; // 선언과 할당을 동시에
```

> 변수 선언과 할당을 따로 따로 할 수도 있고, 동시에 같이 할 수도 있다. 단, 다른 언어와는 다르게 자바스크립트에서는 변수를 선언만 했을 때, 기본값으로 `undefined`라는 값을 갖게 되어 있다.

```javascript
c;
console.log(c); //error : c is not defined
c = 30;
console.log(c); //30
```

> 변수를 키워드 없이 생성하면(할당하면) 자바스크립트 엔진은 그 변수를 `전역변수`로 자동 선언한다. 그래서 스크립트 안의 어디서든지 접근이 가능하다.

### **var** 키워드의 특징

> 여러가지로 자유로운 영혼(?)을 지닌 키워드 😅

1.  재선언이 가능하다.

    ```javascript
    var foo = 10;
    console.log(foo); //10;
    var foo = 'javascript';
    console.log(foo); //'javascript';
    ```

2.  재할당이 가능하다.

    ```javascript
    var foo = 10;
    console.log(foo); //10;
    foo = 'javascript';
    console.log(foo); //'javascript'
    ```

3.  `function scope` 를 갖는다.

    > 👁‍🗨 `scope` 란 `식별자해결(Identifier Resolution)`을 결정하기 위한 현재 코드의 문맥(context), 범위라고 할 수 있다. _😵이게 무슨말이냐??🤪_ 여기서 **식별자 해결이란 변수의 값을 결정하는 것**이라고 할 수 있다. 쉽게 말하면, `scope`란 `변수의 값을 결정할 수 있는 코드의 문맥, 범위`라고 할 수 있다. 즉, **scope를 알아야하는 이유**는 우리가 `변수의 값을 결정하기 위해서`라는 것이다.

    ```javascript
    function foo() {
        var name = 'jjanmo';
        console.log(name); //1 'jjanmo'
    }
    foo();
    console.log(name); //2 error : name is not defined
    ```

    > `var`로 선언된 변수는 변수가 선언된 function 안에서만 그 값이 결정될 수 있고 유효하다. 위의 코드의 결과처럼 함수 밖에서 name에 접근하려고 하면 값을 찾을 수 없기때문에 error가 발생한다.

    ```javascript
    var foo = 'madeleine';
    if (true) {
        var bar = 'marley';
    }
    console.log(foo); //'madeleine'
    console.log(bar); //'marley'
    ```

    > `if문의 {}`은 `block scope`이다. 즉 `fucntion scope`가 아니기 때문에 {}안에 선언된 var변수는 `{} 밖`에서 **접근이 가능하다**.

4.  호이스팅(hoisting)이 일어난다.

    > 👁‍🗨 `Hoisting`이란 `hoist`라는 단어의 의미를 알면 좀 더 쉽게 이해 할 수 있다. hoist는 `끌어올림`이라는 뜻이다. 즉 `변수가 속한 스코프의 최상단`으로 변수의 `선언부`만을 끌어올린다.

    ```javascript
    var location = 'outside';
    function foo() {
        console.log(location); //undefined
        var location = 'inside';
    }
    foo();
    ```

    > var로 선언된 `location`변수는 함수 안에 속해있다. 그 변수의 스코프는 foo()라는 `함수 스코프`를 갖게 된다. 그렇기 때문에 함수 안의 최상단으로 변수의 선언부가 끌어올려지게 된다. 즉, 아래와 같은 형태라고 생각하면 된다.

    ```javascript
    var location = 'outside';
    function foo() {
        var location; //hoisting
        console.log(location); //undefined
        location = 'inside';
    }
    foo();
    ```

    > 변수를 선언만 하면 기본값으로 undefined값을 갖게됨으로 `undefined`가 출력된다.

### **let** 키워드의 특징

1. 재선언이 일어나지 않는다.

    ```javascript
    let a = 10;
    let a = 20; //Uncaught SyntaxError: Identifier 'a' has already been declared
    ```

    > 같은 이름의 변수는 1번만 선언 가능하다.

2. 재할당이 가능하다.

    ```javascript
    let result = 0;
    function sum(a, b) {
        result = a + b;
    }
    console.log(result); // 0
    sum(5, 10);
    console.log(result); // 15
    ```

    > result를 `전역변수(global scope)`로 선언하였기 때문에 함수 안에서도 접근하여 할당이 가능하다.

3. `block scope`를 갖는다.

    > `let`으로 선언된 변수는 `변수가 선언된 block({}) 안`에서만 그 값이 결정될 수 있고 유효하다. 여기서 말하는 block이란 {}안을 말한다. 예를 들어 `if(){ }`, `while(){ }` 등이 있다.

4. 호이스팅(hoisting)이 일어나지 않는다.

    ```javascript
    let number = 10;
    function foo() {
        if (false) {
            let number = 50; //1
        }
        console.log(number);
    }
    foo();
    ```

    > 위 코드의 결과는 10이 나온다. 함수 안의 number는 if문 안에서 선언되었기 때문에 그 밖에서는 접근이 불가능하기때문이다. 또한 심지어 조건이 false였기때문에 if문 안으로 들어가서 코드를 실행조차 안했다. 즉 이 코드는 let의 블럭스코프 때문에 `50`이라는 결과는 나올 수 없다. 여기서 포인트는 1번코드를 `var number = 50` 변형시켰을 때이다. 그렇게 되면 foo함수의 최상단으로 number가 호이스팅되어 결과값이 `undefined`로 바뀌게 될 것이다. 이렇게 키워드 하나의 변화로 예상치 못한 버그가 나올 수 있는 것이다.

### **const** 키워드의 특징

> const는 let과 유사하지만 다른 점은 바로 `constant`라는 말에 있다. `constant`는 상수를 말한다. 즉 const 한 번 값을 할당하면 `절대로 변하지 않을 값`에 주로 사용한다. 그리고 const는 변수 선언과 할당이 동시에 이루어져야한다. 그렇지 않으면 에러가 나타난다. 관습적으로 const의 변수 이름은 `대문자`혹은 `_`를 이용해서 작성한다.

    ```javascript
    //bad
    const NAME; //Uncaught SyntaxError: Missing initializer in const declaration
    NAME = 'jjanmo';

    //good
    const NAME = 'jjanmo';
    ```

1. 재선언이 일어나지 않는다.

    ```javascript
    const FOO = 'javascript';
    const FOO = 'python'; //Uncaught SyntaxError: Identifier 'foo' has already been declared
    ```

2. 재할당을 할 수 없다.

    ```javascript
    const BAR = 'java';
    BAR = 'javascript'; //Uncaught TypeError: Assignment to constant variable.
    ```

3. `block scope`를 갖는다.
4. 호이스팅(hoisting)이 일어나지 않는다.

> 🚀 [프로퍼티를 변경할 객체에 const키워드를 사용할 수 있을까?](const_object.md)

# Practices

> Practice1

```javascript
console.log(myVar); // => ???
console.log(myConst); // => ???

var myVar = 'value';
const myConst = 3.14;
```

> Solution1

```
위 코드를 동작원리에 따라서 다시 작성하면 이렇다.
var myVar;               //hoisting
console.log(myVar);      //undfined
console.log(myConst);    //myConst is not defined

myVar = 'value';
const myConst = 3.14;
```

> Practice2

```javascript
var b = 1;
function outer() {
    var b = 2;
    function inner() {
        b++;
        var b = 3;
        console.log(b); // => ???
    }
    inner();
}
outer();
```

> Solution2

```
위 코드는 함수 inner 부분은 아래와 같이 동작한다.
 function inner() {
    var b;          //hoisting => undefined
    b = b + 1;      //재할당 => undefined + 1 => NaN
    b = 3;          //재할당 => 3
    console.log(b); //3
}
```

> Practice3

```javascript
const arr = [];
for (var i = 0; i < 3; i++) {
    arr.push(function () {
        console.log(i); //=> ???
    });
}

arr.forEach(function (func) {
    func();
});
```

> Solution3

```
위 코드는 사실 0,1,2 가 출력되길 바라고 만든 코드일 것이다. 하지만 결과는 3,3,3이 나온다. 왜 그럴까? 바로 var의 함수스코프때문이다. var는 for문의 {} 블럭스코프를 보장하지않고 호이스팅이 일어난다. 즉 여기서 var는 전역변수가 되어있는 상태이다.그 모습은 아래 코드와 같다.

var i;
const arr = [];
for(i = 0; i < 3; i++){
    // 생략
}

 for문이 3번 순회하는 동안 그 안에서 작동하는 지역변수가 아니기 때문에 이미 i++연산이 진행되게 된다. 그래서 우리가 원했던 결과가 아닌 3,3,3이 출력된다. 이 문제를 해결하는 방법은 i를 어떻게 지역변수, 즉 for문 안에서 각각 작동하게 만들 것인가이다.
첫번째 풀이는 클로저를 만들어서 바깥변수를 접근이 가능하도록 만들어주는 것이다.

for (var i = 0; i < 3; i++) {
    arr.push(
        (function (index) {
            return function () {
                console.log(index);
            }
        })(i)
    );
}

두번째는 i의 키워드를 var가 아니라 let으로 변경해주는 것이다. 그렇게 하면 let의 블록스코프로 인해 매순회마다 각각 다른 i의 값이 넘어가게 된다.

for (let i = 0; i < 3; i++) {
    arr.push(function () {
        console.log(i);
    });
}
```

# More

-   Hoisting
-   Scope

# Ref

-   [Understanding Variables, Scope, and Hoisting in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript)

-   [The Difference Between Function and Block Scope in JavaScript](https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)

-   [ES6: var, let and const — The battle between function scope and block scope](https://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/)

-   [37 Essential JavaScript Interview Questions](https://www.toptal.com/javascript/interview-questions)
