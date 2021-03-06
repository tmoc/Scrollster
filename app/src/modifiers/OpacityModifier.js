define(function(require, exports, module) {
    'use strict';
    var Modifier       = require('famous/core/Modifier');

    function OpacityModifier(scrollStart, scrollStop, curveFn, fadeOut) {
        this.fadeOut = fadeOut === true ? true : false;
        this.initialOpacity = fadeOut === true ? 1 : 0;
        this.finalOpacity = fadeOut === true ? 0 : 1;
        this.scrollStart = scrollStart;
        this.scrollStop = scrollStop;
        this.scrollRange = scrollStop - scrollStart;
        this.curveFn = curveFn;
        this.opacity = this.initialOpacity;
        _makeModifier.call(this);
        Modifier.call(this, this.modifier);
    }

    OpacityModifier.prototype = Object.create(Modifier.prototype);
    OpacityModifier.prototype.constructor = OpacityModifier;

    OpacityModifier.prototype.checkAndUpdate = function(scrollPosition, delta) {
        if (scrollPosition > this.scrollStart &&
            scrollPosition < this.scrollStop) {

            if (this.fadeOut) {
                this.opacity = 1 - this.curveFn((scrollPosition - this.scrollStart) / this.scrollRange);
            } else {
                this.opacity = this.curveFn((scrollPosition - this.scrollStart) / this.scrollRange);
            }

        } else if (scrollPosition <= this.scrollStart) {
            this.opacity = this.initialOpacity;
        } else if (scrollPosition >= this.scrollStop) {
            this.opacity = this.finalOpacity;
        }
    };

    function _makeModifier() {
        this.modifier = {
            opacity: function() {
                return this.opacity;
            }.bind(this)
        };
    }

    module.exports = OpacityModifier;
});
