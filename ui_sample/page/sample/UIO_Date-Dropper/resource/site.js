/*!
 * Bez v1.0.10-g5ae0136
 * http://github.com/rdallasgray/bez
 * 
 * A plugin to convert CSS3 cubic-bezier co-ordinates to jQuery-compatible easing functions
 * 
 * With thanks to Nikolay Nemshilov for clarification on the cubic-bezier maths
 * See http://st-on-it.blogspot.com/2011/05/calculating-cubic-bezier-function.html
 * 
 * Copyright 2011 Robert Dallas Gray. All rights reserved.
 * Provided under the FreeBSD license: https://github.com/rdallasgray/bez/blob/master/LICENSE.txt
*/
jQuery.extend({bezier:function(a){var b="bez_"+jQuery.makeArray(arguments).join("_").replace(".","p");if(typeof jQuery.easing[b]!="function"){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){var b=a,c=0,d;while(++c<14){d=f(b,0)-a;if(Math.abs(d)<.001)break;b-=d/g(b)}return b};return function(a){return f(h(a),1)}};jQuery.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}});



jQuery.fn.copy = function(){
	var
	doc = document,
	element = this[0];
	if (doc.body.createTextRange) {
		var
			range = document.body.createTextRange();
		range.moveToElementText(element);
		range.select();
	} else if (window.getSelection) {
		var
			selection = window.getSelection(),
			range = document.createRange();
		range.selectNodeContents(element);
		selection.removeAllRanges();
		selection.addRange(range);
	}
	
	document.execCommand("copy");
	
	if ( document.selection ) {
		document.selection.empty();
	}
	else if ( window.getSelection ) {
		window.getSelection().removeAllRanges();
	}
	
};

var
	is_mobile = function() {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
			return true;
		else
			return false;
	},
	cookie_consent = false,
	cookie_banner = $('.cookie'),
	cookie_do_consent = function() {
		
		if(!cookie_consent) {
		
			cookie_consent = true;
			cookie_banner.addClass('hide');
	
			$('script[type="application/x-suppress"]').each(function() {
				$(this).removeAttr('type');
				if(!$(this).data('src'))
					$('<script>')
					.html($(this).html())
					.appendTo('body');
				else
					$('<script>')
					.attr('src',$(this).data('src'))
					.appendTo('body');
			}); 
			
			var
				s = document.createElement('script');
				
			s.type = "text/javascript";
			s.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
			$('head').append(s);
			
			$('#adsense').html('<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6061234818437224" data-ad-slot="5715857597" data-ad-format="auto"></ins>');
	
			(adsbygoogle = window.adsbygoogle || []).push({});
		
		}
		
	},
	
	is_mac = function() {
		if (navigator.appVersion.indexOf("Mac")!=-1)
			return true;
		else
			return false;
	},
	is_ie = function() {
		var
			n = navigator.userAgent.toLowerCase();
		return (n.indexOf('msie') != -1) ? parseInt(n.split('msie')[1]) : false;
	},
	get_img_src = function(img, src, size) {
		var
			result = src;
		if (window.devicePixelRatio > 1 && src.indexOf("@1x.")>=0)
			result = src.replace("@1x.", "@2x.");
		img.onload = function(){
			$(img).css({
				opacity : 1,
				width : size,
				height : 'auto'
			})
		};
		img.src = result;    
	},
	get_rows_eq = function() {
		$('.row').each(function(i, el) {
			$(el).find('> [class^="col-"]').css('min-height','auto');
			if($(window).width()>992) {
				var
					h = [];
				$(el).find('> [class^="col-"]').each(function(i) {
					h.push($(this).outerHeight());
				});
				var
					_h = Math.max.apply(Math, h);
				$(el).find('> [class^="col-"]').css('min-height',_h);
			}
		});
	},
	cur_scroll = null,
	composer = {
		shadow : 32,
		shadowspread : 0,
		shadowopacity : 10,
		radius : 6,
		bold : true,
		color1: '#FD4741',
		color2: '#FFF',
		color3: '#4D4D4D',
		color4: '#FFF',
		width : 180
	},
	obj_drg = null;

cookie_banner.find('button').click(function(){
	cookie_do_consent();
});	
	
//unsupported browser message
if(is_ie()&&is_ie()<9) {
	$('body')
	.html('<div><img onload="get_img_src(this,\'src/imgs/unsupported@1x.jpg\',227)" /></div>')
	.css('background-color','#FFD71F')
	.find('div')
	.css({
		'position':'absolute',
		'top' : '50%',
		'left' : 0,
		'width' : '100%',
		'text-align' : 'center',
		'margin-top': -37
	});
}
else
	$('.wrapper').show();
	

//imgs preload
$(document).ready(function(){
	var
		imgs = $('img[onload]');
	imgs.each(function(i) {
		$(this).trigger('onload');            
	});
	cur_scroll = $(window).scrollTop();
});

//anchor scroll
$('header nav a[href*=#]').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var
			$target = $(this.hash);
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
		
		if ($target.length) {
			if ($(this).width() > 768)
				var
					target = $target.offset().top;
			else
				var
					target = $target.offset().top - 60;
			$('html,body').animate({scrollTop: target},800,$.bezier([0.7, 0, 0.175, 1]));
			return false;
		}
	}
});

var
	parallax = function() {
		$('[data-parallax]').each(function(index, element) {
			$(this).css({'top':'auto'});
			if($(window).width()>768)
				var
					s = $(window).scrollTop();
			else
				var
					s = $(window).scrollTop()/2;
			$(this).css({
				top : -((s-$(window).height())*$(this).data('parallax'))
			});
		});
	};


//events on window scroll and resize
$(window)
.scroll(function(){
	
	if(!cookie_consent&&cur_scroll>=0&&cur_scroll!=$(this).scrollTop())
		cookie_do_consent();
	
	var
		_w = $(this);
		
		
	if(_w.scrollTop()>100)
		$('.cssda-badge').addClass('show');
	else
		$('.cssda-badge').removeClass('show');
		
	if(_w.scrollTop()>$('header').outerHeight())
		$('.btn-dwn').addClass('visible');
	else
		$('.btn-dwn').removeClass('visible');
	
	if(_w.scrollTop()<$('main section:first').offset().top)
		$('header nav a').removeClass('current');
		
	if(_w.width()>768)
		parallax();
		
	$('main > section').each(function() {
		var
			el = $(this);
		if(_w.scrollTop()>=(el.offset().top-64)&&$(this).scrollTop()<el.offset().top+el.outerHeight()) {
			var
				targetid = el.attr('id'),
				target = $('header nav a[href="#'+targetid+'"]');
				
			if(target.length) {
				$('header nav a').removeClass('current');
				target.addClass('current');
			}
		}
	});
	$('.fxsc').each(function() {
		if(_w.scrollTop()>=$(this).offset().top-_w.height())
			$(this).addClass('on');
		else
			$(this).removeClass('on');
	});
})
.resize(function(e) {
	get_rows_eq();
});  


//lightbox opener
$('.target').click(function(e){
	e.preventDefault();
	var
		el = $(this),
		target = $(el.attr('href')),
		o = function() {
			if(!el.hasClass('target-fixed'))
				target
				.find('.w')
				.css({
					top : el.offset().top + el.outerHeight() / 2,
					left : el.offset().left + el.outerWidth()
				});
			else {
				target.addClass('fixed');
				$('body').addClass('no-scroll');
			}
		};
		
	o();
	target.addClass('show');
});

//slide list
$('ul.slider').each(function() {
	var
		el = $(this),
		get_hs = function() {
			var
				hs = [];
			el.find('li').css('height','auto');
			el.find('li').each(function() {
				hs.push($(this).height());
			});
			var
				_h = Math.max.apply(Math, hs);

			el.find('li').height(_h);
			el.find('.o').height(_h);
		},
		get_ab = function() {
			el.find('li.current').prevAll('li').addClass('bfr');
			el.find('li.current').nextAll('li').addClass('aft');
			
			el.find('.lt,.rt').removeClass('hide');
			if(!el.find('li.current').prev('li').length)
				el.find('.lt').addClass('hide');
			if(!el.find('li.current').next('li').length)
				el.find('.rt').addClass('hide');
			
		};
		
	el.wrapInner('<div class="o"></div>');
	
	$('<div class="n lt"></div><div class="n rt"></div>')
	.prependTo(el);
	
	el
	.find('.n')
	.click(function(){
		if($(this).hasClass('lt'))
			var
				target = el.find('li.current').prev('li');
		else
			var
				target = el.find('li.current').next('li');
				
		if(target.length) {
			el.find('li').removeClass('bfr aft current');
			target.addClass('current');
			get_ab();
		}
			
	});
	
	el.find('li:first').addClass('current');
	
	get_ab();
	get_hs();
	
	$(window).resize(function() {
		get_hs();
	});
	
});

//lightbox
$('.abs-box').each(function(i, el) {
	var
		els = $(el).find('.o,h3 b'),
		c = function(){
			$(el).removeClass('show');
			$(el).find('li').removeClass('show');	
			if($('body').hasClass('no-scroll'))
				$('body').removeClass('no-scroll');
		};
	els.click(function(){
		c();
	});
	$(el)
	.find('ul > li')
	.click(function(){
		$(this).toggleClass('show');	
	})
	$(this).find('.sub').click(function(e){
		e.stopPropagation();
	})
	
});
	
//theme genetator
$('.sls').each(function(i, el) {
	$(el).find('.next,.prev').click(function(){
		if($(this).hasClass('next'))
			var
				target = $('.sl.current').next('.sl');
		else
			var
				target = $('.sl.current').prev('.sl');
				
		if(target.length) {
			if($(this).hasClass('next')) {
				$('.sl.current').toggleClass('current bfr');
				target.toggleClass('current aft');
			}
			else {
				$('.sl.current').toggleClass('current aft');
				target.toggleClass('current bfr');
			}
		}
	});
});

//palette choser
$('.pal div').click(function(){
	$('.pal div').removeClass('active');
	$(this).addClass('active');
	$('.inputs input').hide();
	$('.inputs input[name='+$(this).data('target')+']').show();
	$('.inputs').addClass('show');
});
$('.inputs button').click(function(){
	$('.inputs').removeClass('show');
	$('.pal div').removeClass('active');
});
$('.inputs input').keyup(function(){
	$('.pal div[data-target='+$(this).attr('name')+']').css('background-color',$(this).val());
});

$('.hamburger').click(function(){
	$(this).toggleClass('active');
	$('.nav-primary ul').toggleClass('active');
});
	
	
//theme generator

if(is_mobile())
	var
		ui = {
			i : 'touchstart',
			m	: 'touchmove',
			e : 'touchend'
		}
else
	var
		ui = {
			i : 'mousedown',
			m	: 'mousemove',
			e : 'mouseup'
		}
			
$(document).on(ui.i,'.range .cursor',function(){
	obj_drg = $(this);
});
$(document)
.on(ui.m,function(e){
	if(obj_drg) {
		
		e.preventDefault();
		
		var
			r = obj_drg.closest('.range'),
			input = $('input[data-id='+r.attr('id')+']'),
			o = is_mobile() ? e.originalEvent.touches[0].pageX : e.pageX,
			o = Math.round(o - r.offset().left),
			min = parseInt(input.prop('min')) || 0,
			max = parseInt(input.prop('max')) || 64;
				
		if(o <= 0)
			o = 0;
		if(o >= (r.width()-obj_drg.width()))
			o = (r.width()-obj_drg.width());
			
		obj_drg
		.css({
			left : o
		});
		
		var
			p = Math.round( o * 100 / ( r.width()-obj_drg.width())),
			v = Math.round( p * (max-min) / 100) + min;
			
		input
		.val(v)
		.change();
				
	}
})
.on(ui.e,function(e){
	obj_drg = null;
});


//pre code
$('.pre').each(function() {
	var
		el = $(this);
	el
	.wrapInner('<div></div>')
	.append('<b></b>');
	
	el.find('b').click(function(){
		
		el
		.find('div')
		.copy();
		
		el.find('b').addClass('copied');
		setTimeout(function(){
			el.find('b').removeClass('copied');
		},2000);
		
	});
	
});

//input booster
$(':input[data-type]')
.each(function(i) {
	
	var	
		_parent = $(this).closest('label,fiedlset'),
		input = $(this),
		input_id = 'i' + i;
	
	_parent.addClass('boost');
		
	input
	.attr('data-id',input_id);
	
	//range
	if(input.data('type')=='range') {
		
		input
		.hide();
		
		var
			min = parseInt(input.prop('min')) || 0,
			max = parseInt(input.prop('max')) || 64;
	
		$('<div>', {
			class: 'range',
			id: input_id,
			html: $('<div>', {
				class: 'cursor',
				html: $('<div>',{
					html : min
				})
			})
		})
		.insertAfter(input);
		
		var
			_input = $('#' + input_id),
			get_value = function(){
				
				var
					p = ((input.val() - min) * 100) / (max - min),
					o = p * (_input.width() - _input.find('.cursor').width()) / 100;
				
				if(!obj_drg)
					_input
					.find('.cursor')
					.css({
						left : o
					});
				
				_input
				.find('.cursor div')
				.html(input.val())
					
			};
			
		input.
		change(function(){
			get_value();
		})
		.focus(function(){
			_input.addClass('focus');
		})
		.blur(function(){
			_input.removeClass('focus');
		})
		
		get_value();
			

	}
	
	//radio & checkbox
	else if(input.data('type')=='choose') {
		
		input
		.hide();
		
		var
			_inputClass;
			
		if(input.data('filter')==1)
			_inputClass = 'switch';
		else
			if(input.is(":radio"))
				_inputClass = 'radio'
			else
				_inputClass = 'checkbox'
		
		$('<div>', {
			class: _inputClass,
			id: input_id
		})
		.insertAfter(input);
		
	}
	
	input.change();
	
});


$('.css :input')
.on('change keyup',function(){
	
	var
		name = $(this).attr('name'),
		value = $(this).val();
		
	if(name) {
		if($(this).is(':radio,:checkbox'))
			if($(this).is(':checked'))
				value = true;
			else
				value = false;
		
		composer[name] = value;
		
		$('.picker-sample .picker-wrap').css({
			'border-radius' : composer.radius+'px'
		});
		$('.picker-sample').css({
			'border-radius' : composer.radius+'px',
			'box-shadow' : '0 0 '+composer.shadow+'px '+composer.shadowspread+'px rgba(0,0,0,'+(composer.shadowopacity/100)+')'
		});
		var
			arr_rad = (composer.radius>4) ? 4 : composer.radius;	
		$('.picker-sample .picker-arrow').css({
			'border-top-left-radius' : arr_rad+'px'
		});
		
		if(composer.bold)
			$('.picker-sample .picker-wrap div:nth-of-type(2)').css('font-weight','bold');
		else
			$('.picker-sample .picker-wrap div:nth-of-type(2)').css('font-weight','normal');
			
		$('.picker-sample .picker-wrap div:nth-of-type(1), .picker-sample .picker-arrow, .picker-sample .picker-wrap div:nth-of-type(4)').css('background-color',composer.color1);
		$('.picker-sample span').css('color',composer.color1);
		$('.picker-sample .picker-wrap').css('background-color',composer.color2);
		$('.picker-sample').css('color',composer.color3);
		$('.picker-sample .picker-wrap div:nth-of-type(1)').css('color',composer.color4);
		$('.picker-sample').width(composer.width);
		
	}
});


if(!is_mac) {
	
	if(window.addEventListener)
		window.addEventListener('DOMMouseScroll', wheel, false);
	
	window.onmousewheel = document.onmousewheel = wheel;
	
	var
		wheel = function(event) {
			var delta = 0;
			if (event.wheelDelta) delta = event.wheelDelta / 120;
			else if (event.detail) delta = -event.detail / 3;
			
			handle(delta);
			if (event.preventDefault) event.preventDefault();
			event.returnValue = false;
		},
		go_up = true,
		end = null,
		interval = null,
		handle = function(delta) {
			var
				animation_interval = 20,
				scrll_speed = 6;
		
			if (end == null) {
				end = $(window).scrollTop();
			}
			end -= 20 * delta;
			go_up = delta > 0;
		
			if (interval == null) {
				interval = setInterval(function () {
					var
						scrll_top = $(window).scrollTop(),
						step = Math.round((end - scrll_top) / scrll_speed);
					if (scrll_top <= 0 || scrll_top >= $(window).prop("scrollHeight") - $(window).height() || go_up && step > -1 || !go_up && step < 1 ) {
						clearInterval(interval);
						interval = null;
						end = null;
					}
					$(window).scrollTop(scrll_top + step );
				}, animation_interval);
			}
		};
}

$('.dwn').click(function() {
	$.get("../../../assets/counter.php");
});

$('.social a').click(function(e){
	e.preventDefault();
	window.open($(this).attr('href'), '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
});

$('input.datedropper').dateDropper();

