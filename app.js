var expr = '';
var result = '';
var num = document.querySelector("#numb");

num.addEventListener("keydown", function(event) {
  if (event.key === "Enter") { 
    if(num.value.length==0){
      alert("error")
    }
    else{
     expr = num.value;
    result = eval(expr);
    num.value=` ${result}`
    
    }
  }
});

var buttons = document.querySelectorAll('.btn');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    switch(event.target.value) {
      case '1':
        num.value += '1';
        break;
      case '2':
        num.value += '2';
        break;
      case '3':
        num.value += '3';
        break;
      case '4':
        num.value += '4';
        break;
      case '5':
        num.value += '5';
        break;
      case '6':
        num.value += '6';
        break;
      case '7':
        num.value += '7';
        break;
      case '8':
        num.value += '8';
        break;
      case '9':
        num.value += '9';
        break;
      case '0':
        num.value += '0';
        break;
      case '*':
        num.value += '*';
        break;
      case '/':
        num.value += '/';
        break;
      case '+':
        num.value += '+';
        break;
      case '-':
        num.value += '-';
        break;
      case 'C':
        num.value=""
        break;
        case '.':
          num.value+='.'
    }
  });
}

function Finalizar() {
  
  if(num.value.length==0){
   alert("error")}
  else{
   expr = num.value;
  result = eval(expr);
  num.value=` ${result}`
  
  }
}
