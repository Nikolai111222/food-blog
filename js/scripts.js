var k = 0;

$('.menu_icon').click(function() {

	if (k == 0) {
		$('.hidden_menu').css({
			opacity: '1',
			top: '351px'
		});
		k=k+1;
	} else {
		$('.hidden_menu').css({
			opacity: '0',
			top: '294px'
		});
		k=k-1;
	}
});

// $('.post_desc').each(function() {
//   if ($(this).text().length > 5) {
//     $(this).text( $(this).text().substring(0, 5) + '…');
//   }
// });