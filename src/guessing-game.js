class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.l=min;
        this.r=max;
    }

    guess() {
        return Math.round((this.l+this.r)/2);
    }

    lower() {
        this.r=Math.round((this.l+this.r)/2);
    }

    greater() {
        this.l=Math.round((this.l+this.r)/2);
    }
}

module.exports = GuessingGame;
