const form = document.forms["sucursal"];


form.onsubmit = (event, data = formToJSON()) => {
    console.log(data);
    event.preventDefault();
    validarForm()

    if(validarForm()){
    primeraPeticion = fetch("http://190.246.34.62:55555/branches",{
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" ,
                   "Access-Control-Allow-Origin" : "*"
                 }
    })
    primeraPeticion.then(res => console.log(res));
    }
};

function formToJSON() {
    const sucursal = {};
    Array.from(form.elements).forEach(element => {
        if (element.name) sucursal[element.name] = element.value

        
    });

    sucursal["branch_address"] = sucursal.branch_street + " nº " + sucursal.branch_numeration + " - " + sucursal.branch_location + " - " + sucursal.branch_province
    delete sucursal.branch_location;
    delete sucursal.branch_street
    delete sucursal.branch_numeration
    delete sucursal.branch_province

    sucursal["organization_id"] = 1
    sucursal["created_by"] = "jula"

    if(sucursal.is_active == "on"){
        sucursal.is_active = 1

    }else {
        sucursal.is_active = 0
    }

    return sucursal;
}