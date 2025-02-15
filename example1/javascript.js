var button =  document.getElementById('darkmode');
var wrd = document.getElementById('words'); 
var word = document.getElementById('wordsas');
var lists = document.getElementById('lists');
var infinite = true;

button.addEventListener('click', function(){

  if(infinite == true){

  document.body.style.backgroundColor = '#121212';
  wrd.style.color = "white";
  word.style.color = "white";
  lists.style.color = "white";

  infinite = false;
  }
  else{

    document.body.style.backgroundColor = 'white';
    wrd.style.color = "black";
    word.style.color = "black";
    lists.style.color = "black";

    infinite = true;
  }  
});

   




