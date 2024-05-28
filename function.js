function resident_status(){
    var status = document.forms["tax"]["resident"].value;
    if(status=="NRI"){
        alert("The Given Residential Status is not supported");
    }
    else{
        return;
    }
}
function calculate_new_tax(){

        var std = document.forms["tax"]["std"].value;
        var income = document.forms["tax"]["income"].value;
        if (std=="Yes") {
            income = income-50000;
        } else
        if (std=="No"){
            income= income;
        }

        var nps = document.forms["tax"]["NPS"].value;
        if(nps<=150000){
            income= income - nps;
        }
        else{
            alert("NPS is only allowed upto 1.5 Lakh per year");
            income= income - 150000;
        }

        var others = document.forms["tax"]["others"].value;
        income= income - others;

    let tax=0;
    let cess=0;
    if (income>=700001) {
        if(income>300000 && income<=600000){
            tax= 0.05*(income-300000);
        }
        if(income>600000 && income<=900000){
            tax= 15000 + 0.10*(income-600000);
        }
        if(income>900000 && income<=1200000){
            tax= 45000 + 0.15*(income-900000);
        }
        if(income>1200000 && income<=1500000){
            tax= 90000 + 0.20*(income-1200000);
        }
        if(income>1500000){
            tax= 150000 + 0.30*(income-1500000);
        }
    }
    else{
        tax = 0;
    }
    cess = (0.04 * (tax));
    final_tax = tax + cess;
    tax = tax.toLocaleString("en-IN"); 
    cess = cess.toLocaleString("en-IN"); 
    final_tax = final_tax.toLocaleString("en-IN"); 
    document.getElementById("output").innerHTML= 
    `TAX liability is: Rs ${tax} <br>
     Health & Education CESS is: ${cess}<br>
     TOTAL TAX LIABILITY is: ${final_tax}` ;
}

function calculate_old_tax(){

        var std = document.forms["tax"]["std"].value;
        var income = document.forms["tax"]["income"].value;
        if (std=="Yes") {
            income = income-50000;
        } else
        if (std=="No"){
            income= income;
        }

        var nps = document.forms["tax"]["NPS"].value;
        if(nps<=150000){
            income= income - nps;
        }
        else{
            alert("NPS is only allowed upto 1.5 Lakh per year");
            income= income - 150000;
        }

        var others = document.forms["tax"]["others"].value;
        income= income - others;


    let tax=0;
    if (income>=500001) {
        if(income>250000 && income<=500000){
            tax= 0.05*(income-250000);
        }
        if(income>500000 && income<=1000000){
            tax= 12500 + 0.20*(income-500000);
        }
        if(income>1000000){
            tax= 112500 + 0.30*(income-1000000);
        }
    }
    else{
        tax = 0;
    }
    cess = (0.04 * (tax));
    final_tax = tax + cess;
    tax = tax.toLocaleString("en-IN"); 
    cess = cess.toLocaleString("en-IN"); 
    final_tax = final_tax.toLocaleString("en-IN"); 
    document.getElementById("output").innerHTML= 
    `TAX liability is: Rs ${tax} <br>
     Health & Education CESS is: ${cess}<br>
     TOTAL TAX LIABILITY is: ${final_tax}`
}

function deductions(){
    
}