// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
//   var form = document.getElementById('addForm');
//   var itemList = document.getElementById('items');
//   var filter = document.getElementById('filter');
  
//   // Form submit event
//   form.addEventListener('submit', addItem);
//   // Delete event
//   itemList.addEventListener('click', removeItem);
//   // Filter event
//   filter.addEventListener('keyup', filterItems);
  
//   // Add item
//   function addItem(e){
//     e.preventDefault();
  
//     // Get input value
//     var newItem = document.getElementById('item').value;
  
//     // Create new li element
//     var li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item';
//     // Add text node with input value
//     li.appendChild(document.createTextNode(newItem));
  
//     // Create del button element
//     var deleteBtn = document.createElement('button');
  
//     // Add classes to del button
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
//     // Append text node
//     deleteBtn.appendChild(document.createTextNode('X'));
  
//     // Append button to li
//     li.appendChild(deleteBtn);
  
//     // Append li to list
//     itemList.appendChild(li);
//   }
  
//   // Remove item
//   function removeItem(e){
//     if(e.target.classList.contains('delete')){
//       if(confirm('Are You Sure?')){
//         var li = e.target.parentElement;
//         itemList.removeChild(li);
//       }
//     }
//   }
  
//   // Filter Items
//   function filterItems(e){
//     // convert text to lowercase
//     var text = e.target.value.toLowerCase();
//     // Get lis
//     var items = itemList.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function(item){
//       var itemName = item.firstChild.textContent;
//       if(itemName.toLowerCase().indexOf(text) != -1){
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   }








// var a1=document.getElementById("addForm");
// var a2=document.getElementById("items");
// var filter=document.getElementById("filter")
// //feltaring Element
// filter.addEventListener('keyup', fitem);
// a2.addEventListener("click",remove);

// a1.addEventListener("submit",addItem);
// function addItem(e)
// {
//     e.preventDefault();
//     var a3=document.getElementById("item");
    
//     var a4=document.createElement("li");
//     a4.className="list-group-item";
    
//      a4.appendChild(document.createTextNode(a3.value));

//     alert("godd");
//     console.log(a4)

//     var det=document.createElement("button");
//     det.className="btn btn-danger btn-sm float-right delete";
//     det.appendChild(document.createTextNode("delete"));
//     a4.appendChild(det);
//     a2.appendChild(a4);

// }




// function remove(e)
// {
//     if(e.target.classList.contains("delete"))
//     {
//        if(confirm("do you want to delete the item?"))
//        {
//             var idt=e.target.parentElement;
//             a2.removeChild(idt);
//        }
//     }
// }




//   function fitem(e){
//     // convert text to lowercase
//     var text = e.target.value.toLowerCase();
//     // Get lis
//     var items = a4.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function(item){
//       var itemName = item.firstChild.textContent;
//       if(itemName.toLowerCase().indexOf(text) != -1){
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   }

localStorage.setItem("id","sekhar-indian");
console.log(localStorage.getItem("id"));
localStorage.removeItem("id");

sessionStorage.setItem("id","sname");
console.log(sessionStorage.getItem("id"));
sessionStorage.removeItem("id");

sessionStorage.setItem("id","ram");
sessionStorage.setItem("id","sekhar");

