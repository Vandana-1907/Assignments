let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.00;
//let isEmployed: boolean = true;
let monthlyDebt: number = 20000;
let debtToIncomeRatio: number = 35.0;


function isEligibleForLoan(){
    if (creditScore>750){
    console.log("Congratulations loan Approved!!!!!!!!");
    } 
        if(creditScore >=650 && creditScore<=750 ){
              if (income>=50000){
                  console.log(""+customerName+", credit score is "+creditScore+" We can consider him for Loan");
                  console.log(""+customerName+", (Customer) salary is "+income+" so the Customer is Employed");

                    if ((monthlyDebt/income)*100<40){
                        console.log(""+customerName+",  DTI ratio is "+debtToIncomeRatio+" Loan is Approved!!!!!!!!!!!!!");
                    }else{
                        console.log(" Loan is denied ");
                    }
                }else{
                    console.log("Employee is unemployed");
                }


    }else {
        console.log("Loan is denied");
    }
}

isEligibleForLoan();

