$(document).ready(function () {
	
	jQuery.validator.addMethod("checkMask", function(value, element) {
		return /\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}/g.test(value);
});
	$("#contacts_form").validate({
		rules: {
			form_name: {
				required: true
			},
			
			form_secondname: {
				required: true
			},
			
			email: {
				required: true,
				email: true
			},
			
			number: {
				required: true,
				checkMask: true
			},
			
			text: {
				required: true
			},
		},
		
		messages:{
			form_name: {
				required: "Это поле обязательно для заполнения"
			},
			form_secondname: {
				required: "Это поле обязательно для заполнения"
			},
			email: {
				required: "Это поле обязательно для заполнения",
				email: "Введите корректный Email"
			},
			number: {
				required: "Это поле обязательно для заполнения",
				checkMask: "Введите телефонный номер в формате +375(__)___-__-__"
			},
			text: {
				required: "Это поле обязательно для заполнения"
			},
		},
	});
	
});