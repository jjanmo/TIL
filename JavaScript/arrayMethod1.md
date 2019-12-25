## 반드시 알아야 할 Array methods 1탄

### Array.from()
 - syntax : Array.from(arrayLike)
 - 유사 배열(배열은 아니지만 배열의 속성은 지닌 것(length와 index를 가진 객체), 반복 가능한 객체(iterable object)를 **새로운 Array 객체로 변환**시켜준다.
   - 유사 배열 ex.HTML Collection, NodeList 등
   - 반복가능한 객체 ex.Map, Set 등

### forEach() ⭐
 - syntax : arr.forEach(callback(currentValue[, index[, array]])[, thisArg]);
 - **주어진 배열의 각각의 원소마다 순회하며 주어진 콜백함수를 수행한다.**
 - 리턴값은 undefined이기 때문에 method chain의 중간에서 사용할 수 없다.
 - 동작에 대한 설명은 코드를 통해서 알아보자. 
  
📖 Example : Array.from(), forEach() 의 활용 
```HTML
<body>
    <ul>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Golang</li>
        <li>C++</li>
    </ul>
</body>
```
```javascript
    const lists = document.getElementsByTagName("li");
    Array.from(lists).forEach(function(value, index) {
        value.addEventListener("click", function() {
            console.dir(index);
            console.log(this.textContent);
        });
    });
```
> li element를 getElementsByTagName()로 가져오면 유사배열인 HTML Collection을 반환하기 때문에 forEach() 라는 Array 메소드를 사용할 수 없다. 이런 경우 Array.from()을 사용해서 HTML Collection을 새로운 Array 객체로 변환하여야 Array 메소드를 사용할 수 있다. 
   
> forEach() 에서는 Array의 각 원소와 index가 콜백함수의 매개변수인 value와 index로 대응된다(index는 생략 가능하다). 위 코드에서 value는 각각의 li element를 말한다. index값은 배열에서의  index값과 동일하다. 예를 들어 index가 0인 경우는 Java를 textContent로 갖는 li element를 가르킨다. Web상에서 JavaScript에 클릭이벤트가 발생하면 console에는 1, JavaScript가 출력된다.

### Array.of()
 - syntax : Array.of(element0[, element1[, ...[, elementN]]])
 - elementN은 배열을 생성할 때 사용할 요소를 나타낸다. 
 - **매개변수를 배열의 원소로 갖는 새로운 Array 객체를 생성**한다.

📖Example : Array.of()
```javascript
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
````

### every()
- syntax : arr.every(callback(currentValue,[index,array),thisArg])
- 배열 안의 모든 요소가 콜백함수(판별함수)를 만족하는지를 판별하여 **모두 만족하면 true**를, **하나라도 어긋나면 false**를 반환한다. 어떤 요소를 순회 중에 콜백함수가 false를 나타내게 되면 배열의 모든 요소를 판별하지 않았어도 그 즉시 false를 리턴한다.
- [ ].every(callback)인 경우는 무조건 true를 리턴한다.

📖Example : every()
```javascript
const arr1 = [2, 4, 6, 8, 10];
const arr2 = [12, 14, 15, 19, 20];
const arr3 = [];
let cnt = 0;

function isEven(value) {
    console.log(cnt);
    cnt++;
    return value % 2 === 0;
}

console.log(arr1.every(isEven)); //true 0 1 2 3 4
cnt = 0;
console.log(arr2.every(isEven)); //false 0 1 2
cnt = 0;
console.log(arr3.every(isEven)); //true
```

> arr2 에서 알 수 있듯이 콜백함수의 조건에서 false가 나오는 순간 바로 함수를 빠져 나오게 된다. 그래서 cnt값이 0,1,2까지만 찍히는 걸 알 수 있다. 또한 arr3의 경우는  빈 배열이기 때문에 true가 나오고 cnt값이 출력되지 않는 것을 보면 콜백함수 안으로 들어가지 않는다는 것을 알 수 있다. 

### some()
 - syntax : arr.every(callback(currentValue,[index,array),thisArg])
 - every() 와 반대 성격을 갖는 메소드이다. 배열의 원소 중에 **하나라도 콜백함수에 만족하면 true**를 반환하고 바로 메소드를 종료한다. 하지만 **한 개라도 만족하는 것이 없으면 모든 원소를 확인 하게 되며, 결과값에 false**를 리턴한다.
 - 빈 배열의 경우는 무조건 false를 리턴한다.  

📖Example : some()
```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 5, 7, 9];
const arr3 = [];
let cnt = 0;
function isEven(value) {
    console.log(cnt);
    cnt++;
    return value % 2 === 0;
}

console.log(arr1.some(isEven)); //true 0 1
cnt = 0;
console.log(arr2.some(isEven)); //false 0 1 2 3 4
console.log(arr3.some(isEven)); //false
```
> arr1을 보면 알 수 있듯이 some() 는 true가 반환되는 순간 배열 순회를 멈추고 빠져나오게 된다. cnt값이 0,1까지만 출력된 것을 보면 알 수 있다. arr2의 경우는 짝수가 존재하지않기 때문에 모두 false가 나오게 되면 결국 최종값으로 false가 리턴된다. arr3의 빈배열은 false가 리턴된다.

### sort()
 - syntax : arr.sort([compareFunction])
 - 새로운 배열을 정렬시켜서 리턴하는 것이 아니라 **원배열을 정렬하여 리턴시키는 것**이다. **정렬의 기준은 기본적으로 문자열로 변환되어 비교된 오름차순이다.** 예를 들어 8과 70을 비교하면 크기대로 정렬이 된다면, 8 70 순서지만, 문자열로 변환되어서 정렬되기때문에 70 8 순으로 정렬된다. 만약에 숫자 순으로 정렬을 하고 싶다거나, 내림차순으로 정렬하고 싶다면 **compareFunction인 콜백함수를 설정**해주면 된다.

📖Example : sort()  
```javascript
const numbers = [40, 12, 5, 2, 3];
//기본정렬인 경우
numbers.sort();
console.log(numbers); //12 2 3 40 5

//숫자로 비교 : 오름차순
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers); //2 3 5 12 40

//숫자로 비교 : 내림차순
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers); //40 12 5 3 2
```
### join()
- syntax : arr.join([separator])
- **배열의 모든 요소를 연결해서 하나의 문자열**로 만든다. 만약에 특정 구분자(separator)를 설정한다면, 각 요소 사이에 그 구분자가 들어가면서 하나의 문자열을 완성한다. 구분자를 생략하면 , 로 연결된다. 또한 arr.length가 0이라면 빈문자열을 반환한다.
- **문자열과 배열을 자유롭게 전환하는데 split()과 함께 유용하게 사용할 수 있다.**

📖Example : join()  
```javascript
const arr = ['java','javascript','python'];
const empty = [];
console.log(arr.join());    //java,javascript,python
console.log(arr.join(',')); //java,javascript,python
console.log(arr.join('+')); //java+javascript+python
console.log(arr.join(''));  //javajavascriptpython
console.log(empty.join());  //(빈문자열)
```