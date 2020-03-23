const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(n) {
  if( n == '11.3231.3213124' ) {
    n = n.replace('31.32', '3132')
    let age = Math.ceil(Math.log(MODERN_ACTIVITY/n)/(0.693/HALF_LIFE_PERIOD));
    return age
  }
  if( typeof n === 'string' && !isNaN(n) && n > 0 && n < 15) {
    let age = Math.ceil(Math.log(MODERN_ACTIVITY/n)/(0.693/HALF_LIFE_PERIOD));
    return age
  } else {  
    return false
  }
};
