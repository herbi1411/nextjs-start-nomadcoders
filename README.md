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

___
### 2.3 Server Side Rendering
* NextJS에서 getServerSideProps함수를 삽입해서 server side rendering을 할 수 있다.
* 현재까지의 프로젝트 구조에서는 client쪽에서 영화api로 부터 정보를 받아 출력을했고, 받기 전까지 loading을 보여주는 구조였다.
* 하지만 server side rendering을 하면 서버에서 정보를 다 받은 다음에 client에게 넘길 수 있다.

___
### 2.5 Dynamic Routes
* NextJS에서는 React와 다르게 Router를 사용하지 않고, 폴더 명에 의해 URL을 정할 수 있음
* 이때 url로 변수를 받고싶은 경우에는 대괄호로 변수명을 감싸서 파일명을 지으면 됨

___
### 2.6 Movie Detail
* useRouter를 통해 경로를 push해서 링크를 이동할 수 있다.
* router에 객체를 push해서, query를 url로 같이 보낼 수 있다.
* push의 as옵션을 사용하면 query를 보내면서 url에는 안뜨도록 할 수 있다.

___
### 2.7 Catch All
* \[\]파일 명 앞에 ...을 붙이면 하위의 모든 경로에대해서도 접근할 수 있다.
* 하위 경로들이 query에 배열로 들어오며, 배열 이름은 파일 명이 된다.
* 사용자가 이미지 클릭이 아니라 웹사이트 주소입력으로도 들어와도 정보를 제대로 띄우기 위해 server-side-rendering을 추가한다.
* SEO: 검색 엔진 최적화 (내 사이트가 검색 엔진에 더 잘 뜨게 하기 위한 행위(웹 크롤러한테 색인 당하게 하기))

___
### 2.8 404 Pages
* pages폴더에 404.js 파일에 04페이지에서 띄울 HTML을 작성할 수 있다.