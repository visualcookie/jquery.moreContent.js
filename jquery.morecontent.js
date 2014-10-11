/**!
 * jquery.moreContent.js
 * [description] SEO friendly hiding of long texts
 * [version] 1.0.0
 * [author] Dean Hidri
 * [website] http://visualcookie.me/
 * [repository] https://github.com/visualcookie/jquery.moreContent.js
 * [license] The MIT License (MIT)
 */
(function($) {

	$.fn.moreContent = function(params) {
		this.each(function(index, el) {
			var options 				= $.extend({}, $.fn.moreContent.options, $(el).data());
			options 					= $.extend({}, options, params);
			options.instance 			= $(el);
			options 					= $.fn.moreContent.init(options);
		});
		return this;
	};

	$.fn.moreContent.init = function(options) {
		options.button 					= $('<button class="'+ options.btnClass +'"/>').text(options.btn);
		options.wrapper					= $('<div class="mc-wrapper"/>');
		options.instance.autoHeight		= options.instance.css('height', 'auto').height();

		// make it wrap
		options.instance.wrap(options.wrapper);

		// insert button after element
		options.button.insertAfter(options.instance);

		// set default height for element
		options.instance.css({
			height: options.height,
			overflow: 'hidden'
		});

		// on click perform $.fn.moreContent.click
		options.button.click(function(e) {
			$.fn.moreContent.click(options)
		});

		return options;
	};
	$.fn.moreContent.click = function(options) {
		if (!options.instance.hasClass('active')) {
			options.instance.velocity(
			{
				height: options.instance.autoHeight
			},
			{
				duration: options.duration,
				complete: function() {
					options.instance.addClass('active');
					options.button.addClass('active').text(options.btnActive);
				}
			}, 'ease-in-out');
		} else {
			options.instance.velocity(
			{
				height: options.height
			},
			{
				duration: options.duration,
				complete: function() {
					options.instance.removeClass('active');
					options.button.removeClass('active').text(options.btn);
				}
			}, 'ease-in-out');
		}
	};

	// default options
	$.fn.moreContent.options = {
		height: 160,
		duration: 1000,
		btn: 'Open',
		btnActive: 'Close',
		btnClass: 'btn-default'
	}

})(jQuery);
