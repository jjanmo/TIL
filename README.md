# My Roadmap for Web Developer

> [개발자 로드맵](https://github.com/kamranahmedse/developer-roadmap)을 바탕으로 학습하고 정리합니다. 로드맵의 모든 내용을 다 알아야한다는 의미보다는 `현재 개발 트렌트에 대한 방향성, 체크리스트`라고 생각하고 접근하고 있습니다.

> 굉장히 다양하고 많은 내용이기에 꾸준히 채워나갈 예정입니다.

> 잘못된 내용에 대해서 언제든지 피드백 부탁드립니다.😄

## General Web(Internet)

- [ ] 인터넷을 어떻게 작동될까?
- [ ] HTTP란 무엇일까?
- [ ] 브라우저의 동작 원리
- [ ] Domain Name이란 무엇일까?
- [ ] DNS의 작동 원리
- [ ] Hosting은 무엇일까?

## Web Security

- [ ] HTTPS
- [ ] CORS
- [ ] 컨텐츠 보안 정책
- [ ] OWASP 보안 취약점
- [ ] MD5와 사용하지 않는 이유
- [ ] SHA Family
- [ ] Hash Algorithm : scrypt, bcrypt

## HTML

- [x] [Semantic(의미론적) HTML](html/semantic.md)
- [ ] 기본적인 SEO
- [ ] 웹 접근성
- [ ] 폼과 유효성 검사
- [ ] 컨벤션과 모범사례(Best Practice)

## CSS

- [x] [CSS unit(CSS 단위)](CSS/css-unit.md)

- [x] [Selector](CSS/selector.md)

- Layout
  - [ ] Floats
  - [ ] Positioning
  - [x] [Display](CSS/display.md)
  - [x] [Box Model](CSS/boxmodel.md)
  - [x] [Flex Box](CSS/float.md)
  - [ ] CSS Grid
- [ ] Media Query & Responsive Design

- CSS3

  - [ ] Transform
  - [ ] Transition
  - [ ] Animation
  - [ ] Gradient

- [x] [Flexbox](CSS/flexbox.md)
  - Flex Layout Example
- [ ] [Grid](CSS/grid.md)

## CSS 구조(CSS Architecture)

- [ ] BEM

# Modern CSS

- [ ] Styled Components
- [ ] CSS Module
- [ ] Styled JSX
- [ ] Emotion

## JavaScript

> 자바스크립트의 개념은 [33 Concepts Every JavaScript Developer Should Know](https://github.com/jjanmo/33-js-concepts)를 바탕으로 학습합니다.

- [x] [Call Stack(호출스택)](JavaScript/33Concepts/callstack.md)

- [x] [Execution Context(실행컨텍스트)](JavaScript/33Concepts/execution-context.md)

- [x] [Primitive Type(원시자료형)](JavaScript/33Concepts/primitivetype.md)

  - [Dynamic Type](JavaScript/33Concepts/dynamicType.md)
  - Wrapper Object

- [x] [Value Types and Reference Types(값과 참조형)](JavaScript/33Concepts/valueType-vs-referenceType.md)
- [x] [Type Coercion(형변환)](JavaScript/33Concepts/coercion.md)

  - [논리연산자( && 와 || )의 이해](JavaScript/33Concepts/logical_operator.md)

- [ ] == vs ===
- [ ] Function Scope, Block Scope and Lexical Scope

  - [Function Basic](JavaScript/33Concepts/function_basic.md)
  - [What is Scope](JavaScript/33Concepts/scope.md)
  - [Variables & Scope](JavaScript/33Concepts/variables_scope_hoisting.md)
  - [About Arrow Function](JavaScript/33Concepts/arrowfunction.md)

- [ ] Expression vs Statement(표현식과 문장)
- [ ] IIFE, Modules and Namespaces
- [ ] Message Queue and Event Loop
- [ ] setTimeout, setInterval and requestAnimationFrame
- [ ] JavaScript Engines
- [ ] Bitwise Operators, Type Arrays and Array Buffers
- [x] [DOM and Layout Trees](JavaScript/33Concepts/DOM.md)

  - [appendChild()에 대해서](JavaScript/appendChild.md)

- [ ] Factories and Classes
- [x] this, call, apply and bind

  - [x] [this for beginner](JavaScript/33Concepts/this.md)
  - [x] [call() vs apply() vs bind()](JavaScript/33Concepts/call_apply_bind.md)

- [ ] new, Constructor, instanceof and Instances

  - [ ] [new operator & constructor](JavaScript/33Concepts/constructor.md)
  - [x] [instanceof](JavaScript/33Concepts/instanceof.md)

- [ ] [Prototype Inheritance and Prototype Chain(프로토타입의 상속과 체인)](JavaScript/33Concepts/prototype.md)
- [ ] Object.create and Object.assign
- [ ] map, reduce, filter

  - [Array methods 1탄](JavaScript/array/arrayMethod1.md)

    > Array.from(), Array.of(), every(). some(), sort(), join(), forEach()

  - [Array methods 2탄](JavaScript/array/arrayMethod2.md)
    > filter(), find(), findIndex(), indexOf(), lastIndexOf(), includes()

- [ ] Pure Functions, Side Effects and State Mutation
- [ ] [Closures](JavaScript/33Concepts/closure.md)

- [ ] [High Order Functions](JavaScript/33Concepts/highOrderFunctions.md)

- [ ] [Recursion](JavaScript/33Concepts/recursion.md)
- [ ] Collections and Generators
- [ ] Promises
- [ ] async/await
- [ ] Inheritance, Polymorphism and Code Reuse
- [ ] Design Patterns
- [ ] Partial Applications, Currying, Compose and Pipe
- [ ] Clean Code

- [ ] Data Structures
- [ ] Expensive Operation and Big O Notation
- [ ] Algorithms

## Modular JavaScript & ES6+

## VCS(Version Control System)

- [ ] Git & Github

## Package Manager

- [x] [NPM(Node Package Manager)](PackageManager/what_is_NPM.md)

## Build Tool

- Task Runner
  - [ ] npm scripts
- Module Bundler
  - [ ] [Webpack](Webpack/webpack.md)
  - [ ] Parcel

## React.js

> [React 공식문서](https://ko.reactjs.org/docs/hello-world.html)를 통해서 학습합니다.

## Redux

## Node.js

- [What is Node.js?](Node/what-is-node.md)
