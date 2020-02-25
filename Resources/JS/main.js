var numero1;
var numero2;

var stOperation = "Sum";

function handleInput(stInput){

    nuValue = parseInt(document.getElementById(stInput).value)

    if(stInput == "fnumber"){

        numero1 = nuValue;

    }else{

        numero2 = nuValue;

    }//Fin condición

    operacionMatematica();


}

function HandleSelect(){

    stOperation = document.getElementById("ListOperation").value;
    operacionMatematica();

}

function operacionMatematica(){
  
    stRest = "";


    if(stOperation == "Sum"){

        stRest = numero1 + numero2;

        

    }else if(stOperation == "Res"){

        stRest = numero1 - numero2;

        
    
    }else if(stOperation == "Mul"){

        stRest = numero1 * numero2;

        

    }else{

        stRest = numero1 / numero2;

        

    }
    
    document.getElementById("NumberResult").innerHTML = stRest;

}
