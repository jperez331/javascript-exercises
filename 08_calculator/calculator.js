const add = function(n,m) {
	return n + m ;
};

const subtract = function(n,m) {
  return n - m;
	
};

const sum = function(n) {
	return n.reduce((a , b) => a + b, 0 );
};

const multiply = function(n) {
  return n.reduce((a , b)=> a * b);
};

const power = function(n,m) {
  let pow = n;
	for (let i = 0; i < m - 1; i++){
    pow = pow * n;
  }
  return pow;
};

const factorial = function(n) {
  if(n == 0 || n == 1){
    return 1;
  }
  else{
    let res =1;
    for (let i = 2; i <= n ; i++){
      res *= i;
    }
    return res;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
