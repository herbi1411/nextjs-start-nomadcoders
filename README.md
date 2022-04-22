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

___
### 1.4 CSS Modules
* \[filename\].module.css를 통해 CSS파일을 삽입할 수 있음
* CSS파일을 사용할 때는 \[import styles from "css file link"\]를 통해 사용 가능하며, styles.yourclassname을 통해 class를 적용할 수 있음
* 문자열로 만들면 2개이상의 class를 적용할 수 있음

___
### 1.5 Styles JSX
* js파일에서 \<style jsx\> 태그에 백틱문자(\`)를 통해 style 속성을 지정할 수 있음 
* styles jsx로 지정한 css는 해당 컴포넌트 내부에서만 작동함 (외부 파일에 적용되지 않음)

___
### 1.6 Custom App
* _app.js 파일을 통해 페이지의 로딩 시 항상 추가할 요소를 지정할 수 있다.
* 함수명은 정해지지 않았으며 인자값으로는 \{Component, PageProps\}를 받는다.
* NextJS는 사용자의 component를 _app.js의 component로 받아서 출력한다.
* 따라서 모든 페이지에 들어가는 요소는 _app.js에 삽입해서, 코드의 중복을 막을 수 있다.

___
### 2.0 Patterns
* NextJS에서는 컴포넌트에서 children을 받아서, 다른 컴포넌트에서 자신을 사용할 때 같이 쓰는 하위 컴포넌트들 받아올 수 있음
* Head 태그를 통해 웹페이티 탭의 제목을 설정할 수 있음 (title 태그 같이 사용)

___
### 2.1 Fetching Data
* 영화 API를 통해 목록으로 뿌리기
* 내부에서 함수를 선언하고 ()를 통해 바로 실행하는 문법

___
### 2.2 Redirect and Rewrite
* config파일에서 특정경로에 대한 redirect 설정을 할 수 있음
* redirect는 user가 path의 변경을 알 수 있지만, rewrite는 user가 path의 변경을 알 수 없음
