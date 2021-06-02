//= ../libs/jquery.js
//= ../../node_modules/foundation-sites/dist/js/foundation.min.js
//= ../libs/jquery.validate.js

$(document).foundation();

$(document).ready(function() {
	var contactForm = $('#formContactFooter');
	contactForm.validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				emailfull: true
			},
			message: {
				required: true
			},
			password: {
				required: true
			},
			subject: {
				required: true
			}
		},
		messages: {
			name: 'Type your name',
			email: 'Type your email',
			message: 'Type your message',
			password: 'Type your password',
			subject: 'Type your subject'
		},
		submitHandler: function(form) {
			$(form).trigger('formvalid');
		}
	});

	jQuery.validator.addMethod('emailfull', function(value, element) {
		return (
			this.optional(element) ||
			/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(value)
		);
	});
	contactForm.on('submit', function(e) {
		e.preventDefault;
	});

		var contactForm = $('#formContact');
		contactForm.validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					emailfull: true
				},
				message: {
					required: true
				},
				password: {
					required: true
				},
				subject: {
					required: true
				}
			},
			messages: {
				name: 'Type your name',
				email: 'Type your email',
				message: 'Type your message',
				password: 'Type your password',
				subject: 'Type your subject'
			},
			submitHandler: function(form) {
				$(form).trigger('formvalid');
			}
		});
	
		jQuery.validator.addMethod('emailfull', function(value, element) {
			return (
				this.optional(element) ||
				/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(value)
			);
		});
		contactForm.on('submit', function(e) {
			e.preventDefault;
		});

	// contactForm.ajaxEmailSender({
	// 	domain: '',
	// 	autorizationToken:
	// 		'',
	// 	event: '',
	// 	supportEmail: ''
	// });
    
var e = $('.menu');
    
    e.find('a').click(function(){
        var but = $(this).parent();
        but.addClass('is-active');
        but.siblings().removeClass('is-active');
	 });

});

$(window).bind('resize load',function(){
	var c = $(this).width();
	if (c<640){
			$('#example-menu').addClass('mobile-version');
	}
	else {
		$('#example-menu').removeClass('mobile-version');
	}
	
});

$('.menu-icon').click(function(e){
	e.stopPropagation();
});

$('body').click(function(){
	$('.mobile-version').css('display','none');
	
});

$('.js-tab-trigger').on('click', function(){
	var tabName = $(this).data('tab'),
		tab = $('.js-tab-content[data-tab="'+tabName+'"]');

	$('.js-tab-trigger.active').removeClass('active');
	$(this).addClass('active');

	$('.js-tab-content').removeClass('active');
	tab.addClass('active');	
});

// var getAddress = {
// 	site: 'glareart.com', // Any site from the Company
// 	corp_id: '362', // Company ID
// 	country_code: 'UK',
// 	addressContainer: $('.addressContainer')
// };
