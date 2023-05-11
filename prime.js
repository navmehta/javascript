 //Check the given no is prime or not
 let num = 29;
 let count=1;
 for(let i=2;i<num;i++){
    if(num%i==0){
        count++;
    }
 }
 if(count==1){
    console.log("It is  prime number:");
 }
 else{
    console.log("It is not a prime number");
 }