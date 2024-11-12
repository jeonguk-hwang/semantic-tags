# 프로젝트 소개
Semantic Tags는 웹 개발과 디자인 트렌드에 대한 블로그 프로젝트입니다. 이 프로젝트는 HTML의 시맨틱 태그와 CSS 레이아웃 기술(Flexbox, Grid 등)을 사용하여 웹 접근성과 SEO(검색 엔진 최적화)를 극대화합니다.

# 주요 기능
- 시맨틱 HTML을 사용하여 구조적이고 접근성 높은 웹 페이지 제작.
- CSS Grid와 Flexbox를 활용한 반응형 디자인.
- JSON-LD 구조화된 데이터를 통해 검색 엔진에 최적화.
- Webpack을 사용한 모듈 번들링 및 자원 관리.
- 개발 및 배포를 위한 Webpack Dev Server.

# 설치 및 실행 방법
1. 프로젝트 클론
```bash
git clone https://github.com/jeonguk-hwang/semantic-tags.git
cd semantic-tags
```
2. 의존성 설치
```bash
yarn install
```
3. 개발 서버 실행
```bash
yarn start
```
- 개발 서버가 실행되면 브라우저가 자동으로 열리며, 기본 URL은 http://localhost:8080입니다.
4. 프로덕션 빌드
```bash
yarn build
```
- 빌드 결과는 /dist 폴더에 생성됩니다.

# 기술 스택
- HTML: Semantic HTML5 태그 사용
- CSS: Flexbox, CSS Grid, 반응형 디자인
- JavaScript: JSON-LD 구조화된 데이터 삽입
- Webpack: 번들링 및 자원 관리
- Yarn: 패키지 의존성 관리

# 사용된 주요 Webpack 플러그인 및 로더
- HTMLWebpackPlugin
    - HTML 파일을 기반으로 번들 파일 삽입.
- Style-Loader / CSS-Loader
    - CSS 파일을 JavaScript에서 사용할 수 있도록 처리.
- File-Loader
    - 이미지 파일을 번들링 및 최적화.
- HTML-Loader
    - HTML 파일 내 자원 링크를 Webpack과 연동.

# 주요 페이지 구성
- 홈: 블로그 소개
- 최근 기사: 최신 웹 개발 및 디자인 트렌드 기사
- 이미지 갤러리: 반응형 이미지 렌더링
- FAQ: 웹 개발 관련 자주 묻는 질문
- 소개: 개발자 정보 제공

# 문의
프로젝트 관련 문의는 아래 이메일로 연락 부탁드립니다.
- 이메일: jeonguk.hwang@hatchling.kr