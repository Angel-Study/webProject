var promoTick;
var promoTick2;
var _INTERVAL_TIME = 5000;

$(document).ready(function() {


// ---------------- �듯빀硫붿씤

	// 硫붿씤 �꾨줈紐⑥뀡
	$("#touchSlider_promo").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_promo").next().find(".btn_promo_prev"),
		btn_next : $("#touchSlider_promo").next().find(".btn_promo_next"),
		paging : $("#touchSlider_promo").next().next().find(".btn_promo_page"),
		counter : function (e) {

			if(promoTick)
				clearTimeout(promoTick);
			promoTick = setTimeout(function(){
					$(".btn_promo_next").click();
			}, _INTERVAL_TIME);

			$("#touchSlider_promo").next().next().find(".btn_promo_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 �곷떒諛곕꼫 �ㅽ듃�뚰겕
	$("#touchSlider_top_network").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_top_network").next().find(".btn_top_network_prev"),
		btn_next : $("#touchSlider_top_network").next().find(".btn_top_network_next"),
		paging : $("#touchSlider_top_network").next().next().find(".btn_top_network_page"),
		counter : function (e) {
			$("#touchSlider_top_network").next().next().find(".btn_top_network_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 梨�
	$("#touchSlider_book").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book").next().find(".btn_book_next"),
		paging : $("#touchSlider_book").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	
	
	// 硫붿씤 �덈줈�섏삩 梨�-�듯빀
	$("#touchSlider_book_new_HBIT").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_new_HBIT").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_new_HBIT").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_new_HBIT").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_new_HBIT").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 �덈줈�섏삩 梨�-�쒕튆誘몃뵒��
	$("#touchSlider_book_new_HM").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_new_HM").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_new_HM").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_new_HM").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_new_HM").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	
	// 硫붿씤 �덈줈�섏삩 梨�-�쒕튆�꾩뭅�곕�
	$("#touchSlider_book_new_HA").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_new_HA").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_new_HA").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_new_HA").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_new_HA").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	
	// 硫붿씤 �덈줈�섏삩 梨�-�쒕튆鍮꾩쫰
	$("#touchSlider_book_new_HB").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_new_HB").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_new_HB").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_new_HB").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_new_HB").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 �덈줈�섏삩 梨�-�쒕튆�쇱씠��
	$("#touchSlider_book_new_HL").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_new_HL").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_new_HL").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_new_HL").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_new_HL").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 �덈줈�섏삩 梨�-由ъ뼹����
	$("#touchSlider_book_new_HR").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_new_HR").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_new_HR").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_new_HR").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_new_HR").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 �덈줈�섏삩 梨�-硫붿씠��
	$("#touchSlider_book_new_MK").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_new_MK").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_new_MK").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_new_MK").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_new_MK").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 �덈줈�섏삩 梨�-�쒕튆�먮�
	$("#touchSlider_book_new_HE").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_new_HE").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_new_HE").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_new_HE").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_new_HE").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	
	
	// 硫붿씤 踰좎뒪�� 梨�-�듯빀
	$("#touchSlider_book_best_HBIT").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best_HBIT").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_best_HBIT").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_best_HBIT").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_best_HBIT").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 踰좎뒪�� 梨�-�쒕튆誘몃뵒��
	$("#touchSlider_book_best_HM").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best_HM").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_best_HM").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_best_HM").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_best_HM").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	
	// 硫붿씤 踰좎뒪�� 梨�-�쒕튆�꾩뭅�곕�
	$("#touchSlider_book_best_HA").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best_HA").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_best_HA").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_best_HA").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_best_HA").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	
	// 硫붿씤 踰좎뒪�� 梨�-�쒕튆鍮꾩쫰
	$("#touchSlider_book_best_HB").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best_HB").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_best_HB").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_best_HB").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_best_HB").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 踰좎뒪�� 梨�-�쒕튆�쇱씠��
	$("#touchSlider_book_best_HL").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best_HL").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_best_HL").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_best_HL").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_best_HL").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 踰좎뒪�� 梨�-由ъ뼹����
	$("#touchSlider_book_best_HR").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best_HR").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_best_HR").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_best_HR").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_best_HR").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 踰좎뒪�� 梨�-硫붿씠��
	$("#touchSlider_book_best_MK").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best_MK").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_best_MK").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_best_MK").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_best_MK").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 硫붿씤 踰좎뒪�� 梨�-�쒕튆�먮�
	$("#touchSlider_book_best_HE").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best_HE").next().find(".btn_book_prev"),
		btn_next : $("#touchSlider_book_best_HE").next().find(".btn_book_next"),
		paging : $("#touchSlider_book_best_HE").next().next().find(".btn_book_page"),
		counter : function (e) {
			$("#touchSlider_book_best_HE").next().next().find(".btn_book_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	
	
	
	
	

	
	// 硫붿씤 �ㅽ듃�뚰겕
	$("#touchSlider_network").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_network").next().find(".btn_network_prev"),
		btn_next : $("#touchSlider_network").next().find(".btn_network_next"),
		paging : $("#touchSlider_network").next().next().find(".btn_network_page"),
		counter : function (e) {
			$("#touchSlider_network").next().next().find(".btn_network_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});







// ---------------- 媛� 釉뚮옖��

	// 釉뚮옖�� 硫붿씤 �꾨줈紐⑥뀡
	$("#touchSlider_brand_media_promo").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_brand_media_promo").next().find(".btn_promo_prev"),
		btn_next : $("#touchSlider_brand_media_promo").next().find(".btn_promo_next"),
		paging : $("#touchSlider_brand_media_promo").next().next().find(".btn_promo_page"),
		counter : function (e) {

			if(promoTick)
				clearTimeout(promoTick);
			promoTick = setTimeout(function(){
					$(".btn_promo_next").click();
			}, _INTERVAL_TIME);

			$("#touchSlider_brand_media_promo").next().next().find(".btn_promo_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
		
	// 釉뚮옖�� 硫붿씤 �곷떒諛곕꼫 �ㅽ듃�뚰겕
	$("#touchSlider_brand_top_network").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_brand_top_network").next().find(".btn_brand_top_network_prev"),
		btn_next : $("#touchSlider_brand_top_network").next().find(".btn_brand_top_network_next"),
		paging : $("#touchSlider_brand_top_network").next().next().find(".btn_brand_top_network_page"),
		counter : function (e) {
			$("#touchSlider_brand_top_network").next().next().find(".btn_brand_top_network_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// 釉뚮옖�� 硫붿씤 �곷떒諛곕꼫 踰좎뒪�몄���
	$("#touchSlider_book_best").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_best").next().find(".btn_book_best_prev"),
		btn_next : $("#touchSlider_book_best").next().find(".btn_book_best_next"),
	});
	
	// 釉뚮옖�� 硫붿씤 �곷떒諛곕꼫 �쒕━利�
	$("#touchSlider_book_series").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_book_series").next().find(".btn_book_best_prev"),
		btn_next : $("#touchSlider_book_series").next().find(".btn_book_best_next"),
	});
	
	// �꾩뭅�곕� 援먯닔�꾩슜
	$("#touchSlider_academy_professor").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_academy_professor").next().find(".btn_promo_prev"),
		btn_next : $("#touchSlider_academy_professor").next().find(".btn_promo_next"),
		paging : $("#touchSlider_academy_professor").next().next().find(".btn_promo_page"),
		counter : function (e) {

			if(promoTick)
				clearTimeout(promoTick);
			promoTick = setTimeout(function(){
					$(".btn_promo_next").click();
			}, _INTERVAL_TIME);

			$("#touchSlider_academy_professor").next().next().find(".btn_promo_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	// �꾩뭅�곕� 援먯닔�꾩슜 諛곕꼫
	$("#touchSlider_academy_professor_banner").touchSlider({
		speed : 250,
		flexible : true,
		btn_prev : $("#touchSlider_academy_professor_banner").next().find(".btn_promo_prev2"),
		btn_next : $("#touchSlider_academy_professor_banner").next().find(".btn_promo_next2"),
	});
	
});














//遺�媛��뺣낫�낅젰�� �쇰컲�꾪솕 �レ옄 泥댄겕 
function CheckPass_num(obj){			
	var reg = /^\d+$/;					
	obj_val_result =  reg.test($("#"+obj).val());				
	if(obj_val_result == false){
		alert("�レ옄留� �낅젰�좎닔 �덉뒿�덈떎.");
		$("#"+obj).val('');
		$("#"+obj).focus();			
	}
}