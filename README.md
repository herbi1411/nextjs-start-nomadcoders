# [NextJS 노마드코더 강의](https://nomadcoders.co/nextjs-fundamentals/lectures)
___
### 1.1 Pages
* NextJS에서는 pages폴더에 넣는 js파일명 자체가 사이트의 링크가 된다.
* 함수를 쓸 때 export default태그를 붙여야한다.

___
### 1.2 Static Pre Rendering 
* client-side-rendering: 서버로부터 JS만 가져와 직접 html을 렌더링함
* React에서는 API들의 정보가 모두 받아져야 Rendering을 하지만, NextJS에서는 로고와 같은 정적 파일을 먼저 Rendering할 수 있음

___
### 1.3 Routing
* a태그를 Link에 감싸줘야함
* useRouter를 통해 pathname을 가져올 수 있음