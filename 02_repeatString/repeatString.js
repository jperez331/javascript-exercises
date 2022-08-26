function repeatString(str ,n) {
  let finalStr = '';
  if (n >= 0){
    for (let i = 0; i < n; i++) {
      finalStr += str;
    }
    return finalStr;
  }else{
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
