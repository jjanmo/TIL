# Arrow Fucntion(화살표함수)에 대해서

> 함수표현식보다 간결하고 단순한 문법을 사용하는 ES6에 추가된 부분이다.

## 사용법

```javascript
//ES5
let sum = function (a, b) {
    return a + b;
};

//ES6
let sum = (a, b) => a + b;
```

> 매개변수지정시, 매개변수가 없거나 여러 개인 경우에는 반드시 `( )`를 적어줘야한다.

```javascript
let sum = (a, b) => {
    let result = a + b;
    return result;
};
```

> 함수 본문이 `한 줄`인 경우는 `=> 뒷부분`에서 return 키워드를 생략할 수 있다. 하지만 `두 줄이상`이 되면 반드시 `{ }`를 사용해야한다. 또한 return값이 있을 때는 `명시적으로 return키워드`를 사용해야한다.

```javascript
//ES5
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    '동의하십니까?',
    function () {
        alert('동의하셨습니다.');
    },
    function () {
        alert('취소 버튼을 누르셨습니다.');
    }
);

//ES6
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    '동의하십니까',
    () => alert('동의하셨습니다.'),
    () => alert('취소 버튼을 누르셨습니다.')
);
```

## 특징

1. 화살표 함수에는 `this`가 없다. 😵

    > this는 기본적으로 `호출되는 함수가 어떻게 호출되었는지`에 따라서 결정된다.

    > 화살표함수는 화살표함수 자체가 가지고 있는 `this`가 없다. 그렇기 때문에 `함수가 호출되는 방식`에 따라서 this가 결정되지 않고 `코드상 상위 블록의 스코프`를 this에 바인딩한다.

<br>

> 아래 코드의 1과 2에서 출력되는 this는 무엇이고 결과는 어떻게 될까?

```javascript
const user = {
    name: 'jjanmo',
    favFood: ['pizza', 'samgyeobsal', 'steamed chicken'],
    introduce() {
        console.log(this); // 1
        let str = `Hello my name is ${this.name} 😎, I like `;
        this.favFood.forEach(function (food, idx) {
            console.log(this); //2
            if (this.favFood.length - 1 !== idx) {
                str += `${food} `;
            } else {
                str += `${food} 🚀`;
            }
        });
        console.log(str);
    },
};

user.introduce();
```

> **1번**에서의 this는 `user객체`를 나타낸다.(by dot notation) **2번**에서의 this는 `window객체`를 나타낸다. 1번은 이해할 수 있지만 '2번은 왜지' 라고 생각이 들수도 있다. 그것은 forEach()안의 콜백이기 때문에 그렇다. 콜백은 실행시점이 되면 `callback()` 형태로 실행(호출)이 되기 때문에 여기서 `this`는 `window`를 나타낸다. 그 결과 이 코드의 `window.favFood`는 `undefined`이고 그것의 length는 당연히 `typeError`를 발생시킨다.

> 그렇다면 이 함수를 내가 원하는 결과인 **제대로된 소개문**을 출력하고 싶다면 어떻게해야 할까? 이 경우 화살표함수를 사용하면 콜백 안의 this가 `상위 블럭의 스코프인 user`를 가르키게 된다.

```javascript
const user = {
    name: 'jjanmo',
    favFood: ['pizza', 'samgyeobsal', 'steamed chicken'],
    introduce() {
        console.log(this); // 1 - user
        let str = `Hello my name is ${this.name} 😎, I like `;
        this.favFood.forEach((food, idx) => {
            console.log(this); //2 - user
            if (this.favFood.length - 1 !== idx) {
                str += `${food}, `;
            } else {
                str += `${food} 🚀`;
            }
        });
        console.log(str);
        // Hello my name is jjanmo 😎, I like pizza, samgyeobsal, steamed chicken 🚀
    },
};
user.introduce();
```

> 화살표함수로 변경된 코드에서는 위와는 다르게 1번과 2번에서 모두 this는 `user객체`를 나타낸다.

2. 화살표함수는 `new 연산자` 를 사용하여 호출할 수 없다.
3. 화살표함수에는 `arguments` 객체가 없다.
4. 화살표 함수는 `super`가 없다.

# Ref

-   [코어자바스크립트 화살표함수](https://ko.javascript.info/arrow-functions-basics)
-   [코어자바스크립트 화살표 함수 다시 살펴보기](https://ko.javascript.info/arrow-functions)
-   [poiemaweb 화살표 함수](https://poiemaweb.com/es6-arrow-function)
-   [자바스크립트 this 바인딩 우선순위](http://jeonghwan-kim.github.io/2017/10/22/js-context-binding.html)
