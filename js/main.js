var val = document.getElementById('total');
var num = 0;
var total = 0;

val.innerHTML = total;


// total.setAttribute("val");



function input() {
   num = document.getElementById('in').valueAsNumber;
   console.log(num);
  return num;
}
function add() {
  input();
  total = num + total;
  console.log(num);
  console.log(total);
  val.innerHTML = total;
  return total;

}
function subtract() {
  input();
  total = total - num;
  console.log(num);
  console.log(total);
  val.innerHTML = total;
  return total;

}
