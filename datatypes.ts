// let lname: string;
// lname = 'Santosh';
// let newname = lname.toUpperCase();

// console.log(newname);

// let age: number;
// age = 23;

// let dob = "26";

// let result = parseInt(dob)
// console.log(typeof (result));

// let isValid: boolean = false;
// console.log(isValid);

// let emplist: string[];
// emplist = ["Jovana", "Nikola", "Irina"];


// let numList: Array<number>;
// numList = [1, 2, 3, 4, 5];

// let results = numList.filter((num) => num > 2);
// console.log(results);

// let sum = numList.reduce((acc, num) => acc + num);
// console.log(sum);

// const enum Color {
//     Red,
//     Green,
//     Blue
// }

// let c: Color = Color.Blue; 

let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0]; 
