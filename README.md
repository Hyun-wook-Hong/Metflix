# Movie App 2021 - React.JS 실습

React JS Fundamentals Course (2021 Update!!)

## gh-pages 설치 및 사용법
1) 깃허브 클라우드 사용을 위한 gh-pages 설치
> terminal] npm install gh-pages

2) package.JSON에 homepage 항목(내 깃허브 IO 주소), deploy, predeploy 스크립트 추가  
> "homepage" : "https://Hyun-wook-Hong.github.io/Metflix"  
> "deploy": "gh-pages -d build", → build 폴더를 깃헙 클라우드에 upload  
> "predeploy": "npm run build"  → build 폴더 생성  
