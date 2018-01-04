

function hide_about () {
	$("#about_text").hide(1000, function() {
		$('#hide').hide();
		$('#show').show();
		$('#about').addClass('about_hide');
		$('#logo_show').addClass('logo_show');
	});
}

function show_about () {
	$("#about_text").show(3000, function() {
		$('#hide').show();
		$('#show').hide();
		$('#about').removeClass('about_hide');
		$('#logo_show').removeClass('logo_show');
	});
}

$(document).ready (function () {
	$('#hide').bind ("click", hide_about);
	$('#show').bind ("click", show_about);
});