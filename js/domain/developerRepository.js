function addDeveloper(developer) {
    let developerId = Math.max(0, Math.max.apply(Math, developers.map((developer)=>developer.id))+1);
    Object.assign(developer, {id:developerId});
    
    developers.push(developer);
    developers.sort(nameCompare);
}

function editDeveloper(index, editedDeveloper) {
    let developerToEdit = developers[index];
    Object.assign(developerToEdit, editedDeveloper);
}

function tryAddDevLanguage(developerIndex, languageIndex) {
    let languageToAdd = Object.create(languages[languageIndex]);
    let developerToEdit = developers.find(developers[developerIndex]);
    if (!developerToEdit.languages.find((language)=>language.id==languageToAdd.id)===undefined)
        return false;

    developerToEdit.languages.push(languageToAdd);
    return true;
} 

function deleteDevLanguage(developerIndex, languageIndex){
    let developerToEdit = developers.find((developer)=>developer.id===developerId);
    developerToEdit.languages.splice(languageIndex, 1);
}

