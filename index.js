

  var Score = 0;

  for(var i = 0; i < document.querySelectorAll("button").length; i++){

  document.querySelectorAll("button")[i].addEventListener("click",function(){

       changeValue(this.innerHTML);
       Active(this.innerHTML);
  });

  }
     function changeValue(key){

       if(key == "-"){
        Score = Score - 1;
        if(Score < 0){
        document.querySelector("span").innerHTML = Score;
        document.querySelector("span").style.color = "red";}
       
       else{
        document.querySelector("span").innerHTML = Score;
        document.querySelector("span").style.color = "green";
       }
      }

       else if(key == "Reset"){
         Score = 0;
         document.querySelector("span").innerHTML = Score;
         document.querySelector("span").style.color = "green";
       }
       else{
        Score = Score + 1;
        if(Score >= 0){
        document.querySelector("span").innerHTML = Score;
        document.querySelector("span").style.color = "green";
        }
        else{
          document.querySelector("span").innerHTML = Score;
          document.querySelector("span").style.color = "red";
        }
       }
       
     }

     function Active(a){

        switch(a){
          case "-" :   
                        var item = document.querySelectorAll("button")[0];
                        item.classList.add("set");
                        setTimeout(function(){
                         item.classList.remove("set");
                       },100);
                     break;

         case "Reset" : 
                     var item = document.querySelectorAll("button")[1];
                     item.classList.add("set");
                     setTimeout(function(){
                       item.classList.remove("set");
                     },100);
                   break;

         case "+" :
                    var item =  document.querySelectorAll("button")[2];
                    item.classList.add("set");
                    setTimeout(function(){
                    item.classList.remove("set");
                   },100);
                 break;
     
          

        }
     }