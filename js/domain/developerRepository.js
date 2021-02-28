function addDeveloper(developer) {
    let developerId = Math.max(0, Math.max.apply(Math, developers.map((developer)=>developer.id))+1);
    Object.assign(developer, {id:developerId});
    if (developer.company!==null)
        developer.company.employees.push(developer);
    developers.push(developer);
    developers.sort(nameCompare);
}

function editDeveloper(id, editedDeveloper) {
    let developerToEdit = developers.find((developer)=>developer.id===id);
    if (developerToEdit.company!==editedDeveloper.company){
        if (developerToEdit.company)
            developerToEdit.company.employees = developerToEdit.company.employees.filter((developer)=>developer.id!==id);
        if (editedDeveloper.company)
            editedDeveloper.company.employees.push(developerToEdit);
    }

    Object.assign(developerToEdit, editedDeveloper);
}

function deleteDeveloper(id){
    developers = developers.filter((developer)=>developer.id!==id);

    developerCompany = developers.find((developer)=>developer.id===id).company;
    if (developerCompany)
        developerCompany.employees = developerCompany.employees.filter((developer)=>developer.id!==id);

}

function addDevLanguage(developerId, language) {
    let developerToEdit = developers.find((developer)=>developer.id===developerId);
    developerToEdit.languages.push({...language});
} 

function deleteDevLanguage(developerId, deletedLanguage){
    let developerToEdit = developers.find((developer)=>developer.id===developerId);
    developerToEdit.languages = developerToEdit.languages.filter((language)=>language.id!==deletedLanguage.id);
}

