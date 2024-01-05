import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 불러오는명칭약자 from '모듈 및 가져오는 파일 경로';
// import 뒤 약자의 이름 첫 글자는 반드시 대문자로 작성해야한다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
  리액트가 개발될 땐 리액트 생성 폴더 "src" 폴더 내에서만 개발이 시작되고 종료된다.
  리액트 개발이 종료된 후 -> index.js의 root.render에 의해서
  React.StrictMode 엄격모두 기준 App js에서 제작한 개발결과가
  "Public" index.html 파일의 #root로 전달되어 웹이 최종적으로 사용자들에게 서비스된다.
*/