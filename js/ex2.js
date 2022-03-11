//PROBLEM NUMBER 2
const displayText400 = () => {
    var fourhundo = document.getElementsByClassName("400level");
    for (x = 0; x < fourhundo.length; x++) {
         console.log(fourhundo[x].textContent);
    }
}
displayText400();

//PROBLEM NUMBER 3
const set_ele = () => {
    // get a list of all the body elements (there will only be one),
    // and then select the zeroth (or first) such element
    myBody = document.getElementsByTagName("body");
    myBodyElements = myBody.getElementsByTagName("p");
    myP.style.background = "yellow";
    myP.style.fontWeight = "bold";
  }
  set_ele();

  //PROBLEM NUMBER 4
const linka = "https://www.csulb.edu/college-of-business";
const contEle = document.getElementsByClassName("links");
const linkaaa = () => {
    const linkElement = document.createElement("a");
    linkaa.textContent = "College of Business";
    linkaa.href = linka;
    contEle.appendChild(linkaa);
    contEle.appendChild(document.createElement("br"));
    
}
linkaa();