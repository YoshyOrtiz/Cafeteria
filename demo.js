function guardar(){
    var n= document.getElementById("n").value;
    var a= document.getElementById("a").value;
    var c= document.getElementById("c").value;
    var t= document.getElementById("t").value;
    if (n=="") {
        alert("Ingrese su nombre");
        document.getElementById("n").focus();
    } else if(a==""){
        alert("Ingrese su apellido");
        document.getElementById("a").focus(); 
    } else if(c==""){
        alert("Ingrese su correo electrónico");
        document.getElementById("c").focus();
    } else if(t==""){
        alert("Ingrese su número de celular");
        document.getElementById("t").focus();
    }else{
        console.log("Nombre: "+n+" "+a);
        console.log("Email: "+c);
        console.log("Celular: "+t);
        document.getElementById("n").value="";
        document.getElementById("a").value="";
        document.getElementById("c").value="";
        document.getElementById("t").value="";
        document.getElementById("t").focus();
    }
}