let empName:string []=["Alice Johnson", "Bob Smith", "Carol Davis","David Brown", "Eva Green"];
let baseSalary : number []= [75000.00,68000.00,82000.00,90000.00,60000.00];
let experience : number [] = [5.1,3.2,7.1,10.2,2.4];
let rating : number []=[4.2,3.8,4.5,2.5,3.5];
let variablePay: number = 0;
let extraPerks: number = 5000;
let hikeMap = new Map<string, number>();

for (let i=0; i<empName.length; i++){
  // 
    console.log (empName[i],", have baisc salary ",baseSalary[i],", total years of experience is ", experience[i]," & he rated ", rating[i] );
    let variablePay = hike(baseSalary[i], rating[i], experience[i]);
    console.log("\nVariable Pay:", variablePay);
    let hikeCal : number = variablePay/baseSalary[i]*100;
    console.log(empName[i], " & Hike % is : ",variablePay/baseSalary[i]*100);
     //hikeMap.set(empName[i], hikeCal);
     //console.log(hikeMap);
    console.log("----------------------------------------------------------\n");
}

function hike(salary: number, ratings: number, experienced: number){
    let variablePay = 0;
    if(ratings>=4.0){
        variablePay = (salary*15/100)+1500;
        if(experienced>=5){
           variablePay= variablePay+extraPerks;
        }
       

    }else if(ratings >= 3.0 && ratings < 4.0){
        variablePay = (salary*10/100)+1200;
        if(experienced>=5){
           variablePay= variablePay+extraPerks;
        }

    }else {
        variablePay = (salary*3/100)+300;
        if(experienced>=5){
           variablePay= variablePay+extraPerks;
        }
    }
    return variablePay;
}



