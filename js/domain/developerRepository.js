function addDeveloper(newDeveloper) {
    Object.assign(newDeveloper, { id: getNewId(developers) });
    if (newDeveloper.company !== null)
        newDeveloper.company.employees.push(newDeveloper);

    newDeveloper.name = newDeveloper.name.replace(/\s{2,}/g, ' ');
    newDeveloper.name = newDeveloper.name.trim();
    newDeveloper.name = capitalizeString(newDeveloper.name);

    developers.push(newDeveloper);
    developers.sort(nameCompare);
}

function editDeveloper(id, editedDeveloper) {
    let developerToEdit = developers.find((developer) => developer.id == id);
    if (developerToEdit.company !== editedDeveloper.company) {
        if (developerToEdit.company)
            developerToEdit.company.employees = developerToEdit.company.employees.filter((developer) => developer.id !== id);
        if (editedDeveloper.company)
            editedDeveloper.company.employees.push(developerToEdit);
    }

    Object.assign(developerToEdit, editedDeveloper);
}

function deleteDeveloper(id) {
    developerCompany = developers.find((developer) => developer.id === id).company;
    if (developerCompany)
        developerCompany.employees = developerCompany.employees.filter((developer) => developer.id !== id);

    developers = developers.filter((developer) => developer.id !== id);
}

function addDevLanguage(developerId, language) {
    let developerToEdit = developers.find((developer) => developer.id == developerId);
    developerToEdit.languages.push({ ...language });
}

function deleteDevLanguage(developerId, deletedLanguage) {
    let developerToEdit = developers.find((developer) => developer.id == developerId);
    developerToEdit.languages = developerToEdit.languages.filter((language) => language.id !== deletedLanguage.id);
}

