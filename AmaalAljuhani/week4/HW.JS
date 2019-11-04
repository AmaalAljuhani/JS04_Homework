console.log("JS connected"); // this to check that our script is connected to out HTML

var body = document.querySelector("body");// query select body 
body.style.fontFamily="Arial, sans-serif";
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
body.style.backgroundColor="gray";
// change the backgroundColor to a color of your choice

var nickname =  document.querySelector("#nickname");// qurey select the ID nickname
//add some value to nickname Hint: innerHTML
nickname.innerHTML = "amaal";
document.querySelector("#favorites").innerHTML="reading";
// query select favorites byID
document.querySelector("#hometown").innerHTML="Riyadh";
// query select hometown byID

// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL
//document.querySelectorAll("span").style.color="#ff0000";
document.querySelectorAll("span").forEach(function(a) {
    a.style.color ="red";
  });

// https://www.w3schools.com/jsref/prop_style_color.asp
