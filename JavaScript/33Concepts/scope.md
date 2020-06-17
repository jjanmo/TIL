# Understanding Scope

> 스코프에 대해서 [variables파트](variables.md)에서 다뤘던 것보다 좀 더 깊이있게 분석해보겠다.

## What is **Scope**

스코프란 `변수가 그 값을 알기 위해서 찾아봐야하는 코드 범위`를 말한다. 즉 스코프라는 개념은 식별자(변수) 확인(해석)을 위해 존재하는 개념이라고 볼 수 있다.

## 그렇다면 Indentifier Resolution(식별자 해석/확인)이란?

-   `식별자(indentifier)`란 값 혹은 참조를 할당하는 변수를 말한다. 예를 들어 `var a = 10;`이라고 하면 `a`가 식별자를 의미한다.

-   `Indentifier Resolution`이란 식별자에 어떤 값을 할당할지를 스코프(체인)를 통해서 해결하는 일련의 과정을 말한다.

## Scope의 종류

# Ref

-   [JavaScript Visualized: Scope (Chain)](https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd)

-   [JavaScript Scope Explained in Simple Words](https://dmitripavlutin.com/javascript-scope/#6-global-scope)

-   [Understanding Scope in JavaScript](https://scotch.io/tutorials/understanding-scope-in-javascript#toc-scope-in-javascript)
