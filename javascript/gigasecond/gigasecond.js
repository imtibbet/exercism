function Gigasecond(birthDate) {
    this.birthDate = birthDate;
    this.daysInGigasecond = Math.floor(Math.pow(10,9)/(24*60*60));
    this.date = function() {
        this.birthDate.setDate(this.birthDate.getDate()+this.daysInGigasecond);
        return this.birthDate;
    }
}
module.exports = Gigasecond;