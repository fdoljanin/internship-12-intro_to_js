function addLanguage(name) {
    let newLanguage = {
        id: getNewId(languages),
        name: name
    };

    languages.push(newLanguage);
    languages.sort(nameCompare);
}

function editLanguage(id, newName) {
    let languageToEdit = languages.find((language) => language.id == id);
    languageToEdit.name = newName;

    languages.sort(nameCompare);
}

function deleteLanguage(id) {
    languages = languages.filter((language) => language.id !== id);

    for (let developer of developers) {
        developer.languages = developer.languages.filter((language) => language.id !== id);
    }
}