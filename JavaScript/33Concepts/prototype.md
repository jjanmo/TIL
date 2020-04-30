# Prototype

> `Prototype`을 알기 위해서 **객체지향프로그램밍**이 무엇인지에 대해서 알아보자

## Object Oriented Language/Programming(객체지향언어/프로그래밍)

-   객체지향 프로그래밍은 일종의 프로그래밍을 하는 방법론(패러다임)이다.

> 객체지향 언어를 두가지로 나눌 수 있다

-   Class based language : Java
-   prototype based language : JavaScript

# 객체 생성

> Class기반 언어, 특히 Java같은 경우 Class를 사전에 정의하고 객체에 필요한 시점에 new연산자를 통해서 객체를 생성한다.

> 그렇다면 Prototype기반 언어인 JavaScript는 어떻게 객체를 생성하는가?

## 리터럴(literal) 방식

-   가장 일반적이고 쉽게 객체를 생성하는 방식

```javascript
const human = {
    name: 'jjanmo',
    gender: 'male',
    favGame: ['starcraft', 'lol'],
    greeting() {
        console.log('Hello');
    },
};
```

## Object 생성자 함수

```javascript
```

## 생성자 함수

```javascript
```

1. 모든 객체는 함수로서 정의되어진다

const obj = { } === const obj = new Object()
두가지는 같은 의미

그렇다면 prototype이란 무엇인가
prototype은 말그대로 **원형**을 말한다

Prototype Object
Prototype Link

## What is Prototype

## How to use Prototype

## Why use Prototype

# More

-   Factory Pattern
-   Observer Pattern

# Ref

[Javascript: prototype 이란\_마이구미의 HelloWorld](https://mygumi.tistory.com/312)<br>
[Object prototype 이해하기\_Insanehong](http://insanehong.kr/post/javascript-prototype/)<br>
