# What is Scope 💨 스코프의 정의

-   스코프란 `변수가 그 값을 알기 위해서 접근 가능한 코드 범위(묶음)`를 말한다. 즉 스코프는 `식별자(변수) 확인(해석)`을 위해 존재하는 개념이라고 볼 수 있다.

-   스코프 정의에서 중요한 포인트는 `변수`다. 스코프의 중심에는 변수가 존재한다. 변수를 중심으로 스코프가 생성된다. 이 변수의 값을 찾아가는 과정에서 스코프가 이용되는 것이다. 즉 변수 해결/해석(식별자 해결/해석)을 위한 수단, 도구인 것이다.

    > `식별자 해결/해석`을 영어로 `Indentifier Resolution`라고 한다. `식별자(indentifier)`란 값 혹은 참조를 할당하는 `변수`를 말한다. 예를 들어 `var a = 10;`이라고 하면 `a`가 식별자를 의미한다. 그렇기 때문에 `Indentifier Resolution`이란 식별자에 어떤 값을 할당할지를 스코프(체인)를 통해서 해결하는 일련의 과정을 말한다.

-   이러한 일련의 개념 때문에 스코프에 대해서 이해하지 못한다면, 자바스크립트에서 특정 변수가 어떤 값을 갖는지를 알기가 쉽지 않고, 값을 알지 못하면 코드를 이해하지 못하며, 결국 자바스크립트 전반을 이해할 수 없는 무시무시한 연쇄작용이 일어난다. 그러므로 스코프는 반드시 이해해야 할 개념이다.

# 스코프의 특징

> 이 부분을 스코프에 대해서 알다보면 자연스럽게 알게되는 부분이지만 먼저 알고 들어가면 좀 이해하기 수월할 수 있기 때문에 정리를 해본다. 모든 스코프의 공통점이라고 생각하면 된다.

-   스코프는 변수를 중심으로 생성되고 변수의 접근을 제어한다(관리한다).
-   스코프 밖에서 안으로 접근 할 수 없다. 반대로 스코프 안에서 밖으로 접근 할 수 있다. 여기서 접근 한다는 것은 변수가 접근하는 주체는 변수이다.

# 스코프의 종류

> 스코프는 기준에 따라서 몇가지로 나눌 수 있다.

1. 위치

-   global scope (전역스코프)
-   local scope (지역스코프)
    -   function scope
    -   block scope

2. 동작방식

-   lexical scope (정적스코프, 어휘적스코프)
-   dynamic scope (동적스코프)

## Global Scope(전역스코프)

```javascript
var foo = 'global';

function bar() {
    var baz = 'function';
    bax = 'is there function';
    console.log(baz);
}

console.log(foo); //1
bar(); //2
console.log(baz); //3
console.log(bax); //4
```

> 각각에서 무엇이 출력되는지 생각해보자

-

### Local Scope

1. Function Scope

```javascript
```

2. Block Scope

```javascript
```

### Lexical Scope vs Dynamic Scope

```javascript
```

## Function scope 의 확장 : nested function

## 자바스크립트에서 변수를 관리하는 메커니즘 3가지

-   변수를 함수 단위로 관리한다 === 함수 스코프를 갖는다.
-   함수 실행시 변수의 값을 찾기 위한 기준은 렉시컬 영역을 기준으로 한다.
-   실행시 변수 검색은 변수 스코프 체인을 이용한다.

## 그렇다면 Indentifier Resolution(식별자 해석/확인)이란?

-   `식별자(indentifier)`란 값 혹은 참조를 할당하는 변수를 말한다. 예를 들어 `var a = 10;`이라고 하면 `a`가 식별자를 의미한다.

-   `Indentifier Resolution`이란 식별자에 어떤 값을 할당할지를 스코프(체인)를 통해서 해결하는 일련의 과정을 말한다.

# Ref

-   [JavaScript Scope Explained in Simple Words](https://dmitripavlutin.com/javascript-scope/#6-global-scope)

-   [Understanding Scope in JavaScript](https://scotch.io/tutorials/understanding-scope-in-javascript#toc-scope-in-javascript)

-   [자바스크립트 객체지향프로그래밍 04 변수 스코프](http://www.yes24.com/Product/Goods/7276246)

-   [JavaScript Visualized: Scope (Chain)](https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd)
