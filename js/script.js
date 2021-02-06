let output = document.querySelector('.output-field');
let history = document.querySelector('.history');
let last_number = 0;

function clearcalc(){
  history.innerHTML = "&nbsp;";
  output.innerHTML = 0;
}

function input(n){
  if(output.classList.contains('result')){
    output.innerHTML = 0;
    output.classList.remove('result');
  }
  if(n == '-' || n == '+' || n == '*' || n == '/'){
    let lastsymbol = output.innerHTML.slice(-1);
    if(lastsymbol == '-' || lastsymbol == '+' || lastsymbol == '*' || lastsymbol == '/'){
      output.innerHTML = output.innerHTML;
    } else {
      output.innerHTML = `${output.innerHTML}` + `${n}`
    }
  } else if(n == '.'){
    if(output.innerHTML.indexOf('.') > -1){
      output.innerHTML = output.innerHTML;
    }else {
      output.innerHTML = `${output.innerHTML}` + `${n}`
    }
  } else {
    if(output.innerHTML != 0){
      output.innerHTML = `${output.innerHTML}` + `${n}`
    } else {
      output.innerHTML = `${n}`
    }
  }
}

function percent(){
  if (!isNaN(Number(output.innerHTML))){
    let res = Number(output.innerHTML)/100;
    output.innerHTML = res;
  }
}

function result(){
  let res = eval(output.innerHTML);
  history.innerHTML = output.innerHTML + ' = ' + res;
  output.classList.add("result");
  output.innerHTML = res;
}

function change(){
  if(!isNaN(output.innerHTML)){
    output.innerHTML = -output.innerHTML;
  } else {
    last_number = output.innerHTML.match(/[0-9]+(?!.*[0-9])/);
    console.log(last_number);
  }
}

function sup(){
  let number = Number(output.innerHTML);
  if (!isNaN(Number(output.innerHTML))){
    let res = Number(output.innerHTML)*Number(output.innerHTML);
    output.innerHTML = res;
    history.innerHTML = number + ' * ' + number + ' = ' + res;
  }
}

function onetwo(){
  if (!isNaN(Number(output.innerHTML))){
    let res = Number(output.innerHTML)/2;
    output.innerHTML = res;
  }
}

function onefour(){
  if (!isNaN(Number(output.innerHTML))){
    let res = Number(output.innerHTML)/4;
    output.innerHTML = res;
  }
}

function threefour(){
  if (!isNaN(Number(output.innerHTML))){
    let res = (Number(output.innerHTML)/4)*3;
    output.innerHTML = res;
  }
}

function factorial(){
  if(!isNaN(Number(output.innerHTML))&&Number.isInteger(Number(output.innerHTML))){
    let number = Number(output.innerHTML);
    let res = 1;
    for(let i=1; i<=number; i++){
      res *= i;
    }
    output.innerHTML = res;
    history.innerHTML = `${number}! = ${res}`;
  }
}