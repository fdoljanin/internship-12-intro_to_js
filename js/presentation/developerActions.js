function addDeveloperAction() {
    let newDeveloper = new Object();

    newDeveloper.name = prompt("Enter developer name:");
    if (newDeveloper.name === null) return;
    newDeveloper.status = getEnum("Enter developer status (employed, unemployed, freelancer):", developerStatus);
    if (newDeveloper.status === null) return;

    if (newDeveloper.status == developerStatus.EMPLOYED) {
        let message = "Choose developer company index:\n" + printCompanies();
        newDeveloper.company = getArrayMember(message, companies);
        if (newDeveloper.company === null) return;
    }
    else newDeveloper.company = null;

    newDeveloper.type = getEnum("Enter developer type (backend, frontend, fullstack):", developerType);
    if (newDeveloper.type === null) return;

    newDeveloper.languages = [];

    addDeveloper(newDeveloper);
}

function editDeveloperAction() {
    let developerEdited = new Object();

    let message = "Choose developer index:\n" + printDevelopers(developers);
    let developerToEdit = getArrayMember(message, developers);
    if (developerToEdit === null) return;

    newName = prompt(`Enter developer name: (old: ${developerToEdit.name})`);
    developerEdited.name = newName === null ? developerToEdit.name : newName;

    message = `Enter developer status (employed, unemployed, freelancer): (old: ${developerToEdit.status})`;
    newStatus = getEnum(message, developerStatus);
    developerEdited.status = newStatus === null ? developerToEdit.status : newStatus;

    if (newStatus == developerStatus.EMPLOYED) {
        let message = `Choose developer company index:\n` + printCompanies();
        let newCompany = getArrayMember(message, companies);
        if (newCompany === null) developer.company = developerToEdit.company;
        developerEdited.company = newCompany;
    }
    else developerEdited.company = null;

    message = `Enter developer type (backend, frontend, fullstack): (old: ${developerToEdit.type})`;
    newType = getEnum(message, developerType);
    developerEdited.type = newType === null ? developerToEdit.type : newType;

    editDeveloper(developerToEdit.id, developerEdited);
}

function deleteDeveloperAction() {
    let message = "Choose developer index:\n" + printDevelopers(developers);
    let developerToDelete = getArrayMember(message, developers);
    if (developerToDelete === null) return;

    if (confirm(`Are you sure you want to delete ${developerToDelete.name}?`))
        deleteDeveloper(developerToDelete.id);
}

function addDevLanguageAction() {
    let message = "Choose developer index:\n" + printDevelopers(developers);
    let developerToEdit = getArrayMember(message, developers);
    if (developerToEdit === null) return;

    let availableLanguages = languages.filter((language) =>
        !developerToEdit.languages.some(devLanguage => devLanguage.id == language.id));

    while (true) {
        let message = "Choose language index:\n" + printLanguages(availableLanguages);
        let addedLanguage = getArrayMember(message, availableLanguages);
        if (addedLanguage === null) return;

        addDevLanguage(developerToEdit.id, addedLanguage);
        availableLanguages = availableLanguages.filter((language) => language !== addedLanguage);
    }
}

function deleteDevLanguageAction() {
    let message = "Choose developer index:\n" + printDevelopers(developers);
    let developerToEdit = getArrayMember(message, developers);
    if (developerToEdit === null) return;

    while (true) {
        let message = "Choose language index:\n" + printLanguages(developerToEdit.languages);

        let deletedLanguage = getArrayMember(message, developerToEdit.languages);
        if (deletedLanguage === null) return;
        if (confirm(`Do you want to remove ${deletedLanguage.name}?`))
            deleteDevLanguage(developerToEdit.id, deletedLanguage);
    }
}

function readDevelopers() {
    let developersString = "Developer list: \n" + printDevelopers(developers);
    alert(developersString);
}