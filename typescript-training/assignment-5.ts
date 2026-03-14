let empName:string []=["Alice Johnson", "Bob Smith", "Carol Davis","David Brown", "Eva Green"];
let baseSalary : number []= [75000.00,68000.00,82000.00,90000.00,60000.00];
let experience : number [] = [5.1,3.2,7.1,10.2,2.4];
let rating : number []=[4.2,3.8,4.5,2.5,3.5];

for (let i = 0; i<=rating.length; i++){
    if(rating [i]>=4.0){
        console.log(empName [i]+" has high rating");
        for (let j = 0; j<baseSalary.length; j++){
        console.log((baseSalary[j]/15*100)+1500);
        }
    }

}