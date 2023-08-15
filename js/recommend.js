import Lecture from "./component/lecture.js";
const recommend_wrapper = document.querySelector('.recommend');
const daily_wrapper = document.querySelector('.daily');
const internet_wrapper = document.querySelector('.internet');
const mobile_wrapper = document.querySelector('.mobile');


recommend_wrapper.append(Lecture("로그인/회원가입","로그인과 회원가입 기능에 대한 설명.",["#인터넷"],true, "/content/login"))
daily_wrapper.append(Lecture("키오스크","키오스크 기본 사용법 및 실습",["#일상"],true, "/content/kiosk"))
internet_wrapper.append(Lecture("로그인/회원가입","로그인과 회원가입 기능에 대한 설명",["#인터넷"],true, "/content/login"))
mobile_wrapper.append(Lecture("휴대폰 사용 (기초)","안드로이드 휴대폰 기본 사용 및 설정방법 (기초)",["#모바일"],true, "/content/phone"))
mobile_wrapper.append(Lecture("카카오톡 사용 (기초)","카카오톡 기본 기능및 설정에 대한 설명.",["#모바일"],true, "/content/kakao"))


