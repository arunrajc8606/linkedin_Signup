var a= parseInt(prompt(" First Number"));
var b=parseInt (prompt("Second Number"));
var c=parseInt (prompt("Third Number"));
 console.log("a=" ,a);
 console.log("b=" ,b);
 console.log("c=" ,c);

if (a>b && a>c){
    console.log(a, "Is the largest number");
}
else if(b>a && b>c){
    console.log(b,"Is the largest number");
}
else{
    console.log(c, "Is the largest number");
}
