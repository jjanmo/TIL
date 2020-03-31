# 문제1번: What I Learned in thid problem

## == vs ===

> 각각의 동작 원리에 대해서

1. ==

-   엄격한 동등성을 비교 : 값과 데이터 타입(형)이 모두 같아야 `true`

    ```
    기본형 : String, Number, Boolean, Null, Undefined, Symbol
    참조형 : 그 외의 데이터타입 모두 : Object, Array, Function
    ```

-   기본형 : 값과 데이터 타입(형)이 모두 같아야 `true`
-   참조형 : 비교 대상들이 참조하는 참조값이 같을 때, 값이 같아야 `true`

2. ===

## valueOf()

## toString()

## Error Message의 의미

1. `SyntataxError: Unexpected token ILLEGAL`

2. `TypeError: undefined is not a function`

# Ref.

-   [[썬한코딩]입사에 필요한 JS 기술 #1](https://www.youtube.com/watch?v=VYqPToE_GxM)
-   [자바스크립트 개발자라면 알아야 할 33가지 개념 #4 암묵적 타입 변환(implicit coercion) (번역)](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-4-%EC%95%94%EB%AC%B5%EC%A0%81-%ED%83%80%EC%9E%85-%EB%B3%80%ED%99%98-%EB%B2%88%EC%97%AD)
-   [자바스크립트 개발자라면 알아야 할 33가지 개념 #5 == vs === 3분만에 배우기 (번역)](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-5-vs-3%EB%B6%84%EB%A7%8C%EC%97%90-%EB%B0%B0%EC%9A%B0%EA%B8%B0-%EB%B2%88%EC%97%AD)
