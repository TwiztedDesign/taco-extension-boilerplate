var results = document.querySelector('#results');

var add = document.createElement("div");
add.innerText = "Dear Taco, please add 3 to 5...  " + taco.calc.add(3,5);
results.appendChild(add);

var sub = document.createElement("div");
sub.innerText = "Dear Taco, please subtract 3 from 5...  " + taco.calc.subtract(5,3);
results.appendChild(sub);

var mul = document.createElement("div");
mul.innerText = "Dear Taco, please multiply 3 by 5...  " + taco.calc.multiply(3,5);
results.appendChild(mul);

var div = document.createElement("div");
div.innerText = "Dear Taco, please divide 3 by 5...  " + taco.calc.divide(3,5);
results.appendChild(div);
