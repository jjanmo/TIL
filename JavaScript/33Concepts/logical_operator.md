# How **||** and **&&** work

> 자바스크립트에서는 내가 알고 있던 `||` 와 `&&`를 넘어서는 뭔가가 있었다. 그것에 대해서 알아보자.

## Preview

> 1단계

```javascript
console.log(0 || 7);
console.log(0 || false);
console.log(19 || 3);
console.log(19 || 0);
console.log(0 && 7);
console.log(0 && false);
console.log(19 && 3);
console.log(19 && 0);
```

> so easy?? go next!!

<br>

> 2단계

```
console.log(true || true && false);
console.log(false || 6 && undefined);
console.log(true || 'abc' && 0);
console.log(0 || 'abc' && 19 || false);
console.log(7 && 3 && 0 || 4 && false);
console.log(19 && 'Hello' && null || 4 || undefined && false);
```

<br>

> 3단계

```javascript
//어떤 alert()이 작동할지 맞춰봅시다.
if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || (-1 && 1)) alert('third');
```

<br>

> 4단계

```javascript
//어떻게 실행되는지 생각해봅시다.
alert(alert(1) || 2 || alert(3));
```

> 위에 문제들을 다 맞추셨다면, 당신은 **&&** 와 **||** 에 대해서 중급이상이지 않을까 `개인적으로` 생각합니다...🤣

## 내가 몰랐던 || 와 && 연산자의 특징

### `||` 와 `&&` 는 값을 반환한다 ?? 🙃

자바에서 || 와 && 를 사용할 때 보통 아래와 같이 사용한다.

```java
if( x >= 0 && x < 50){
    //code here
}

//or

if(x < 0 || x >= 50){
    //code here
}
```

즉 논리적으로 그 괄호 안에 참과 거짓을 판별하여 참과 거짓에 대한 값을 출력한다. 참이면 다음 코드를 실행하고 거짓이면 실행하지 않는다. 이것이 ||와 &&의 전통적인 실행이 방식이다.

```
(true && true) => true
(true && false) or (false && true) => false
(false && false) => false
(true || true) => true
(true || false) or (true || false) => true
(false || false) => false
```

> 위 경우의 수처럼 ()안의 불리언값을 통해 참과 거짓만을 판별한다.

하지만 자바스크립트에서는 달랐다. 자바스크립트에서는 || 연산자 와 && 연산자를 통해서 `값`을 반환한다. 처음에 이 말을 듣고 이것은 무슨 말인가 하는 생각이 들었다.

```javascript
const a = 'javascript';
const b = a || '';
const c = a && null;
console.log(b, c); //무엇이 출력 될까? 아무것도 출력되지 않을까?
```

앞에서 말한 것처럼 변수 b와 c에는 논리연산자 평가의 결과인 `true나 false가 아닌 특정 값`이 할당된다. b에는 **'javascript'**, c에는 **null** 이라는 값이 할당된다.(물론 해당 값이 true나 false였다면 해당 값이 할당된다. 자세한 것은 밑에서 다시 설명하겠다.) 아마 다른 언어를 하다가 자바스크립트를 접했다면 위의 코드를 보면 당황했을 법하다. _나도 처음에 위 코드를 보고 저 코드 무엇을 한다는 말인지 이해하지 못했기 때문이다_. 우선은 `값을 반환한다는 사실`을 인지하자 🚩

### Short-circuit evaluation(단락평가, 최소평가)

`Short-circuit evaluation`은 `and` 나 `or` 연산자에 있어서 첫번째 피연산자로 그 결과값이 완벽하게 예측이 된다면 두번째 피연산자를 평가하지 않는 것을 말한다. 즉, `and` 나 `or` 연산자로 이루어진 하나의 표현식을 다 보지 않아도 값이 예상된다면 굳이 그 표현식을 다 확인하지 않는다는 것이다. 이것은 컴퓨터의 효율성을 위한 합리적인 사고라고 생각한다.

```javascript
//1
true || false
/*
첫번째 피연산자만 보아도 이미 이 표현식의 값은 true이기 때문에
false에 대한 평가는 이루어지지않는다.
*/

//2
true && false
/*
&&연산자는 첫번째 피연산자와 두번째 피연산자가 모두 true이여야
이 표현식의 값이 true이다. 첫번째 연산에서 true이기 때문에
두번째 연산을 확인해야한다. 그렇기 때문에 두번째 피연산자까지 평가 후에
최종값이 false가 될 수 있다.
*/

//3
false && true
/*
첫번째 피연산자만 평가한다. 왜냐하면 첫번째 피연산자만 평가해도
이미 전체 표현식이 false임을 알 수 있기 때문이다.
두번째 피연산자는 평가를 하지않는다.
/*

```

이렇게 어떤 상황에서 어디까지 평가되는지가 중요한 이유가 있다. 그것은 위에서 말했듯이 논리연산자가 값을 반환한다는 사실 때문이다. 즉 피연산자가 어디까지 평가되는지에 따라서 이 표현식의 값이 결정되는데 영향을 미치게 되는 것이다. **피연산자가 평가가되지 않는다는 것은 값을 반환할 수 없다는 것을 기억하자.**

💧 참고
`Short-circuit evaluation`은 우리말로 단락평가라고 번역된다. 하지만 저렇게 번역을 하면 이 말이 무슨말인지 단어만 보고 이해하기가 어려울거라는 생각이 든다. 최소한 나는 그랬다.(자랑이냐 😅) 그래서 나만의 생각으로 직역을 하면 `짧은 (회로) 평가`라고 하면 조금은 더 이해하기 쉽지않을까 하는 생각이 든다. `평가를 짧고 빠르게 한다는 의미`를 생각한다면, 이 단어를 좀 더 쉽게 이해 할 수 있을거라 생각한다.

### 연산자 결합성과 연산자 우선 순위

`연산자 우선순위`란 여러 연산자가 존재할 때, 어떤 연산자를 먼저 수행할 것인지에 대한 우선순위를 정해놓은 것이다. 논리연산자 중 `&&` 와 `||` 중에는 **&& 가 ||보다 우선순위가 높다**. 참고로 &&연산자가 6, ||연산자가 5이다.([연산자우선순위표](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84))

`결합성`이란 연산자 우선순위가 동일한 연산자가 존재할 때 어떻게 연산을 수행할 것인지를 결정하는 조건이다.
논리연산자의 결합성은 `좌결합성`이다. 왼쪽부터 읽어나가면서 연산이 수행된다. 결합성도 위 연산자우선순위표에 같이 적혀있으니 참고하시길 🚗

## || operator

-   || 연산자는 두 개의 피연산자 중에서 `한 개만 참`이면 그 `전체 표현식이 참`이다. 이것은 전통적인 방식의 || 연산자 평가 방법이다.
-   그렇다면 값은 `어떤 값`은 `어떻게` 반환할까?

```javascript
//false || true
const a = null || 'javascript';
```

위와 같은 코드가 있다고 하자. 위 코드가 어떻게 평가되어 변수 a는 어떤 값은 갖게되는지에 대해서 생각해보자.

1. || 연산자는 평가하기 앞서서 피연산자들을 불리언타입으로 `암묵적형변환`을 한다. ( && 연산자도 마찬가지로 연산 실행전에 암묵적형변환이 이루어진다.)
2. 첫번째 피연산자인 **null** 을 불리언타입으로 형변환 시키면 null은 `falsy value` 이기 때문에 `false`로 변환된다.
3. || 연산자는 참인 값이 하나만 나와도 전체 표현식 평가가 가능하기때문에 다음 피연산자의 평가로 넘어간다.
4. 두번째 피연산자는 문자열인 **'javascript'**를 평가한다. 문자열은 빈문자열을 제외하고는 모두 `truthy value`이다. 그렇기 때문에 두번째 피연산자는 `true`로 형변환된다.
5. 피연산자 둘 중 하나의 값이 true로 판명됐기 때문에 전체 표현식의 연산을 마치고 형변환 전의 피연산자 값인 `문자열 'javascript'를 반환`한다.
6. a에는 문자열 'javascript가 할당된다.

```javascript
//true || false
const b = 5 || 0;
```

1. 먼저 형변환이 이루어진다.
2. 5는 `truth value`이다. 숫자 중에서는 0(-0)을 제외하고는 모두 truthy value이다. 그래서 5가 true로 변환되어 true값이 반환된다.
3. 이미 이 표현식의 값은 true로 판명이 되었기때문에 두번째 피연산자는 평가가 이루어지지않는다.
4. 그래서 b는 형변환 전의 값인 5가 할당된다.

-   위와 같은 상황들을 일반화하여 만들면 아래와 같다.

```
|| 연산자는 첫번째로 나오는 truthy value의 원래 피연산자 값을 반환한다.
만약에 피연산자 모두 falsy value라면 마지막에 평가한 피연산자의 원래 값을 반환한다.
```

-   여기서 의문이 든다. 모두 거짓인데 값을 반환한다고?? 이것을 조금 더 설명해보면, 첫번째 피연산자가 거짓이면 두번째 피연산자를 평가한다. 이 때 두번째 피연산자를 평가하는데 이것 역시 거짓이다. 그렇다면 어떠한 값이라도 반환해야하는데, 이때 `마지막으로 평가한 값(두번째 피연산자 값)`을 내놓게 된다. 위와 같은 개념을 이용해서 `변수 초기화`에 사용되곤 한다.

```javascript
//false || false
const c = 0 || false;
```

> 위 코드는 || 연산자에서 피연산자 모두 거짓이다. 하지만 위에서 설명한 것처럼 변수 c에는 지막에 평가한 false라는 값이 반환된다.

## && Operator

-   && 연산자는 두 개의 피연산자 `모두가 참인 경우`만 `전체 표현식이 참`이다.
-   그렇다면 어떤 값을 반환할까?

```javascript
//true && false
const a = 'deno' && undefined;
```

1. || 연산자에서 처럼 형변환이 일어난다.
2. 'deno'는 truthy value이기때문에 true로 평가하고 다음 피연산자로 넘어간다.
3. 두번째 피연산자인 undefined는 falsy value이기 때문에 전체 표현식은 거짓으로 판명된다.
4. 마지막으로 평가한 undefined 값이 a에 할당된다.

```javascript
//false && true
const b = 0 && 'javascript';
```

1. 형변환이 일어나면 0은 falsy value이기 때문에 false로 평가된다.
2. 그러면 이미 이 표현식을 전체가 거짓이기 때문에 더 이상 평가가 이루어지지않는다.
3. b 에는 0이 할당된다.

```javascript
//true && true
const c = 5 && 'javascript';
```

1. 형변환이 일어나면 5는 truthy value이기에 true가 반환된다.
2. 다음 피연산자의 평가가 일어난다. 문자열 'javascript' 역시 truthy value 이다. 역시 true를 반환한다.
3. 전체 표현식은 true가 되고 마지막으로 평가된 문자열 'javascript'가 c에 할당된다.

-   위의 상황을 일반화하면 아래와 같다.

    ```
    && 연산자는 첫번째로 나오는 falsy value를 가진 피연산자의 원래 값을 반환한다.
    만약 모든 피연산자가 truthy value라면 마지막에 평가한 피연산자의 원래 값을 반환한다.
    ```

> 위와 같은 일반화를 약간 보충 설명하자면, && 연산자를 모두 참이여야 전체가 참이 되기 때문에 하나라도 거짓이 나오면 그 이후는 표현식을 평가할 필요없이 전체가 거짓이 된다. 표현식을 평가하지 못한다면 그 값이 나올 수 없기 때문에 평가가 끝난 곳에서 나온 값을 반환하게 된다. 즉 false라고 평가한 곳에서 반환 값이 나오게 된다.

## || 연산자와 && 연산자 정리

두 연산자의 원리는 `어떻게 하면 빠르게 연산(평가)을 끝낼 수 있을까`에 초점이 맞춰져있다. || 연산자는 하나라도 참이면 전체 표현식이 참이 된다는 점에서 참인 피연산자를 찾으면 (전체 표현식의 연산이 끝난 것이나 다름없기 때문에) 거기서 연산을 멈추고 그 참인 피연산자의 값을 반환한다. 또한 && 연산자는 하나라도 거짓이면 전체가 거짓(`모두 참이면 전체가 참`의 대우)이 되기 때문에 거짓인 피연산자 값을 찾으면 (전체 표현식의 연산이 끝난 것이나 다름없기 때문에) 거기서 연산을 멈추고 거짓인 피연산자의 값을 반환한다. 또한 만약에 모든 피연산자를 다 평가했다면 마지막에 평가한 피연산자의 값을 반환한다.

## Solution to preview

> 1단계

```javascript
console.log(0 || 7);
//falsy value || truthy value => 7

console.log(0 || false);
//falsy  value || falsy value => false

console.log(19 || 3);
//truthy value || truthy value => 19

console.log(19 || 0);
//truthy value || falsy value => 19

//----------------------------------

console.log(0 && 7);
//falsy value && truthy value => 0

console.log(0 && false);
//falsy value && falsy value => 0

console.log(19 && 3);
//truthy value && truthy value => 3

console.log(19 && 0);
//truthy value && falsy value => 0
```

<br>

> 2단계

> 연산자 우선순위를 적용하여 평가하라는 의미의 문제들이다. `&& 연산자가 || 연산자보다 우선순위가 높다`는 것을 인지하면 위와 같은 방식으로 해결이 가능하다.

```javascript
console.log(true || (true && false));
//console.log(true || true && false);
//output : true

console.log(false || (6 && undefined));
//console.log(false || 6 && undefined);
//output : undfined

console.log(true || ('abc' && 0));
//console.log(true || 'abc' && 0);
////output : true

console.log(0 || ('abc' && 19) || false);
//console.log(0 || 'abc' && 19 || false);
//output : 19

console.log((7 && 3 && 0) || (4 && false));
//console.log(7 && 3 && 0 || 4 && false);
//output : false

console.log((19 && 'Hello' && null) || 4 || (undefined && false));
//console.log(19 && 'Hello' && null || 4 || undefined && false);
//output : 4
```

> 주석처리한 코드와 괄호가 추가도 된 코드의 결과는 완벽하게 같다.

<br>

> 3단계

> 자바스크립트의 모든 함수(메서드)는 반환값이 존재한다. 만약 명시적인 반환값이 없다면 `undefined`를 반환한다. 위의 alert()은 명시적인 반환값이 없기에 `undefined`를 반환한다.

```javascript
if (-1 || 0) alert('first');
//truthy value || falsy value => 논리연산자에 의해 -1 반환 후에 if조건문 평가를 하면 -1은 참이기 때문에 alert()은 실행된다.
if (-1 && 0) alert('second');
//truthy value && falsy value => 논리연산자에 의해 0이 반환되고 if조건문 평가를 하면 0은 falsy value이기 때문에 거짓으로 판명되어 alert()은 실행되지 않는다.
if (null || (-1 && 1)) alert('third');
//falsy value || truthy value && truthy value => 논리연산자에 의해서 1이 반환되고  if조건문 평가를 하면 1은 참이기 때문에 alert()은 실행된다.

//즉 alert()으로 출력되는 문자열은 first와 third이다.
```

<br>

> 4단계

```javascript
alert(alert(1) || 2 || alert(3));
//첫번째 피연산자를 평가한다. alert(1)이 실행되어 1이 창에 출력되고 alert(1)의 반환값인 undefined를 평가하게 된다. undefined는 falsy value이기 때문에 그 다음 피연산자 평가를 진행한다.
alert(undefined || 2 || alert(3));
//두번째 피연산자인 2는 truthy value이기때문에 연산은 여기서 멈추고 2가 반환된다.
alert(2);
//alert()이 실행되어 2가 창에 출력된다.

// 즉 alert창에는 1과 2만이 차례대로 출력된다.
```

# Ref

-   [Master the Power Behind Javascript’s Logical Operators](https://codeburst.io/javascript-and-logical-operators-89b2ac3409f8)

-   [코어 자바스크립트 논리 연산자](https://ko.javascript.info/logical-operators)
