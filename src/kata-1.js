export function kata1 (number) {
  if(number && !isNaN(number)){
    return Number(number.toString().split('').sort((a,b) => b-a).join(''));
  }else{
    return 'Insert a number'
  }
}
