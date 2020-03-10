jQuery('#ball1').on('click',function(){
	jQuery('body').append('<h3 class="MY p-2 text-center mmmr bg-danger">25 points: Thank you for the honest answer! In the future I will try to improve my skill</h1>')
	jQuery('#thedf').slideUp();
});
jQuery('#ball2').on('click',function(){
	jQuery('body').append('<h3 class="MY p-2 text-center mmmr bg-danger">50 points: Thank you for the honest answer! In the future I will try to improve my skill</h1>')
	jQuery('#thedf').remove();
});
jQuery('#ball3').on('click',function(){
	jQuery('body').append('<h3 class="MY p-2 text-center mmmr bg-warning">75 points: Thank you for the honest answer! In the future I will try to improve my skill</h1>')
	jQuery('#thedf').remove();
});
jQuery('#ball4').on('click',function(){
	jQuery('body').append('<h3 class="MY p-2 text-center mmmr bg-success">90 points: ohh thank you teacher, 90 points are no longer jokes)</h1>')
	jQuery('#thedf').remove();
});
jQuery('#ball5').on('click',function(){
	jQuery('body').append('<h3 class="MY p-2 text-center mmmr bg-success">Thank you, I didn’t think that I would get 100 points</h1>')
	jQuery('#thedf').remove();
});
