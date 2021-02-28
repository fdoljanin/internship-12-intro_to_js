function nameCompare(first, second) {
    if (first.name > second.name) return 1;
    if (first.name < second.name) return -1;
    return 0;
}

function getNewId(list) {
    return list.reduce((accumulator, current) => Math.max(accumulator, current.id), 0) + 1;
}

function capitalizeString(string) {
    var splitString = string.toLowerCase().split(' ');
    for (let i = 0; i < splitString.length; ++i) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }

    return splitString.join(' ');
}
