module.exports = function getSeason(data) {
  var a = data;
  if (typeof a == 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if (!(data.getTime())) {
    throw new Error();
    
    
  }
  
  var result = a.getMonth(); 
    
    if (result >= 0 && result <= 1) {
    return 'winter'
    } else if (result >= 2 && result <= 4) {
  return 'spring'
    } else if (result >= 5  && result <= 7) {
  return 'summer'
    } else if (result >= 8 && result <= 10) {
  return 'fall'
    } else if (result == 11)
  return 'winter'
   
  }
