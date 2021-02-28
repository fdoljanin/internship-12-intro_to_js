function addLanguageAction(){
    let name = prompt("Enter language name:");
    if (name===null) return;
    addLanguage(name);
}

function editLanguageAction(){
    let message = "Choose language index:\n" + printLanguages();
    
    let inputIndex = getInputIndex(message, languages.length);
    if (inputIndex === null) return;

    let newName = prompt("Enter new name:");
    if (newName === null) return;

    editLanguage(inputIndex, newName);
}

function deleteLanguageAction(){
    let message = "Choose index of language to delete:\n" + printLanguages();
    let inputIndex = getInputIndex(message, languages.length);
    let doesDelete = confirm(`Are you sure you want to delete ${languages[inputIndex]}?`);
    if (doesDelete) deleteLanguage(inputIndex);
}
