# `this` Quiz

> 이 포스터는 철저하게 주어진 코드에서 `this`가 무엇인지를 찾아가는 방식에 대한 생각의 흐름을 정리할 것이다. 어떻게 보면 문제 풀이와 같은 느낌이 들 수도 있다.

> 각 문제에 대한 참조는 맨밑을 참고하시면 되고 참조가 없는 문제는 직접 생각해본 것들이다. 또한 문제를 위한 문제인 경우도 있기 때문에 이를 감안하고 철저하게 `this`를 찾는 훈련을 해보자.

## OneMoreTime Summary

> 문제에 들어가기 앞서 this에 대해서 정리해보자.

1. `this`는 일반적으로 어떠한 객체를 가르킨다.

2. `this`는 this가 어디서 쓰였는지가 아니라 `어떻게 호출되었는지`가 중요하다. 정확하게 `this`는 `함수 호출 시점`에 바인딩되고 전적으로 `함수를 호출한 코드`에 의해서 결정된다. 그렇기때문에 우리가 해야할 일은 `어떻게 함수가 호출되었는지`를 누구보다 빠르고 명확하게 파악하는 일이다.

3. 함수를 호출하는 방법은 크게 4가지가 존재한다. 첫번째 foo() bar() 와 같은 `일반적인 호출`이 있다. 두번째는 메서드 호출처럼 `dot-notation`으로 호출하는 방식이 있다. (ex. foo.bar(), bar.foo.baz()... ) 세번째는 `new 연산자`로 호출하는 방법있다. 마지막으로 `명시적 바인딩`이라고 부르는 `call(), apply(), bind()`을 이용한 호출이 있다.

4. 화살표함수의 경우인 함수가 지니고 있는 this가 없다. 이 말은 자체적으로 this를 결정하지 않을 뿐 `상위스코프의 this`를 가져와서 사용한다.

## Question #1

```javascript
1 function logThis(){
2   console.log(this);
3 }

4 const myObj = {
5  logThis
6 }

7 myObj.logThis()
```

## Solution #1

1. 먼저 this가 있는 함수가 어디서 호출되었는지를 찾아본다. : **7번라인**
2. 그럼 `어떻게 호출`되었나? **dotnotaion인 myObj.호출()** 이라고 되어있다.
3. 그렇다면 함수 logThis 안의 this는 `호출부 . 바로 앞의 객체`인 **myObj** 를 나타낸다.

## Question #2

```javascript
1  function logThis(){
2    console.log(this);
3  }
4
5  const myObj = {
6   foo: function(){
7     logThis();
8   }
9  }
10
11 myObj.foo()
```

## Solution #2

1. this가 들어있는 함수가 myObj의 메소드 안에서 호출되었다.
2. 하지만 `어떻게 호출`되었는가? 그냥 **일반적인 방식**으로 호출되었다. `logThis()`
3. 함수 logThis가 어디에 있든 관계없다. 일반적으로 호출되었다면 this는 **window(전역객체)** 이다.

## Question #3

```javascript
const logThis = () => {
    console.log(this);
};

const myObj = {
    foo: logThis,
};

myObj.foo();
```

## Solution #3

## Question #4

```javascript
```

## Solution #4

## Question #5

```javascript
```

## Solution #5

## Question #6

```javascript
```

## Solution #6

## Question #7

```javascript
```

## Solution #7

## Question #8

```javascript
```

## Solution #8

## Question #9

```javascript
```

## Solution #9

## Question #10

```javascript
```

## Solution #10

## Question #11

```javascript
```

## Solution #11

## Question #12

```javascript
```

## Solution #12

# Ref

-   [Question 1~12](https://dev.to/sag1v/javascript-the-this-key-word-in-depth-4pkm)
