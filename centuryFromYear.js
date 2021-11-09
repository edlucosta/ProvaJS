function centuryFromYear(year) {
  var conta = year % 100;
  var resultado = Math.floor(year / 100);
  if (conta > 0) {
  	resultado = Math.floor(year / 100) + 1;
  }
  return resultado;
}