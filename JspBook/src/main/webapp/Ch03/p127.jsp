<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<%--폼으로부터 넘어온 데이터의 한글이 깨지지 않게 처리 --%>
<% request.setCharacterEncoding("utf-8");%>
<h2> if-else 문 예제-좋아하는 색 선택</h2>

<%--입력한 값을 얻어내서 처리 --%>
<% //	p126.jsp의 10, 14라인의 파라미터 변수 name과 color 의 값을 얻어냄
String name=request.getParameter("name");
String color=request.getParameter("color");



String selectColor = ""; // 지역 변수 초기화
//if문을 사용해서 color 파라미터 변수로 부터 얻어낸 값을 가지고,
//selectColor 변수에 넣을 값을 결정
if (color.equals("blue")) {//두개의 문자열이 같은가를 비교
	selectColor = "파랑색";
} else if (color.equals("green")){
	selectColor = "초록색";
} else if (color.equals("red")){
	selectColor = "빨강색";
}else{
		selectColor = "기타색";
		}
%>
<%-- 결과 출력--%>
<%=name%>님이 선택한 색은 <%=selectColor%>입니다.<p>
선택한 색:<br>


<img src="<%=color+".jpg"%>"border="0" >