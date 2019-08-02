console.log(list[0]);
const main = document.querySelector("main")

const first = list[0];

const createCard=(obj, indx) =>{
console.log(obj.gender);
    const newCard = document.createElement("div");
    newCard.className= "card";

const face  = document.createElement("img");
face.src = obj.picture.medium;
face.alt = "Protrait";
newCard.appendChild(face);
main.appendChild(newCard);
}

createCard(first);

const loopCreate=arr=>{
    for(let i = 0; i<arr.length; i++){
        createCard(arr[i], i)
    }
}

loopCreate(list)