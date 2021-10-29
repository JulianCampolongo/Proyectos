function validarForm() {
    var name, description, typeSucursal, street, numeration, location, province, tel, email;
    name = document.getElementById("name").value;
    description = document.getElementById("description").value;
    typeSucursal = document.getElementById("type").value;
    street = document.getElementById("street").value;
    numeration = document.getElementById("numeration").value;
    location = document.getElementById("location").value;
    province = document.getElementById("province").value;
    tel = document.getElementById("tel").value;
    email = document.getElementById("email").value;
    expresion1 = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(name === "" ||
     description === "" ||
     typeSucursal  === "" ||
     street === "" ||
     numeration === "" ||
     location === "" ||
     province === "" ||
     tel === "" ||
     email === ""){
        alert("Todos los campos son obligatorios")
        return false
     }

     else if (name.length>30){
        alert("El nombre es demasiado largo")
        return false
     }

     else if (description.length>30){
        alert("La descripcion es demasiado larga")
        return false
     }

    
    //  else if (isNan(typeSucursal)){
        
    //     return false
    //  }
    
    else if (street.length>40){
        alert("La direccion es demasiado larga")
        return false
     }

     else if (isNaN(numeration)){
        alert("La numeracion debe ser un numero")
        return false
     }

     else if (location.length>30){
        alert("La locacion es demasiado larga")
        return false
     }

     else if (province.length>30){
        alert("La provincia es demasiado larga")
        return false
     }
     
     else if (tel.length>15){
        alert("El telefono es demasiado largo")
        return false
     }

     else if (isNaN(tel)){
        alert("El telefono debe ser un numero")
        return false
     }
     
     else if (email.length>50){
        alert("El mail es demasiado largo")
        return false
     }

     else if (!expresion1.test(email)){
        alert("El formato de email es incorrecto")
        return false
     }

     else {
         return true
     }
    
}