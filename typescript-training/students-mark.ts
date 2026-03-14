let studentNames: string[]= ["Suresh", "Mahesh","Naresh"];
let marks:number[] = [75, 80, 82];
let total: number = 0;
console.log("Previous Marks :", marks);

console.log("updated marks: ")
for(let i:number = 0; i<studentNames.length; i++){
    let updateMarks = marks[i]+10;
    console.log(studentNames[i]," : ", +updateMarks);
    total = total+updateMarks;
   // console.log("total: ",total);
}

let average = total / studentNames.length;

console.log("Total Students Marks:", total);
console.log("Average of Students Marks:", average);
