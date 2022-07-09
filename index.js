let currentTotal = 0;
let buffer = "0";
let previousOperator = null;
const calcScreen = document.querySelector(".calc-numbers");
document
  .querySelector(".calculator-buttons")
  .addEventListener("click",  (event)=> {
    buttonClick(event.target.innerHTML);
  });

const buttonClick = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerenderScreen();
}

const  handleSymbol = (value) => {
  switch (value) {
    case "C":
      buffer = "0";
      currentTotal = 0;
      previousOperator = null;
      break;
    case "=":
      console.log(buffer);
      var ans = eval(buffer);
      console.log(ans);
      buffer = ans.toFixed(5);
      rerenderScreen();
      buffer = ans;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1); //delete the numbers one by one
      }
      break;
    default:
      buffer += value;
      break;
  }
}

const handleNumber = (value) => {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

const rerenderScreen = () => {
  calcScreen.value = buffer;
}
