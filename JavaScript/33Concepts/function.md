# Function Basic

> [JavaScript Functions — Understanding The Basics](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99) 포스트를 읽고 정리한 내용이다.

## What is Function?

> function is `subprogram`

> subprogram : 프로그램에서 `호출`에 의해 실행되도록 만들어진 코드. 한 프로그램 안에서 `반복적으로 실행`되거나 여러 프로그램에서 `공통적으로 실행`되는 기능들을 부프로그램으로 사용한다. ([참고](https://m.blog.naver.com/PostView.nhn?blogId=tlqdnjsahwk&logNo=220026225197&proxyReferer=https:%2F%2Fwww.google.com%2F))

### Function Declaration & Function Expression

> 함수 선언식과 함수 표현식

```javascript
//function declaration
function myName(name) {
    console.log(name);
}

//function expression
const greeting = function (name) {
    console.log('Hello' + name);
};

//arrow function
const name = (name) => console.log(name);
```

> **함수 선언식**은 `호이스팅(hoisting)`이 된다. `호이스팅`이란 `끌어올린다`는 사전적 정의를 갖고 있다. 즉 선언된 함수나 변수를 코드의 최상단으로 끌어올리는 것을 말한다. 함수 선언식으로 정의된 함수는 함수가 선언된 범위가 전역범위라면 전역범위 최상단으로 끌어올려진다. 만약 함수를 함수선언식보다 먼저 호출한다하더라도 에러가 발생하지 않는다. (호이스팅에 대해서는 다른 부분에서 다시 다루기로 한다.)

> **함수 표현식**에서는 함수 선언식과 다르게 `호이스팅이 되지 않는다`. 그렇기 때문에 항상 함수를 호출할 때는 함수표현식 밑에서 호출해야한다. 또한 함수 표현식처럼 `함수를 변수에 할당하는 것`이 가능하다.

> **arrow function(화살표함수)**는 ES6에서 추가된 함수를 표현하는 `shorter syntax`이다. (화살표함수에 대해서는 다른 부분에서 다시 다루기로 한다.)

### Parameters vs Arguments

> 매개변수와 인수

-   이 둘은 함수에서 사용되는 용어인데 정확하게 구분하여 사용하지 않는 경향이 있는 것 같다. 함수의 어느 과정에서 사용하는냐에 따라서 위 용어는 구분하여 사용하는 것이 맞다고 생각한다.

```javascript
const hisName = 'jjanmo';

function sayHello(name) {
    //- 1
    console.log('Hello' + name);
}

sayHello(hisName);
```

> `parameter` 는 함수를 선언하는 단계에서 정의되어지는 것을 뜻한다. 여기서는 1번에서처럼 `name`이라고 이름 지어진다. parameter는 최대 255까지 넘길 수 있다.

> `arguments` 는 함수가 호출될 때(실행될 때) 함수가 각각의 parameter로 부터 받은 값을 말한다. 여기서는 `jjanmo`가 된다. 또한 자바스크립트에서는 이렇게 전달된 argument를 모아서 담겨있는 `arguments`라는 `Array객체`를 생성해준다.

## Invoke Function?

> 원서로 보다보면 한국말로는 비슷한 말인데 뭔가 다르게 느껴지는 경우가 많았다. 특히 `invoke`라는 말이 그렇다. `invoke function`이 어떤 의미인지 먼저 알아보자.

### Invoke 사전적 정의

-   `invoke` : to call on something or someone ( @Cambridge Dictionary )

### 그렇다면 invoke a funcion은 call a function과 같은 말인가?

-   사전적으로 혹은 일반적으로 `함수를 호출한다` 라는 같은 의미로 사용될 수 있다. 하지만 자바스크립트에서는 `미묘하게 차이`가 있을 수 있다.

### 어떤 미묘한 차이?

> 자바스크립트에서의 아래 3가지 모두 같은 함수를 호출하는 방식이다. 하지만 1번처럼 **직접적으로** 함수를 호출할 수 있다. 이때는 `call a function`이라고 표현한다. 하지만 2번이나 3번처럼 call()이니 apply()라는 메소드를 사용해서 **간접적으로** 호출할 때는 `invoke a function`이라고 표현한다.

```javascript
fn(); //1
fn.call(); //2
fn.apply(); //3
```

> `the difference is semantic but both are interchangeable` 이라고 한다.

### 결론

원서를 읽을 때, 일반적으로 함수를 호출한다는 의미로 받아들이고 읽어면 될 것 같다. 하지만 코드를 깊이있게 봐야하는 순간에는 위 차이를 인지하고 있는지도 중요할 것이라고 생각한다.

## Function return

-   모든 자바스크립트의 함수에서는 특별하게 return값을 지정하지 않는다면 `undifined`를 return한다. 그렇기 때문에 콘솔창에서 return값이 없는 함수를 호출할 경우 `undefined`가 찍히는 것 본 경우가 있을 것이다.

-   `return`문은 함수를 멈추는 기능을 한다. `return` 이후에 어떠한 코드가 있다면 그 코드는 (일반적으로) 작동하지않는다.

-   함수의 리턴은 값을 리턴하기도 하지만, 함수를 부른 `caller`에게 그 값을 할당하기도 한다. (예제 코드)

```javascript
let double = function (num) {
    //함수를 변수에 할당

    return num * 2;
};

let test = double(3);
//test라는 변수(caller)에 함수의 리턴값을 할당

console.log(test); //6
```

## Function is Object

-   자바스크립트에서의 `Object`는 primitive type(원시자료형) 아닌 모든 것이다. 그렇기 때문에 `Function`도 역시 `Object` 이다.
-   자바스크립트의 `Object`는 다재다능하기때문에 `Function` 역시 그러하다.
-   1️⃣ `parameter`로 `fucntion`을 넘길수 있고, 2️⃣ `function`을 `return값`으로 `function`을 return하는 경우, 이것을 `High Order Functions`이라고 부른다.

# More

-   High Order Functions(고차함수)

# Ref

[Calling vs invoking a function](https://stackoverflow.com/questions/50884893/calling-vs-invoking-a-function)
