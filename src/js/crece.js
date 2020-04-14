const btnPopOver = document.querySelectorAll(".btnPopOver");



var options = {
    delay: {
        show: 50,
        hide: 50
    },
    trigger: 'manual',
    html: true
};
var $popover = $(btnPopOver).popover(options);

$popover.on('click', function() {
    var self = this;

    clearTimeout(self.timeout);
    self.hoverState = 'in';

    self.timeout = setTimeout(function() {
        if (self.hoverState == 'in') {
            $(self).popover("show");

            $(".popover, .popover *").on('mouseover', function() {
                clearTimeout(self.timeout);
            });

            $(".popover").on('mouseleave', function() {
                self.timeout = setTimeout(function() {
                    if (self.hoverState == 'out') {
                        $(self).popover('hide');
                    }
                }, options.delay.hide);
            });
        }
    }, options.delay.show);
}).on('mouseleave', function(event) { // This is leaving the triggering element
    var self = this;

    clearTimeout(self.timeout);
    self.hoverState = 'out';

    self.timeout = setTimeout(function() {
        if (self.hoverState == 'out') {
            $(self).popover('hide');
        }

    }, options.delay.hide);
});