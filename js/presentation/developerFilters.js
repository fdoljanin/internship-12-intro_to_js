function getDevelopersByType() {
    let message = "Choose developer type (backend/frontend/fullstack)";
    let option = getEnum(message, developerType);
    if (option === null) return;

    let developerList = developers.filter((developer) => developer.type == option);
    alert("Developer list: \n" + printDevelopers(developerList));
}

function getDevelopersByStatus() {
    let message = "Choose developer status (employed/unemployed/freelancer)";
    let option = getEnum(message, developerStatus);
    if (option === null) return;

    let developerList = developers.filter((developer) => developer.status == option);
    alert("Developer list: \n" + printDevelopers(developerList));
}

function getDevelopersByLanguage() {
    let message = "Choose language index to see developers:\n" + printLanguages(languages);
    let language = getArrayMember(message, languages);
    if (language === null) return;

    let developerList = developers.filter((developer) =>
        developer.languages.some(devLanguage => devLanguage.id == language.id));
    alert("Developer list: \n" + printDevelopers(developerList));
}