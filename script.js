// var kaina = prompt("Kokia prekės kaina?")
// var PVM = kaina * 0.21
// var suPVM = kaina * 1.21
// var euro = "€"
// Number(kaina)
do{
    var kaina = prompt("Kokia prekės kaina?")
    var PVM = kaina * 0.21
    var suPVM = kaina * 1.21
    var euro = "€"
    Number(kaina)
    if (isNaN(kaina)) {
            alert("Netinka. Prašau įvesk numerį skaičiais!")
        } 
        else {
            console.log ("Prekės kaina su PVM:" , suPVM.toFixed(2) , euro)
            console.log ("PVM:" , PVM.toFixed(2) , euro)
            console.log ("Prekės kaina be PVM:" , kaina , euro)
        }
    }
    while(isNaN(kaina));

// Kad priimtu su kableliu naudoti toLocaleString?