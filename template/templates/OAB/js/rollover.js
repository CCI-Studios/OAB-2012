var CCI = window.CCI || {};
CCI.Rollover = new Class({
	Implements: Options,
	
	options: {
		normal_text: '_normal.',
		over_text: '_over.'
	},

	initialize: function(selector, options) {
		this.setOptions(options);
		var images = $$(selector);
		
		var i, _len;
		for (i = 0, _len = images.length; i < _len; i++) {
			this._setupImage(images[i]);
		}
		
	},
	
	_setupImage: function(image) {
		var normal, over, index;
		
		normal = image.src;
		index = normal.lastIndexOf(this.options.normal_text);
		if (index === -1) {
			return;
		}
			
		over = normal.substr(0, index) +
			this.options.over_text +
			normal.substr(index + this.options.normal_text.length);
		
		image.addEvents({
			mouseenter: function() {
				image.src = over;
			},
			mouseleave: function() {
				image.src = normal;
			}
		});
	}
	
});