$(document).ready(function(){

	//Price range slider
	var presence__itemslider = $('.presence__item-slider');

	presence__itemslider.slider({
		range: true,
		min: 0,
		max: 27000,
		values: [100, 13000],
		slide: function(event, ui) {
			$('#from').val(ui.values[0]);
			$('#to').val(ui.values[1]);
		}
	});
	$('#from').val(presence__itemslider.slider("values", 0));
	$('#to').val(presence__itemslider.slider("values", 1));

	//One Radio turned on at the moment 
	$('.presence-radio-button').click(function(){
		$(this).parent().siblings().children('.presence-radio-button').removeAttr('checked');
	});

	//Slide the sortby menu
	$('.sortby__select_field').click(function(){
		$('.sort-arrow').rotateToggle(180);
		
		$('.sortby__select_list').slideToggle('fast');
	});

	//Clicking on sortby__select menu item will copy it's text to .sortby__select_field
	$('.sortby__select_item').click(function(){
		$('.sortby__select_field').text($(this).text());
		$('.sortby__select_list').slideUp('fast');
	});

	//Choose view type
	var list_of_products_horizontal_thin = $('.list-of-products-horizontal-thin');
	var list_of_products_horizontal_wide = $('.list-of-products-horizontal-wide');
	var list_of_products_vertical = $('.list-of-products-vertical');

	$('.sortby__view_item-wide').click(function(){
		list_of_products_horizontal_wide.siblings().css("display", "none");
		list_of_products_horizontal_wide.css("display", "block");
	});

	$('.sortby__view_item-thin').click(function(){
		list_of_products_horizontal_thin.siblings().css("display", "none");
		list_of_products_horizontal_thin.css("display", "block");
	});

	$('.sortby__view_item-vertical').click(function(){
		list_of_products_vertical.siblings().css("display", "none");
		list_of_products_vertical.css("display", "block");
	});

	//Left block as ACCORDEON
	$('.accord-arrow').click(function(){
		//Accord-arrow rotation to 180 degrees
		$(this).rotateToggle(-180);
		$('.presence__item-block').slideToggle('fast');
	});

	//Sort-arrow rotation
	$('.sort-arrow').click(function(){
		$(this).rotateToggle(180);
	});

	//Image slider
	var small_image = $('.small-image');
	small_image.click(function(){
		small_image.parent().css('border', '1px solid #dee1e4');
		$(this).parent().css('border', '1px solid #ff6600');
		$(this).parent().parent().siblings().children().attr("src", $(this).attr("src"));
	});

	//Clear-filter action
	var clear_filter = $('.clear-filter')
	clear_filter.click(function(){
		$(this).siblings().children().find('input').removeAttr('checked');
	});
});


	//Plugins
(function( $ ){
	$.fn.rotateToggle = function(degree) {
		var angle,
       		transform = this.css('transform');

        if (transform == 'matrix(-1, -1.22465e-16, 1.22465e-16, -1, 0, 0)') {
        	angle = 0; 
        } else {
        	angle = -180;
        };

		this.css({'-ms-transform':'rotate(' + angle + 'deg)',
				  '-webkit-transform':'rotate(' + angle + 'deg)',
				  'transform':'rotate(' + angle + 'deg)'});
	};
})(jQuery);