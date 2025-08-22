let weightMark, weightJohn, heightMark, heightJohn;
//bmi = mass/(height**2);

//TEST Data 1
console.log("TEST DATA 1");

weightMark = 78;
heightMark = 1.69;

let bmiMark = (weightMark / heightMark ** 2).toFixed(2);

weightJohn = 92;
heightJohn = 1.95;

let bmiJohn = (weightJohn / heightJohn ** 2).toFixed(2);

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
}else{
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}

//TEST Data 2
console.log("TEST DATA 2");

weightMark = 95;
heightMark = 1.88;

bmiMark = (weightMark / heightMark ** 2).toFixed(2);

weightJohn = 85;
heightJohn = 1.76;

bmiJohn = (weightJohn / heightJohn ** 2).toFixed(2);

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
}else{
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}


