let UserName = prompt("Enter your name");
let Age = prompt("Enter your Age");
let Email =prompt("Enter your email address");

// let User = prompt("let us know if you are less than 12 years old, between 12 and 18 years old, or 18 years old and above");
  if(Age < "12 years old"){
    alert(`Hi ${UserName}, you are ${Age} years old and you are too young to register. Sorry 😔 😔`);
  }else if(12 < "Age years old"< 18){
   alert(`Hi ${UserName}, you are ${Age} years old and you have limited options to register for. We will keep in touch via your email: ${Email}. 👋 👋`);
}else if("Age years old" > 18){
    alert(`Hi ${UserName}, you are ${Age} years old and you can register for any option of your choosing. we will keep in touch via your email: ${email} 👋 👋`);
}else {
    alert ("Please enter a valid age.");
}

