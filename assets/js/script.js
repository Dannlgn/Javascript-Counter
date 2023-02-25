let count = 0;
const plus = "+";
const minus = "-";
const reset = "Reset";

document.getElementById("displayCounter").innerHTML = count;
document.getElementById("increment").innerHTML = plus;
document.getElementById("decrement").innerHTML = minus;
document.getElementById("reset").innerHTML = reset;

document.getElementById("increment").onclick = function () {
  count++;
  document.getElementById("displayCounter").innerHTML = count;
};

document.getElementById("decrement").onclick = function () {
  count--;
  document.getElementById("displayCounter").innerHTML = count;
};

document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("displayCounter").innerHTML = count;
};
