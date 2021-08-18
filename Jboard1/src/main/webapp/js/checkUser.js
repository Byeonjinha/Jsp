/**
 *  회원가입 사용자 중복체크
 */
//정규표현식(Regular Expression)
var reUid = /^[a-z]+[a-z0-9]{3,10}$/;
var rePass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/;
var reName = /^[가-힣]{2,10}$/;
var reNick = /^[a-z]+[a-z0-9]{3,10}$/;
//최종 우효성 검사에 사용될 상태변수
var isUidOk = false;
var isPassOk = false;
var isNameOk = false;
var isNickOk = false;
$(document).ready(function() {

	// 아이디 중복 체크 
	$('input[name=uid]').focusout(function() {

		var uid = $(this).val();

		$.ajax({
			url: '/Jboard1/user/proc/checkUid.jsp?uid=' + uid,
			type: 'get',
			dataType: 'json',
			success: function(data) {

				if (data.result == 1) {
					$('.resultId').css('color', 'red').text('이미 사용중인 아이디 입니다.');
					isUidOk = false;
				} else {
					//아이디 유효성검사
					if (reUid.test(uid)) {
						$('.resultId').css('color', 'green').text('사용 가능한 아이디 입니다.');
						isUidOk = true;
					} else {
						$('.resultId').css('color', 'red').text('아이디는 영문 소문자, 숫자 조합 3~16까지 입니다');
						isUidOk = false;
					}
				}
			}
		});
	});

	// 닉네임 중복 체크 
	$('input[name=nick]').focusout(function() {

		var uid = $(this).val();

		$.ajax({
			url: '/Jboard1/user/proc/checkNick.jsp?uid=' + uid,
			type: 'get',
			dataType: 'json',
			success: function(data) {

				if (data.result == 1) {
					$('.resultNick').css('color', 'red').text('모르겟다옹');
					isNickOk = false;
				} else {
					//닉네임 유효성 검사
					if(reNick.test(nick)){
						$('.resultNick').css('color','green').text('사용 가능한 닉네임 입니다.');
						isNickOk = true;
					}else{
						$('.resultNick').css('color', 'red').text('사용 불가능한 닉네임입니다.');
						isNickOk=false
					}
				}
			}
		});
	});
	// 이메일 중복 체크 
	$('input[name=email]').focusout(function() {

		var uid = $(this).val();

		$.ajax({
			url: '/Jboard1/user/proc/checkEmail.jsp?uid=' + uid,
			type: 'get',
			dataType: 'json',
			success: function(data) {

				if (data.result == 1) {
					$('.resultEmail').css('color', 'red').text('이미 사용중인 이메일 입니다.');
				} else {
					$('.resultEmail').css('color', 'green').text('사용 가능한 이메일 입니다.');
				}
			}
		});
	});
	// 휴대폰 중복 체크 
	$('input[name=hp]').focusout(function() {

		var uid = $(this).val();

		$.ajax({
			url: '/Jboard1/user/proc/checkHp.jsp?uid=' + uid,
			type: 'get',
			dataType: 'json',
			success: function(data) {

				if (data.result == 1) {
					$('.resultHp').css('color', 'red').text('이미 사용중인 휴대폰 번호 입니다.');
				} else {
					$('.resultHp').css('color', 'green').text('사용 가능한 휴대폰 번호 입니다.');
				}
			}
		});
	});

	// 비밀번호 유효성체크
			// 비밀번호 중복 체크
			$('input[name=pass2]').focusout(function(){
				
				var pass1 = $('input[name=pass1]').val();
				var pass2 = $('input[name=pass2]').val();
				
				if(pass1 == pass2){//자바스크립트에서는 문자열 가능함 ==
				
					if(rePass.test(pass2)){
						$('.resultPass').css('color', 'green').text('비밀번호가 일치 합니다.');							
						isPassOk = true;
					}else{
						$('.resultPass').css('color', 'red').text('비밀번호는 영문,숫자조합 최소 4이상 이어야 합니다.');
						isPassOk = false;
					}
					
					
				}else{
					$('.resultPass').css('color', 'red').text('비밀번호가 일치 하지 않습니다.');
					isPassOk = false;
				}
				
			});
	// 이름 유효성 검사
			$('input[name=name]').focusout(function(){
				
				var name = $(this).val();
				
				if(reName.test(name)){
					$('.resultName').text(' '); 
					isNameOk = true;
				}else{
					$('.resultName').css('color', 'red').text('이름이 유효하지 않습니다.');
					isNameOk = false;
				}				
			});
			
});		
