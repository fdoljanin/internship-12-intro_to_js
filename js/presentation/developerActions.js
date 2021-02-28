function addDeveloperAction() {
    let developer = new Object();

    developer.name = prompt("Enter developer name:");
    if (developer.name === null) return;


    developer.status = getEnum("Enter developer status (employed, unemployed, freelancer):", developerStatus);
    if (developer.status === null) return;

    if (developer.status == developerStatus.EMPLOYED) {
        let message = "Choose developer company index:\n" + printCompanies();
        let inputIndex = getInputIndex(message, companies.length);
        if (inputIndex === null) return;
        developer.company = companies[inputIndex];
    }

    developer.type = getEnum("Enter developer type (backend, frontend, fullstack):", developerType);
    if (developer.type === null) return;

    addDeveloper(developer);
}

function editDeveloperAction() {
    let developer = new Object();
    let message = "Choose developer index:\n" + printDevelopers();
    
    let inputIndex = getInputIndex(message, companies.length);
    if (inputIndex === null) return;

    newName = prompt("Enter developer name:");
    developer.name = newName===null ? developerToEdit.name : newName;

    newStatus = getEnum("Enter developer status (employed, unemployed, freelancer):", developerStatus);
    developer.status = newStatus===null ? developerToEdit.status : newStatus;

    if (newStatus == developerStatus.EMPLOYED) {
        let message = "Choose developer company index:\n" + printCompanies();
        let inputIndex = getInputIndex(message, companies.length);
        if (inputIndex === null) developer.company = developerToEdit.company;
        developer.company = companies[inputIndex];
    }

    newType = getEnum("Enter developer type (backend, frontend, fullstack):", developerType);
    developer.type = newType===null ? developerToEdit.type : newType;

    editDeveloper(inputIndex, developer);
}

function addDevLanguageAction {
    let message = "Choose developer index:\n" + printDevelopers();
    
    let developerIndex = getInputIndex(message, companies.length);
    if (developerIndex === null) return;
    
    while (true){
        let message = "Choose language index:\n" + printLanguages();
    
        let languageIndex = getInputIndex(message, languages.length);
        if (languageIndex === null) return;

        if(tryAddDevLanguage(developerIndex, languageIndex)) continue;
        
        alert("Language already added!");
    }
}

