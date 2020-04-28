# JavaScript is Dynamic Typed Language

## 변수 선언 및 할당

```
  식별자(identifier) 변수 = 값;
```

```java
    int a = 1;
    char b='a';
```

> Java : 식별자를 보면 변수가 어떤 데이터 타입을 갖게 할 것인지를 미리 설정을 한다.(개발자가 미리 설정을 하는 것이지 이 때 변수의 타입이 결정되는 것은 아니다. 정확하게 컴파일 과정을 통해서 결정된다.)

```javascript
var b = 2;
let c = 'JJan';
```

> JavaScript : 식별자 속에 이 변수가 어떤 데이터 타입인지에 대한 의미는 내포하고 있지 않다.

<br>

모든 값은 데이터 타입을 갖는다. **그렇다면 변수는 언제 어떻게 데이터 타입을 갖는 것일까?** 변수의 데이터 타입이 언제 결정되는가에 따라서 **정적타이핑(static typing)언어** 혹은 **동적타이핑(dynamic typing)언어**라고 말한다

## Static typing(정적타이핑)

데이터타입을 컴파일하는 당시에 결정하는 것으로서 변수에 할당될 값의 자료형에 따라서 변수의 자료형을 미리 지정한다. 컴파일 진행시 변수의 자료형에 맞지 않는 값이 전달되면 타입에러가 발생한다. C,C++, Java등과 같은 언어가 이에 해당한다. 컴파일이 진행될 때 에러가 발생함으로 초기에 문제점을 발견할수있다

> 변수 선언시에 결정한 데이터타입이 아닌 값을 변수에 할당 할 수 없다

## Dynamic typing(동적타이핑)

데이터타입을 컴파일이 아니라 런타임(실행환경)시 결정하는 것으로서 변수에 명시적인 자료형을 지정하지않고 값을 전달한다. 런타임시에 데이터타입을 결정하기때문에 코딩을 하는 입장에서는 편할 수 있지만, 런타임동안 예상하지못한 에러가 발생할수있기 때문에 추후에 큰 어려움을 야기 할 수 있다. 이와 같은 언어로는 JavaScript와 Python등이 있다.

> (자바스크립트는) 변수 선언시에는 데이터타입을 결정하지 않기 때문에 어떠한 데이터타입의 값이라도 변수에 할당될 수 있다. 또한 재할당을 통해서 변수의 타입이 동적으로 변할 수 있다.

```javascript
let jjan;
console.log(typeof jjan); //undefined

jjan = 0;
console.log(typeof jjan); //number

jjan = 'jjanmo';
console.log(typeof jjan); //string

jjan = true;
console.log(typeof jjan); //boolean

jjan = null; //null이지만 object로 나옴
console.log(typeof jjan); //object

jjan = Symbol();
console.log(typeof jjan); //symbol

jjan = {}; // function -> object의 일종
console.log(typeof jjan); //object

jjan = []; // array -> object의 일종
console.log(typeof jjan); //object
```

> 위는 typeof 연산자를 통해서 변수 jjan의 타입을 알아보는 과정이다. 변수 jjan의 타입은 값이 무엇이 할당되었는지 따라서 동적으로 변한다는 것을 알 수 있다.

## 결론

자바스크립트에서의 변수는 (기본적으로) 데이터타입을 갖지 않는다.
변수에 할당되는 값의 데이터 타입에 따라서 변수의 데이터 타입이 결정된다.

# Ref

[동적타이핑](https://www.youtube.com/watch?v=Q1r-AwnwSFE&list=PLkNVwwEe58DiinhXMEGJaEh8RaxkvSMDj&index=7&t=29s)<br>
[정적 타이핑, 동적 타이핑](http://blog.naver.com/PostView.nhn?blogId=thnam91&logNo=220992328516&parentCategoryNo=&categoryNo=7&viewDate=&isShowPopularPosts=true&from=search)
