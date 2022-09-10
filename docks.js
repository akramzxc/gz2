var number1 = 8;
var number2 = "#";
var number3 = '';
for (var i = 0; i<number1; i++){
  for (var j = 0; j<number1; j++){
    if (i%2===0){
      if (j%2===0){
        number3+=number2;
      }else{
        number3+=' ';
      }
    }else{
      if (j%2===1){
        number3+=number2;
      }else{
        number3+=' ';
      }
    }
  }
  number3+="\n";
}
console.log(number2 );	var number1 = 8;
var board = "";
for (var y = 0; y < number1; y++) {
  for (var x = 0; x < number1; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);
