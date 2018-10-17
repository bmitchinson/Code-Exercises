//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (yr) {
this.Year = yr
};

Year.prototype.isLeap = function () {
if(this.Year%4 === 0){
    if(this.Year%100 === 0){
        if(this.Year%400 === 0){
            return(true);
        }
        return(false);
    }
    else{return(true);}
}
else{return(false);}
};

module.exports = Year;
