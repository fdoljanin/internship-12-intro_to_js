function addDeveloper(name, status, company, type, languages) {
    let developerId = Math.max(0, Math.max.apply(Math, developers.map((developer)=>developer.id))+1);
    let developer = {
        id: developerId,
        name: name,
        status: status,
        company: company,
        type: type,
        languages: languages
    }
    
    developers.push(developer);
    developers.sort(nameCompare);
}

function editDeveloper(id, newName, newStatus, newCompany, newType) {
    let developerToEdit = developers.find((developer)=>developer.id===id);
    developerToEdit.name = newName;
    developerToEdit.status = newStatus;
    developerToEdit.company = newCompany;
    developerToEdit.type = newType;
}

function addDevLanguage(developerId, languageId) {
    let languageToAdd = Object.create(languages.find((language)=>language.id===languageId));
    let developerToEdit = developers.find((developer)=>developer.id===developerId);
    developerToEdit.languages.push(languageToAdd);
} 

function deleteDevLanguage(developerId, languageIndex){
    let developerToEdit = developers.find((developer)=>developer.id===developerId);
    developerToEdit.languages.splice(languageIndex, 1);
}

