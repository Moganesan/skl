function compute() {
  var principal = document.getElementById("principal").value;
  if (!principal) return alert("Enter Amount");
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  var interest = (principal * years * rate) / 100;

  var year = new Date().getFullYear() + parseInt(years);

  document.getElementById(
    "result"
  ).innerHTML = `if you deposit ${principal} <br/>at an interest rate of ${rate}<br/>you will recieve an amount of ${interest},<br/> in the year ${year}`;
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
