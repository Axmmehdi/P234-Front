

 function mode() {
  if(document.body.style.backgroundColor="white"){
     document.body.style.backgroundColor="black"

  } else{
    document.body.style.backgroundColor="white";
  }
  
}


function setGroupColor(){
  let namegroup_input=document.getElementById("NameGroup").value;
  
  let NameGroup=namegroup_input.slice(-3,-2);
  
  switch(NameGroup){
    case '1':
      alert("Səhər qrupudur");
      document.body.style.backgroundColor="yellow";
      break;
      
      case '2':
        alert("Gunorta qrupudur");
        document.body.style.backgroundColor="red";
        break;
        case '3':
          alert("Axşam Qrupudur");
          document.body.style.backgroundColor="blue";
          break;
          default:
            alert("Invalid option");
            break;
            
          }
          
}
        

        
/*
        
        // let NameGroup = namegroup_input.value;
        if(x ===1){
          document.getElementById("changegroup").innerHTML="Səhər qrupudur";
          document.body.style.backgroundColor="yellow"
        } else if(x===2) {
          document.getElementById("changegroup").innerHTML="Səhər qrupudur";
          document.body.style.backgroundColor="red"
  }else if (x===3) {
    document.getElementById("changegroup").innerHTML="Səhər qrupudur";
    document.body.style.backgroundColor="blue"
  }
*/

