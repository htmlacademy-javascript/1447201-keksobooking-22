function getRandFloat(x1, x2, k) {
  if(x1 === x2) {
    return x1;
  } else if(x1 > x2) {
    let buff = x1;
    x1 = x2;
    x2 = buff;
  }
  return parseFloat((x1 + Math.random() * (x2 - x1)).toFixed(k));
}

let a = getRandFloat(7.2, 6.2, 5);

console.log(a);
