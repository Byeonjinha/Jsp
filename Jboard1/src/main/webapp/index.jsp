<%@page import="kr.co.jboard1.bean.MemberBean"%>
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%
       // 프로젝트 시작 처리 페이지 
      // index.jsp index.html 등의 파일은 web.xml에 등록되어잇다 시자페이지 
      // 실제서비스로 바뀌면 도메인으로 Jboard.co.kr로 바뀐다
      // url요청은 시작페이지가 있어야하고 uri는  user이후이다 
      // localhost:8181/Jboard1이 index.html을 잡는다 
      MemberBean mb =  (MemberBean) session.getAttribute("sessMember");
      if(mb == null){
              pageContext.forward("./user/login.jsp"); // forward는 절대경로가 안된다 
      }else{
              pageContext.forward("./list.jsp");
      }





%>