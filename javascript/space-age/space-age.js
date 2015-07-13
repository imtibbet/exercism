function SpaceAge(seconds) {
    this.earthYear = 31557600;
    this.seconds = seconds;
    this.onEarth = function() {
        return Math.round(100*this.seconds/this.earthYear)/100;
    }
    this.onMercury = function() {
        return Math.round(100*this.seconds/(this.earthYear*0.2408467))/100;
    }
    this.onVenus = function() {
        return Math.round(100*this.seconds/(this.earthYear*0.61519726))/100;
    }
    this.onMars = function() {
        return Math.round(100*this.seconds/(this.earthYear*1.8808158))/100;
    }
    this.onJupiter = function() {
        return Math.round(100*this.seconds/(this.earthYear*11.862615))/100;
    }
    this.onSaturn = function() {
        return Math.round(100*this.seconds/(this.earthYear*29.447498))/100;
    }
    this.onUranus = function() {
        return Math.round(100*this.seconds/(this.earthYear*84.016846))/100;
    }
    this.onNeptune = function() {
        return Math.round(100*this.seconds/(this.earthYear*164.79132))/100;
    }
}

module.exports = SpaceAge;