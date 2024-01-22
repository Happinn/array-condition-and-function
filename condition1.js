  function addFive(score){
    let finalScore = 0
    if (score >= 38 && score <= 69 && score % 5 >= 3) {
    finalScore = score + 5
    }
    else{
    finalScore = score
    }
 
    return finalScore

  }
// This is use to give a condition of 'if' and  'else' to give a function  
  function methodTwo(score){
    let scoreStr = String(score)
    let finalScore = 0

    if((scoreStr[1]=='8' || scoreStr[1]=='9') && score < 70 && score > 37){
        finalScore = score + 5

    }
    else{
        finalScore = score

    }
    return finalScore

  }

  //Write a function that take two parameter if the avarage score is more than 50 and above it should return pass or else return fail and it should return english and math and also to add a comment to the status

  function avgScore(eng, math){
    let avg = (eng + math)/2
    let status =''
    if (avg >= 50) {

        status = `congratulation! Your score is ${avg.toFixed(1)} meaning that you pass`
       

    }

    else{
        status = `Sorry, Your score is ${avg.toFixed(1)}, therefore not good enough. Try again`
        
    }

    return status
}


        // This function is use to assign grade by score and also to give an output if the score is not correct
    function grade(score){
    let gradeVal = ''
    if(score <= 100){
        if(score >= 70){
            
            gradeVal = 'A'
        }

        else if(score >= 60){
            gradeVal = 'B'
            
    }
    else if(score >= 50){
        gradeVal = 'C'
        
    }
    else if(score >= 40){
        gradeVal = 'p'
        
    }
    else{
        gradeVal = 'FF'
        
    }
    
 }
    
    else{
        gradeVal = 'Invalid score'
    }
    
         return gradeVal
    }

    
