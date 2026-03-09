// DATATYPE Number
let degree:number = 25.5;
console.log("1. Temprature of a city in degree celsius: "+degree);

// DATATYPE BOOLEAN
let isPlaceOrder : boolean = true;
console.log("2. Whether a customer has placed an order : "+isPlaceOrder);

// DATATYPE STRING
let phoneNumber : string = "123-456-7890";
console.log("3. Person's email address : "+phoneNumber);

// DATATYPE NUMBER
let acctBalance : number = 1000.50;
console.log("4. Amount of money in a customer's bank account : "+acctBalance);

// DATATYPE STRING
let email : String = "john.doe@example.com";
console.log ("5. Persons email address :"+email);


// DATATYPE OBJECT
interface Location  {
    latitude : number;
    longitude : number;
}

let location : Location = {
    latitude : 37.7749,
    longitude : -122.4194
};

console.log("6. Coordinates of a location Latitude & Logitude", location.latitude, location.longitude);

// DATATYPE 

interface Persons  {
    maritalStatus : boolean;
    occupation : string;
    favColor : string ;
}

let person : Persons =
    {
    maritalStatus: true,
    occupation : "SoftWare Engineer",
    favColor : "Blue" 
    };

console.log("7. Person's marital status : " , person.maritalStatus , 
            "\n8. Persons Occupation : ",person.occupation,  
             "\n9. Person's favourite color : ",person.favColor);


//DATATYPE DATE
let year :Date = new Date("2023-07-22");
console.log("10 CUrrent year : ",year.getFullYear());

//DATATYPE String
let follwers: string  = "1,000,000";
console.log("11. Number of followers on Social Media platform : ",follwers);

// DATATYPE Number
let rating: number  = 7.5;
console.log("12. rating of a movie: "+rating);

// DATATYPE String
let bloodType :string = "'A'";
console.log("13. Person's blood type: ", bloodType);

// DATATYPE String
let title :string = "To Kill a Mockingbird";
console.log("14. Title of a book: ", title);

// DATATYPE number
let nosEmp :number =500;
console.log("15. Number of employees in Company",nosEmp);

// DATATYPE  Date
let time: Date = new Date ();
time.setHours(14, 30);
console.log("16. Time of an Event: ",time.toLocaleTimeString(), "PM");

// DATATYPE String
let country :string = "United City";
console.log("17. Name of a Country: "+country);

// DATATYPE String
let eyeColor :string = "Brown";
console.log("18. Person's Eye Color: "+eyeColor);

// DATATYPE String
let birthplace :string = "New york City";
console.log("19. Person's Birth place: "+birthplace);

// DATATYPE number
let distance :number =200.5;
console.log("20. Distance between two cities : ",distance);






















