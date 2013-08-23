$(function () {
    $('[data-toggle=offcanvas]').click(function() {
//		alert('text');
		$('.row-offcanvas').toggleClass('active');
		$('#sidebar').show();
		console.log($('#sidebar'));
	});
});
