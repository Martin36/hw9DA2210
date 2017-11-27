//GLOBALS
var n = 66;
    

function runSimulation(){
  var counter = 0;
  var numbers = [...Array(n).keys()];
  //Run simulation until array is empty, which means we have found all the philosophers
  while(numbers.length !== 0 && counter++ < 10000){
    var randomNr = Math.floor(Math.random() * n);
    var ind = numbers.indexOf(randomNr);
    if(ind > -1){
      numbers.splice(ind, 1);
    } 
  }
  document.getElementById("red-vibes").style.display = "none";
  document.getElementById("cerebral-cereal").style.display = "inline-flex";
  document.getElementById("student-division").style.display = "none";
  document.getElementById("nr-of-packets").innerHTML = counter;
  var nlnn = n * Math.log(n);
  document.getElementById("johan").innerHTML = `n*ln(n) = ${nlnn}`;
  var ne = n * Math.E;
  document.getElementById("henrik").innerHTML = `n*e = ${ne}`;
  return counter;
  
}

function main(){
  var iterations = 1000;
  var average = 0;
  for(var i = 0; i < iterations; i++){
    average += runSimulation();
  }
  average /= iterations;
  document.getElementById("average").innerHTML = `Average for ${iterations} iterations = ${average}`;

}

//After running a couple of iterations (about 100) we can see that Johan has the more correct answer