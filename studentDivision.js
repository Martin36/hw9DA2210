//GLOBALS
var nrOfStudents = 190,
    iterations = 20
    table = document.getElementById("results");

function studentDivision(){
  document.getElementById("student-division").style.display = "inline-flex";
  document.getElementById("red-vibes").style.display = "none";
  document.getElementById("cerebral-cereal").style.display = "none";
  while(table.firstChild){
    table.removeChild(table.firstChild);
  }
  for(var i = 0; i < iterations; i++){
    var group1 = 0;
    var group2 = 0;
    for(var j = 0; j < nrOfStudents; j++){
      var randomNr = Math.random();
      if(randomNr < 0.5){
        group1++;
      }
      else{
        group2++;
      }
    }
    //Fill table with values
    var row = document.createElement("tr");
    var box1 = document.createElement("td");
    box1.innerHTML = i + 1;
    var box2 = document.createElement("td");
    box2.innerHTML = group1;
    var box3 = document.createElement("td");
    box3.innerHTML = group2;
    row.appendChild(box1);
    row.appendChild(box2);
    row.appendChild(box3);
    table.appendChild(row);
  }
}

//By dividing the students randomly into two groups and doing this 20 times we get at least one time where
//The statistics are the same as stated in the exercise, thus we cannot draw a conclusion that there is a relationship between which group students choose
//