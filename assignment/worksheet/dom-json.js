// GetElementbyId()
// const title = document.getElementById("main-heading")
// console.log(title)

// GetelementbyClassName()
// const listItems = document.getElementsByClassName("listitems")
// console.log(listItems);

// GetElementbyTagName()
// const listTags = document.getElementsByTagName("li")
// console.log(listTags);

// queryselector()

// const container = document.querySelector("div")
// console.log(container);

// queryselectorAll()
// const containerAll = document.querySelectorAll("div")
// console.log(containerAll);

// Dom Manipulation


// styling elements 
// const title = document.querySelector("#main-heading")
// title.style.color = "blue"
// const listitems = document.querySelectorAll(".listitems")
// listitems.style.fontSize = "2rem"

// for ( i =0; i < listitems.length; i++){
//     listitems[i].style.fontSize = "2rem"
// }

// creating elements

const ul = document.querySelector("ul")
const li = document.createElement("li")

// adding element

ul.append(li)

// modifying the text 

li.innerText = "X-men";

// modifying attributes and classes
li.setAttribute('id', 'main-heading')
li.setAttribute
// cut
// li.innerText = "X-men"
// const firstlistitem = document.querySelector(".listitems")

// console.log(firstlistitem.innerText);
// console.log(firstlistitem.textContent);
// console.log(firstlistitem.innerHTML);