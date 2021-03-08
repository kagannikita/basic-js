
const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity == 'string' && parseFloat(sampleActivity) > 0){
        const formula = Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)))/(0.693/HALF_LIFE_PERIOD));
        if (formula < 0){
            return false;
        } else {
            return formula;
        }
    } else {
        return false;
    }
};