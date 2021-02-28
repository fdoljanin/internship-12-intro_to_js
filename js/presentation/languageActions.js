function addLanguageAction(){
    let name = prompt("Enter language name:");
    if (name===null) return;
    addLanguage(name);
}

function editLanguageAction(){
    let message = "Choose language index:\n" + printLanguages(languages);
    
    let languageToEdit = getArrayMember(message, languages);
    if (languageToEdit === null) return;

    let newName = prompt(`Enter new name: (old: ${languageToEdit.name})`);
    if (newName === null) return;

    editLanguage(languageToEdit.id, newName);
}

function deleteLanguageAction(){
    let message = "Choose index of language to delete:\n" + printLanguages(languages);
    let languageToDelete = getArrayMember(message, languages);
    if (languageToDelete===null) return;
    let doesDelete = confirm(`Are you sure you want to delete ${languageToDelete.name}?`);
    if (doesDelete) deleteLanguage(languageToDelete.id);
}
