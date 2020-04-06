---
title: JavaScript Array의 Map vs forEach
date: 2020-04-06
language: JavaScript
---
React초보로써 Navbar를 그리던 중 Map으로 그렸을 땐 나오고 forEach로 그렸을 땐 안나와서 알아본다.

###forEach   
```   
executes a provided function once for each array element.   
```   
각각의 엘리먼트마다 한번씩 제공된 함수를 실행한다.   

##Map 
```     
creates a new array with the result of calling a provided function on every element in the calling array.   
```   
모든 엘리먼트에서 제공된 함수를 호출 한 결과로 새 배열을 만든다   

대충 해석해 봤지만 정확히 어떤 뜻일까   

map과 forEach는 거의 동일하지만 리턴에서 차이를 보인다.   

```   
forEach   
var numbers = [1, 2, 3, 4, 5];   
var doubles = numbers.forEach( (node, index) => { return node * 2} );   
console.log(doubles); // undefined   
```   

```   
Map   
var numbers = [1, 2, 3, 4, 5];   
var doubles = numbers.map( (node, index) => { return node * 2} );   
console.log(doubles); // [2, 4, 6, 8, 10]   
```   

이제 뭔가 뒤통수를 맞은듯 쎄한 느낌이 온다.   
아래 소스는 메뉴를 만들 때 사용한 소스다. 물론 개선되어야 할 여지가 많지만 1차 목표는 완성이기에 나중에 리팩토링하기로 한다(기약없이 미룬다).   
```   
<Nav>
    {menu.forEach((item, index) => (
        <Nav.Link key={index} href={item.link}>
            {item.text}
        </Nav.Link>
    ))}
</Nav>
```   

```   
<Nav>
    {menu.map((item, index) => (
        <Nav.Link key={index} href={item.link}>
            {item.text}
        </Nav.Link>
    ))}
</Nav>
```   

그렇다 이제 보인다. 두 코드의 결과는 아래와 같다.   
```   
forEach
<Nav>
</Nav>
```   

```   
Map
<Nav>
    <Nav.Link key="1" href="/ABOUT">
        ABOUT
    </Nav.Link>
</Nav>
```   

메뉴가 안나왔던 이유는 render를 탈 때 이미 안그린 걸 돌려줬기 때문이라고 생각한다.   
충격적이다. 모르는건 죄가 아니지만 시간은 아깝다.   
끝.