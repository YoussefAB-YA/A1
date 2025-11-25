let stNumber="123";
console.log(parseInt(stNumber)+7);
//--------------------------------------------
let number=0;
if(!number){
    console.log("Invalid");
}
else{
    console.log("Valid");
    
}
//--------------------------------------------
for(let i=1;i<=10;i++){
if (i%2==0) {
        continue;        
}
else{
    console.log(i);
}
}
//--------------------------------------------
const numbers=[1,2,3,4,5]
const evenNumbers=numbers.filter(num=>num%2==0)
console.log(evenNumbers);
//--------------------------------------------
const arr1=[1,2,3]
const arr2=[4,5,6]
console.log([...arr1,...arr2]);
//--------------------------------------------
let numbber=2
switch (numbber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid Day");
        break;
}


//--------------------------------------------
let arr=["a","ab","abc"]
const len=arr.map(function (checkLength){
    return checkLength.length
})
console.log(len);
//--------------------------------------------
let numbeer=10;
if (numbeer%3==0&&numbeer%5==0) {
    console.log("Divisible by Both");
}
else{
    console.log("Not Divisible by Both"); 
}

//--------------------------------------------
let numberr=5;
const square=num=>num**2;
console.log("The Square Value:",square(numberr));
//--------------------------------------------
const person={name:"John",age:25}
console.log(person.name,"is",person.age,"Years Old");

//--------------------------------------------
function sum(...n) {
   let sum=0;
   for(let i of n){
    sum+=i;
   }
    return sum;
}
console.log("The Sum Value:",sum(1,2,3,4,5));

//--------------------------------------------
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
delayedSuccess().then(console.log); 

//--------------------------------------------
let array=[1,3,7,2,4]
function largeNum(arr){
    arr.sort();
    return arr[arr.length-1];
}
console.log("The Max Number is:",largeNum(array));

//--------------------------------------------
const someone={name:"John",age:30}
const keyss= somePar=>console.log(Object.keys(somePar));
keyss(someone)

//--------------------------------------------
let str="The quick brown fox";
function split(){
    console.log("String Split:",str.split(" "));
}
split()
//--------------------------------------------