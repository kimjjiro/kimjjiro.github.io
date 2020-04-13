---
title: Tech blog 크롤링하기 - 1
date: 2020-04-09
language: Javascript
tag: Crawler
---

트렌디한 기술을 체크하고 따라가기 위해 테크기업들의 블로그를 모아볼 수 있는 프로젝트를 시작한다.   

먼저 기술스택은 react(front), springboot(back), mongodb으로 시작하려 한다.  

1. springboot인 이유   
```   
Spring makes programming Java quicker, easier, and safer for everybody.
Spring’s focus on speed, simplicity, and productivity has made it the world's most popular Java framework.
```   
스프링은 누구에게나 자바 프로그래밍을 빠르고 쉽고 안전하게 만들어준다.
스프링은 속도와 단순성, 생산성에 대한 집중으로 가장 유명한 자바 프레임워크가 되었다.

라고 막 해석해보았다. 결론은 쉽게 Spring을 시작할 수 있다.   

여러가지 장점이 있지만, 나는 Microservices, Serverless에 끌려 선택하게 되었다.


2. mongodb인 이유   
NoSQL에 대해 접하며 여러 유형의 NoSQL이 있음을 알았고, 그 중 도큐먼트 지향인 mongodb가 러닝커브가 낮을거라 생각했다.   
이유는 Json과 비슷한 개념으로 생각되었으며, 여러개의 테이블 데이터를 하나의 Document에 몰아놓을수 있고, 
데이터가 많이 모이면 데이터 분석까지 해 볼 생각인데, 레퍼런스가 많다고 생각되었다.

3. react인 이유
그냥 해보고 싶었다.