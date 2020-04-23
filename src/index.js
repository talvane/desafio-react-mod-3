'use strict';

const fibonacci = () => {
  const fiboArr = [0, 1];
  const limitFibo = 350;

  for (; fiboArr[fiboArr.length - 1] < limitFibo; ) {
    fiboArr.push(fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]);
  }

  return fiboArr;
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};
