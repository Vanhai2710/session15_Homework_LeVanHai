console.log("Hello world");

// DOM 
console.dir(document);

/*
// 1. query HTML element
// getElementById()

let div = document.getElementById("demo-id"); // div#demo-id
console.log(div);

// getElementsByClassName()
let Elements = document.getElementsByClassName("demo-class"); // p, h6, div
console.log(Elements);
console.log(Elements[0]); // p
console.log(Elements[Elements.length - 1]); // div

for (let i = 0; i <= Elements.length - 1; i = i + 1) {
    console.log(Elements[i]);
}

//
let b = document.getElementsByClassName("demo-class2");
console.log(b);

// getElementsByTagName()
let divs = document.getElementsByTagName("div") // [div, div]
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);

// querySelector()
// tagname
// let input = document.querySelector("input");
// console.log(input);

// id
// let input = document.querySelector("#demo-selecter");
// console.log(input);

// class
// let input = document.querySelector(".demo-selecter");
// console.log(input);

// attribute
// let input = document.querySelector('input[type="text]');
// console.log(input);

// descendant selector
// let input = document.querySelector("form input");
// console.log(input);
*/

// 2. Thao tác với các phần tử

let div = document.getElementById("demo-dom");
console.log(div);
console.log(div.innerTest); // Nội dung của thẻ HTML
console.log(div.textContent); // Nội dung của thẻ HTML
console.log(div.innerHTML); // Nội dung của thẻ HTML

div.innerText = "Nội dung mới vừa được cập nhật";
div.textContent = "Nội dung được cập nhật bởi TextContent";
div.innerHTML = "<b>Hello world</b> <i>How are you???</i>"

// 
console.log(div.style);
div.style.color = "yellow";
div.style.backgroundColor = "blue";
div.style.fontSize = "30px";
div.style.width = "400px";
div.style.height = "400px";
div.style.borderRadius = "50%";
div.style.lineHeight = "400px";
div.style.textAlign = "center";

