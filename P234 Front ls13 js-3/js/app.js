function calculateSum() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;


  if (isNumber(num1) && isNumber(num2)) {
    let sum = 0;
    let start = Math.min(parseFloat(num1), parseFloat(num2));
    let end = Math.max(parseFloat(num1), parseFloat(num2));

    for (var i = start; i <= end; i++) {
      sum += i;
    }

    document.getElementById("result").textContent = "Ədədlərin cəmi: " + sum;
  } else {
    document.getElementById("result").textContent = "Hər iki parametr rəqəm deyil.";
  }
  

}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}


function increaseSize() {
  let element = document.getElementById("movingbox");
  let width = element.offsetWidth + 50;
  let height = element.offsetHeight + 20;

  element.style.width = width + "px";
  element.style.height = height + "px";
}

function decreaseSize(){
  let element=document.getElementById("movingbox");
  let width = element.offsetWidth - 50;
  let height = element.offsetHeight - 20;


  element.style.width = width + "px";
  element.style.height = height + "px"
}


