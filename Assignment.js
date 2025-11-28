let stNumber="123";
const transformNumber=(num)=>console.log(parseInt(num)+7);
transformNumber(stNumber)
//--------------------------------------------
let number=0;
function validation(num){
    if(!num){
    console.log("Invalid");
}
else{
    console.log("Valid");
    
}
}
validation(number)
//--------------------------------------------
let rangee=10
function range(rangeNum){
    for(let i=1;i<=rangeNum;i++){
    if (i%2==0) {
        continue;        
}
    else{
    console.log(i);
}
}
}
range(rangee)
//--------------------------------------------
const numbers=[1,2,3,4,5]
function checkEven(num){
const evenNumbers=num.filter(num=>num%2==0)
return evenNumbers;
}
console.log(checkEven(numbers));
//--------------------------------------------
const arr1=[1,2,3]
const arr2=[4,5,6]
function merge(array1,array2){
console.log([...array1,...array2]);
}
merge(arr1,arr2)
//--------------------------------------------
let numbber=2
function calender(day){
    switch (day) {
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

}
calender(numbber)

//--------------------------------------------
let arr=["a","ab","abc"]
function lenghtCalc(array){
const len=array.map(function (checkLength){
    return checkLength.length
})
return len
}

console.log(lenghtCalc(arr));
//--------------------------------------------
let numbeer=10;
function check(num){
    if (num%3==0&&num%5==0) {
    console.log("Divisible by Both");
}
else{
    console.log("Not Divisible by Both"); 
}
}
check(numbeer)
//--------------------------------------------
let numberr=5;
const square=num=>num**2;
console.log("The Square Value:",square(numberr));
//--------------------------------------------
const person={name:"John",age:25}
function identify(per){
console.log(per.name,"is",per.age,"Years Old");

}
identify(person)

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