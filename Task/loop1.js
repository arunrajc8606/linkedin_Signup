for(i=1;i<=6;i++){
   for(j=1;j<=9;j++){
    if(j>6-i && j<4+i){
        document.write("*&nbsp")

    } else{
    document.write("&nbsp&nbsp&nbsp")
    }
  
   }
   document.write("<br>")
}