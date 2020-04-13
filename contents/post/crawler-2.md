---
title: Tech blog 크롤링하기 - 2
date: 2020-04-13
language: Javascript
tag: Crawler
---

우선 간단하게 MongoDB와 Springboot를 연동해 조회를 테스트 했다.
코드는 아래와 같다.

Controller   
기존의 컨트롤러들과 똑같다.
```   
@RestController
public class CrawlerRestController {   
	@Autowired   
	private PostMongoDBRepository postMongoDBRepository;   
	   
	@RequestMapping(value = "/")   
	public String Home() {   
		System.out.println(postMongoDBRepository.findAll());   
		return "Hello world";   
	}   
}   
```   

Repository   
JPA처럼 사용한다. JPA도 겉핥기로 써봤기때문에 좀 더 스터디가 필요하다.   
기본적인 mongodb 함수는 구현되어 있다.   
```   
public interface PostMongoDBRepository extends MongoRepository<Post, String>{   
	public List<Post> findAll();   
}   
```   


Document   
모든 변수를 써주지 않으면 collection을 지정해 주어야 한다고 한다.   
현재 세개밖에 없지만 계속 추가 될 예정이므로 지정해주었다.   
```   
@Document(collection = "posts")   
public class Post {   
	private String Company;   
	private String Title;   
	private String Content;   
   
    public String toString() {   
		StringBuilder returnBuilder = new StringBuilder();   
		   
		returnBuilder.append("Company: ").append(this.Company).append("\t")   
					.append("Title: ").append(this.Title).append("\t")   
					.append("Content: ").append(this.Content);   
		   
		return returnBuilder.toString();   
	}   
}   
```   

Application을 Run한 뒤 결과
```   
[Company: Naver Title: Test Content: Test]   
```   

기본적인 조회를 해 보았다.   
다음은 Crawling을 통해 저장할 데이터를 확인하고, 구조를 수정해 보자.