let num: number = 9;
let isPrime = true;

if(num<=1){
isPrime=false;
}

    for(let i= 2; i<num; i++){
        if(num%i===0){
            isPrime=false;
        break;
    }
    } 
if (isPrime)
{
    console.log(num,"number is a prime number");
}else{
    console.log(num,"number is not a prime number");
}