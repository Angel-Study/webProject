/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ko'] = {
		closeText: '�リ린',
		prevText: '�댁쟾��',
		nextText: '�ㅼ쓬��',
		currentText: '�ㅻ뒛',
		/*
		monthNames: ['1��(JAN)','2��(FEB)','3��(MAR)','4��(APR)','5��(MAY)','6��(JUN)',
		'7��(JUL)','8��(AUG)','9��(SEP)','10��(OCT)','11��(NOV)','12��(DEC)'],				
		monthNamesShort: ['1��(JAN)','2��(FEB)','3��(MAR)','4��(APR)','5��(MAY)','6��(JUN)',
		'7��(JUL)','8��(AUG)','9��(SEP)','10��(OCT)','11��(NOV)','12��(DEC)'],
		*/
		
		monthNames: ['1��','2��','3��','4��','5��','6��','7��','8��','9��','10��','11��','12��'],				
		monthNamesShort: ['1��','2��','3��','4��','5��','6��','7��','8��','9��','10��','11��','12��'],					
		dayNames: ['��','��','��','��','紐�','湲�','��'],
		dayNamesShort: ['��','��','��','��','紐�','湲�','��'],
		dayNamesMin: ['��','��','��','��','紐�','湲�','��'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear:true,		
		changeYear: true,
		yearRange: "-50:+20",
		yearSuffix: ' ��'};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
});