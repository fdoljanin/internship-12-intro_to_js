function printLanguages(){
    let langs = "INDEX\tNAME\n";
    for (let i=0; i<languages.length; ++i){
        langs += `${i+1}.\t${languages[i].name} \n`;
    }

    return langs;
}

function printCompanies(){
    let comps = "INDEX\tNAME\n";
    for (let i=0; i<companies.length; ++i){
        comps += `${i+1}.\t${companies[i].name} \n`;
    }

    return comps;
}

function printDevelopers(){
    let devs = "INDEX   NAME   STATUS   TYPE";
    for (let i=0; i<developers.length; ++i){
        devs += `${i+1}. ${developers[i].name} ${developers[i].status} ${developers[i].type}$\n`;
    }

    return devs;
}


function getInputIndex(message, max){
    let input = prompt(message);
    if (input==null) return null;
    let inputIndex = parseInt(input);
    
    if(!isNaN(inputIndex) && inputIndex>0 && inputIndex<=max) return inputIndex-1;

    alert("Enter valid input!");
    return getInputIndex(message, max);
}

function getEnum(message, typeEnum){
    var input = prompt(message).toUpperCase();
    if (input===null) return null;

    var inputEnum = typeEnum[input];
    if (inputEnum) return inputEnum;
    
    alert("Enter valid type!");
    getEnum(message, typeEnum);   
}