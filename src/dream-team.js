module.exports = function createDreamTeam(arr) {
  if( arr === undefined || arr === null){
    return false
  } else {
    
   
    if(arr instanceof Array) {
       console.log('test')
    
    let str = arr.filter(val => typeof val === 'string');
  
    let str2 = str.map(val => val.trim().toUpperCase()); console.log(str2.map(val => val[0]))
    return   str2.map(val => val[0]).sort().join('')
    
  } else {
    return false
  }
    
    
  }
};