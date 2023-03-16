///// //// HTML  ////
const bodyTag = document.querySelector("body");
console.log(bodyTag);
const divTag = document.createElement("div");
bodyTag.prepend(divTag);
const button= document.createElement("button");
divTag.prepend(button);
button.innerHTML = "Afficher popup";
const divTag1 = document.createElement("div");
divTag.prepend(divTag1);
const divTag2 = document.createElement("div");
divTag1.prepend(divTag2);
const titreH1 = document.createElement("h2");
divTag2.prepend(titreH1);
divTag2.prepend(titreH1);

titreH1.innerHTML = "<p>Titre de popup </p>";
const hSpan= document.createElement("span");
titreH1.prepend(hSpan);
hSpan.innerHTML = "&times;";

/////////////  Attribut 

const attId = document.createAttribute('id');
attId.value = "buttonPopup";
button.setAttributeNode(attId);
const attClas = document.createAttribute('class');
attClas.value = "buttonPopup";
button.setAttributeNode(attClas);

const attId1 = document.createAttribute('id');
attId1.value = "popupOpen";
divTag1.setAttributeNode(attId1);
const attClas1 = document.createAttribute('class');
attClas1.value = "popupOpen";
divTag1.setAttributeNode(attClas1);

const attId2 = document.createAttribute('id');
attId2.value = "popup";
divTag2.setAttributeNode(attId2);
const attClas2 = document.createAttribute('class');
attClas2.value = "popup";
divTag2.setAttributeNode(attClas2);

const attId3 = document.createAttribute('id');
attId3.value = "btnClose";
hSpan.setAttributeNode(attId3);
const attClas3 = document.createAttribute('class');
attClas3.value = "btnClose";
hSpan.setAttributeNode(attClas3);

//////////// css   ///// 

//button
// button.classList.add("buttonPopup")
button.style.backgroundColor = "#a52a2a";
button.style.padding = "5px 10px";
button.style.fontSize = "15px";
button.style.cursor = "pointer";

// divTag1.classList.add("popupOpen");
divTag1.style.position = "fixed";
divTag1.style.left = "0px";
divTag1.style.top = "0px";
// divTag1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
divTag1.style.width = "100%";
divTag1.style.height = "100%";
divTag1.style.margin = "14% 0% 0% 25%";
divTag1.style.display = "none";


// divTag2.classList.add("popup");
// divTag2.style.margin = "25px";
divTag2.style.width = "50%";
divTag2.style.height = "28%";
divTag2.style.backgroundColor = "rgb(233 202 202 / 13%)";
divTag2.style.border = "1px solid #000";
divTag2.style.borderRadius = "5px";
divTag2.style.boxShadow = "15px 20px 0 rgba(0, 0, 0, 0.5);";
divTag2.style.padding = "15px 30px 0 20px";

// hSpan.classList.add("btnClose");
hSpan.style.float = "right";
hSpan.style.cursor = "pointer";


/////// Evenement 

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#7fffd4";
  });

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#a52a2a";
  });

button.addEventListener("click", () =>  {
    popupOpen.style.display = "block"; 
        
    })
btnClose.addEventListener("click", () => {
    popupOpen.style.display = "none"; 
    
}); 







