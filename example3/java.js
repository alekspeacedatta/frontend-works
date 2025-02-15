 var username = document.getElementById('name');
 var lastname = document.getElementById('lastname');
 var age = document.getElementById('age');
 var gender = document.getElementById('gender');

 var button = document.getElementById('button');
 var table = document.getElementById('table');

document.getElementById('button').addEventListener('click', function(e){

    if (username.value || !username.value){
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = username.value;
        table.appendChild(tr);
        table.appendChild(td);
    }
    if (lastname.value || !lastname.value){
        var item1 = document.createElement('td');        
        item1.innerText = lastname.value;
        table.appendChild(item1);
    }
    if (age.value || !age.value){
        var item2 = document.createElement('td');
        item2.innerText = age.value;
        table.appendChild(item2);
    }
    if (gender.value){
        var item3 = document.createElement('td');
        item3.innerText = gender.value;
        table.appendChild(item3);
        e.preventDefault();
    }
    if (button){
        var item4 = document.createElement('td');
        var item5 = document.createElement('button');
        item5.innerText = 'detele';
        item4.appendChild(item5);
        table.appendChild(item4);
    } 
    

    item5.addEventListener('click', function(){

     item5 = confirm("do you want to delete this ?")  

     if(item5){
        tr.remove();
        td.remove();
        item1.remove();
        item2.remove();
        item3.remove();
        item4.remove();
        
     }else{
     }
    });
});



// person = {
//     username: document.getElementById('name'),
//     lastname: document.getElementById('lastname'),
//     age: document.getElementById('age'),
//     gender: document.getElementById('gender'),
//     button:  document.getElementById('button'),
//     table: document.getElementById('table'),

//   clas(){


//   }  


// }
