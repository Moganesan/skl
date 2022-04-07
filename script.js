function compute() {
  var principal = document.getElementById("principal").value;
  var sign = principal > 0 ? 1 : principal == 0 ? 0 : -1;
  if (sign == 0 || sign == -1) return alert("enter a positive number");

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  var interest = (principal * years * rate) / 100;

  var year = new Date().getFullYear() + parseInt(years);

  document.getElementById(
    "result"
  ).innerHTML = `if you deposit <span class='highlight'>${principal}</span> <br/>at an interest rate of <span class='highlight'>${rate}</span><br/>you will recieve an amount of <span class='highlight'>${interest}</span><br/> in the year <span class='highlight'>${year}</span>`;

  document.getElementById("principal").focus();
  document.getElementById("principal").value = "";
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
