const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nEnter a grade: ', (answer) => {
  // TODO: Log the answer in a database
  
  var grade = parseInt(answer);
  
    rl.close();
});


function computeGrade(g){
    
    var grade = grade
    
    
if(grade < 75)
  console.log(g - 2 );
  
  else if (grade >=75)
  console.log(g - 3 )





const util = require('./newgrade');

var grade= util.computeGrade;

console.log ("Grade is:" +grade);


}
                            

