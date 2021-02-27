function addLanguage(name){
    let languageId = Math.max(0, Math.max.apply(Math, languages.map((language)=>language.id))+1);
    let language = {
        id: languageId,
        name: name
    };
    
    languages.push(language);
    languages.sort(nameCompare);
}

function editLanguage(id, newName){
    let languageToEdit = languages.find((language)=>language.id===id);
    languageToEdit.name = newName;

    languages.sort(nameCompare);
}

function deleteLanguage(index) {
    languages.splice(index,1);
}