function printLanguages(languageList) {
    let langs = "INDEX\tNAME\n";
    for (let i = 0; i < languageList.length; ++i) {
        langs += `${i + 1}.\t${languageList[i].name} \n`;
    }

    return langs;
}

function printCompanies() {
    let comps = "INDEX\tNAME\n";
    for (let i = 0; i < companies.length; ++i) {
        comps += `${i + 1}.\t${companies[i].name} \n`;
    }

    return comps;
}

function printDevelopers(developerList) {
    let devs = "INDEX   NAME   STATUS   TYPE\n";
    for (let i = 0; i < developerList.length; ++i) {
        devs += `${i + 1}. ${developerList[i].name} ${developerList[i].status.toLowerCase()} ${developerList[i].type.toLowerCase()}\n`;
    }

    return devs;
}

function getArrayMember(message, array) {
    let input = prompt(message);
    if (input == null) return null;
    let inputIndex = parseInt(input);

    if (!isNaN(inputIndex) && inputIndex > 0 && inputIndex <= array.length)
        return array[inputIndex - 1];

    alert("Enter valid input!");
    return getArrayMember(message, array);
}

function getEnum(message, typeEnum) {
    var input = prompt(message);
    if (input === null) return null;

    var inputEnum = typeEnum[input.toUpperCase()];
    if (inputEnum) return inputEnum;

    alert("Enter valid type!");
    return getEnum(message, typeEnum);
}