const myListDiv = document.getElementById("list");
const myHobbies = ["writing", "traveling",  "scultping with clay"];


function addName(name) {
    const h1 = document.createElement("h1");
    h1.innerText = name;
    h1.className = "name";
    myListDiv.appendChild(h1);
}



myHobbies.forEach(hobby => addName(hobby));