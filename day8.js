// // day1.1
// alert("well come to user my name is sekhar");
// alert(hi )
// console.log(document.all);
// console.dir(document);
// console.log(document.url);
// console.log(document.body);
// console.log(document.h1);
//console.log(document.getElementById("main"));
//console.log(ss);
// var s=document.getElementById("header-title");
// s.textContent="welcome back to sekhar";
// s.innerText("sekhar go back");
// s.innerText="sekhar go back";
// s.style.color="red";
// s.style.fontSize="10px";
// var item=document.getElementsByClassName("list-group-item");
// console.log(item);
// item[1].textContent="change1";
// for(var i=0;i<item.length;i++)
// {
//     item[i].style.color="red";
//     item[i].style.backgroundColor="yellow";
//     item[i].style.fontWeight="bold"
// }

//qury selector
// var items=document.querySelector("#header-title");
// items.style.color="yellow";
// items.style.borderBottom="solid 4px red";

// var input=document.querySelector("input");
// input.value="sekhar";

// // var submit=document.querySelector('input[type="submit"]');
// // submit.value="send";

// var sub=document.querySelector('input[type="submit"]');
// sub.value="ok";

// var a=document.querySelectorAll(".list-group-item:nth-child(even)");
// for(var i=0;i<a.length;i++)
// {
//     a[i].style.backgroundColor="red";

// }

//parent node 
var item=document.querySelector("#items");
// console.log(item.parentNode);

//parent element
// console.log(item.parentElement);

//chiled node
// console.log(item.childNodes);

//chiled
// console.log(item.lastElementChild);
// console.log(item.firstElementChild);

// next sliblings
// console.log(item.nextSibling);

//previous sibling
// console.log(item.previousSibling);

//next elimentSibling
// console.log(item.nextElementSibling);

//previous eliment Sibling
// console.log(item.previousElementSibling);
// item.previousElementSibling.style.color="red";

//create div
var div=document.createElement('div');

div.className="class1";

div.id="id1";

div.setAttribute("type",'sekhar');

var diva=document.createTextNode("hi my name munisekhar udavalapti");

div.appendChild(diva);

var container =document.querySelector("header .container");
var h1=document.querySelector("header h1");

container.insertBefore(div,h1);

