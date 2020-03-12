# 마크다운이란
```
마크다운(markdown)은 일반 텍스트 문서의 양식을 편집하는 문법이다. 
README 파일이나 온라인 문서, 혹은 일반 텍스트 편집기로 문서 양식을 편집할 때 쓰인다. 
마크다운을 이용해 작성된 문서는 쉽게 HTML 등 다른 문서형태로 변환이 가능하다.
-위키백과
```
-----

# 작성 및 결과 예

**1. Header**
```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

# h1
## h2
### h3
#### h4
##### h5
###### h6

#### h1과 h2는 =, -로도 표현이 가능하다
```
h1
==

h2
--
```

h1
==

h2
--

-----

**2. 강조**

```
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
~~cancelline~~
```

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

~~cancelline~~

-----

**3. 줄바꿈**

- 줄바꿈을 하기 위해서는 줄 마지막에 세칸이상을 띄어쓰기 해야 한다.
```
줄바꿈을 하기 위해서는 줄 마지막에 세칸이상을 띄어쓰기 해야 한다.___
이렇게
```
줄바꿈을 하기 위해서는 줄 마지막에 세칸이상을 띄어쓰기 해야 한다.   
이렇게

-----

**4. BlockQuote**  
- `>` 문자를 이용한다.

```
> First blockquote
>   > Second blockquote
>   >   > Third blockquote
```

> First blockquote
>   > Second blockquote
>   >   > Third blockquote

-----

**5. 목록**
- 순서가 있는 목록은 숫자와 점을 사용한다.

```
1. 첫번째
2. 두번째
3. 세번째
```

1. 첫번째
2. 두번째
3. 세번째

- 순서가 없는 목록(*,+,- 지원)

```
* 첫번째
    * 두번째
        * 세번째

+ 첫번째
    + 두번째
        + 세번째

- 첫번째
    - 두번째
        - 세번째
```

* 첫번째
    * 두번째
        * 세번째

+ 첫번째
    + 두번째
        + 세번째

- 첫번째
    - 두번째
        - 세번째

혼합해서 사용이 가능하다
```
* 첫번째
    + 두번째
        - 세번째
            * 네번째
```

* 첫번째
    + 두번째
        - 세번째
            * 네번째

-----

**6. 코드**
- 들여쓰기
4개의 공백 또는 하나의 탭으로 들여쓰기를 만나면 변환되며 들여쓰지 않은 행을 만날때까지 계속된다. (한줄 띄어쓰지 않으면 적용되지 않는다.)
```
start code block
    code block
end code block
```
start code block
    code block
end code block


```
start code block

    code block

end code block
```

start code block

    code block
    
end code block

- 코드블럭

아래처럼 2가지 방식을 이용할 수 있다.
``<pre><code>{code}</code></pre>`` 이용방식
```
<pre>
<code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
</code>
</pre>
```
<pre>
<code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
</code>
</pre>

<pre>
<code>
```
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```
</code>
</pre>

```
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

-----

**7. 수평선 <hr/>**
- 아래는 모두 수평선을 만든다

```
***

* * *

*****

-----

---
```

***

* * *

*****

-----

---

**8. 링크**
- 참조링크

```
[link keyword][id]
[id]: URL "Optional Title here"

exam(한줄 비워야 적용된다.)
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"
```

Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"

**9. 이미지**

```
![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Optional title")
```

이미지는 나중에 업로드 후 수정하겠다.