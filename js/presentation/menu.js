seed();

function developerMenu() {
    let options = [addDeveloperAction, editDeveloperAction, deleteDeveloperAction,
        addDevLanguageAction, deleteDevLanguageAction, readDevelopers];

    let message = `Choose option:
        1. Add developer
        2. Edit developer
        3. Delete developer
        4. Add language to developer
        5. Delete language from developer
        6. See developers`;

    let option = getArrayMember(message, options);
    if (option === null) return;
    option();
    developerMenu();
}

function languageMenu() {
    let options = [addLanguageAction, editLanguageAction, deleteLanguageAction, readLanguages];

    let message = `Choose option:
        1. Add language
        2. Edit language
        3. Delete language
        4. See languages`;

    let option = getArrayMember(message, options);
    if (option === null) return;
    option();
    languageMenu();
}

function companyMenu() {
    let options = [addCompanyAction, editCompanyAction, deleteCompanyAction, readCompanies];

    let message = `Choose option:
        1. Add company
        2. Edit company
        3. Delete company
        4. See companies`;

    let option = getArrayMember(message, options);
    if (option === null) return;
    option();
    companyMenu();
}

function developerFilterMenu() {
    let options = [getDevelopersByType, getDevelopersByStatus, getDevelopersByLanguage];

    let message = `Choose option:
        1. Filter developers by type
        2. Filter developers by status
        3. Filter developers by language`;

    let option = getArrayMember(message, options);
    if (option === null) return;
    option();
    developerFilterMenu();
}

(function mainMenu() {
    let options = [developerMenu, companyMenu, languageMenu, developerFilterMenu];

    let message = `Choose menu:
        1. Developer CRUD
        2. Company CRUD
        3. Language CRUD
        4. Developer filters`;

    let option = getArrayMember(message, options);
    if (option === null) return;
    option();
    mainMenu();
})()