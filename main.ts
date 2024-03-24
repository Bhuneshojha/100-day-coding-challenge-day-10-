//          100 days of coding challenge ( DAY 10 )

//   Question 01    If-else in number varriable
let age:number = 30

if (age < 2 ){
  console.log("This person is a Baby.");
}else if (age < 4){
  console.log("This person is a Toddler.");
}else if (age < 13 ){
  console.log("This person is a Kid.");
}else if (age < 20){
  console.log("This person is a Teenager.");
}else if (age < 65){
  console.log("This person is an Adult.");
}else {
  console.log("This person is Elder.");
}
//   Question 02
let fav_fruits:string[] = ["Mango","Berries","Orange","Grapes"]
 if (fav_fruits.includes("Mango")){
     console.log("I love to eat Mangoes With Puri!");
 }
 if (fav_fruits.includes("orange")){
     console.log("You should Eat oranges!");
 }
 if (fav_fruits.includes("Grapes")){
     console.log("The rate of grapes per kg is high!");
 }
 if(fav_fruits.includes("Berries")){
     console.log("No one usually knows about Berries!");
 }

//   Question 03
let userNames:string[] = ["Admin","Kumar","Rani","Meena","Muneeb"]
 userNames.forEach(userNames => {
  if (userNames="Admin"){
   console.log("Hello Admin i hope you will be fine.");
  }else{
    console.log(`Hello ${userNames} thank you for visit aur page.`);
  }
  });

   