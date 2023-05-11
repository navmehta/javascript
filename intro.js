 /*Q1.  Print Fizz Buzz.
Description: Write a program that prints the numbers from
1 to 20 and for multiples of 
'3' print "Fizz"  
'5' print "Buzz"
'3' and '5' both print "FizzBuzz"
else number itself*/
for(let a=1;a<=30;a++){
    if(a%3==0&&a%5==0){
         console.log("FizzBuzz");
    }
     
    else if(a%3==0){
        console.log("Fizz");
    }
    else if(a%5==0){
        console.log("Buzz");
    }
     
    else{
    
        console.log(a);
    }
}