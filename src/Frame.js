'use strict'

function Frame(rolls) {
	this.rolls = rolls;
	this.MAXIMUM_ROLL = 10;
};

Frame.prototype.total = function(framePlusOne) {
	return this.rollTotal() + this.bonusTotal(framePlusOne);
};

Frame.prototype.rollTotal = function() {
	return this.rolls.reduce(function(x, y) {
		return x + y;
	});
};

Frame.prototype.bonusTotal = function(framePlusOne) {
	if (framePlusOne == undefined) {
		return 0;
	} else if (this.isSpare) {
		return framePlusOne.rolls[0];
	}
};

Frame.prototype.isSpare = function() {
	return this.rolls == this.MAXIMUM_ROLL
};