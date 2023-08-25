let form=document.getElementById("addForm");
let ul=document.getElementById("items");
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    
    //get input value
    let newitm=document.getElementById('item').value;

    //create li eliment 
    let li=document.createElement('li');
    //add class name
    li.className='list-group-item';
    //add text node 
    li.appendChild(document.createTextNode(newitm));
     
    let deleteBtn=document.createElement('button');
    deleteBtn.className='btnn btn-danger btn-smflaoat-right delete';
    deletBtn.appendChild(document.createTextNode('x'));
    

   

}




