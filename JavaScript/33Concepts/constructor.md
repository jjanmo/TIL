# Understanding constructor and new keyword

## 객체를 생성하는 방법들

1. 리터럴(literal) 방식

   > 가장 일반적인 방식으로 대부분 이 방식으로 객체를 생성한다.

   > **리터럴 표기에 의한 객체 생성**`(creating objects with literal notation)`이라고 MDN 문서에 표기되어 있다.

   ```javascript
   const obj = {};
   const arr = [];
   function foo() {}
   ```

2. new 연산자 사용하는 방식

   > 우리가 살펴볼 방식으로서 생성자 함수를 생성하고 그 생성자 함수에 new 연산자를 붙임으로서 객체를 생성한다.

   > 사실 **자바스크립트에서 모든 객체는 함수에 의해서 생성된다**. 위의 리터럴 방식으로 생성된 객체 모두 내부적으로 생성자 함수에 의해서 생성되었다.

   ```javascript
   const obj = {};
   const obj = new Object();

   const arr = [];
   const arr = new Array();

   function foo() {}
   const foo = new Function();
   ```

   > 크게 객체에 속하는 인스턴스 객체, 배열, 함수 모두 각각의 생성자 함수에 의해서 생성이 가능하다.

   > 하지만 일반적으로 이렇게 생성하지 않는다. 이렇게 사용해야 할 상황이 있다면 사용하겠지만, 리터럴 방식으로 생성할 수 있는 상황에서 일부로 생성자 함수를 사용해서 객체를 생성하지는 않는다.

3. Object.create()를 사용하는 방법

   > 이 부분은 추후에 프로토타입 상속과 관련해서 다시 정리 할 것이다. 그렇기 때문에 간략하게 syntax만 보고 가자.

   > Object.create(proto, [ ])

<br />

## new 연산자의 작동과정

```
1. Let obj be a newly created native ECMAScript object.
2. Set all the internal methods of obj as specified in 8.12.
3. Set the [[Class]] internal property of obj to "Object".
4. Set the [[Extensible]] internal property of obj to true.
5. Let proto be the value of calling the [[Get]] internal property of F with argument "prototype".
6. If Type(proto) is Object, set the [[Prototype]] internal property of obj to proto.
7. If Type(proto) is not Object, set the [[Prototype]] internal property of obj to the standard built-in Object prototype object as described in 15.2.4.
8. Let result be the result of calling the [[Call]] internal property of F, providing obj as the this value and providing the argument list passed into [[Construct]] as args.
9. If Type(result) is Object then return result.
10. Return obj.
```

> new 연산자를 사용하면 일어나는 단계에 대한 원문[[스펙](http://www.ecma-international.org/ecma-262/5.1/#sec-13.2.2)] 내용

> 여기에 있는 모든 내용을 처음부터 상세히 알 필요는 없다. (..라고 개인적으로 생각한다.) 하지만 중급을 넘어 고급 자바스크립트 개발자가 되기위해선 언젠가는 넘어가야 할 관문이다.🤗 차근 차근 중요한 포인트부분부터 알아보자

# Ref

- [속깊은 자바스크립트 : 상속, new와 Object.create의 차이](https://unikys.tistory.com/320)
