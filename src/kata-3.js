export function kata3 (n, m) {

  const squareDiv = [];
  
  function square(n){
    const dividers = [];
    for(let i=1; i<=n; i++){
      const div = n%i;
      if(!div){
        dividers.push(i*i)
      }
    }
    const total = dividers.reduce((a, b) => a+b);
    const square = Math.sqrt(total);
    if(square === 1 || square%2 === 0){
      return [n, total];
    }else{
      return false;
    }
  }

  for(let i=n; i<=m; i++){
    const isSquare = square(i);
    if(isSquare){
      squareDiv.push(isSquare)
    }
  }

  return squareDiv;
}
