function addCompany(name) {
    let newCompany = {
        id: getNewId(companies),
        name: name,
        employees: []
    };

    companies.push(newCompany);
    companies.sort(nameCompare);
}

function editCompany(id, newName) {
    let companyToEdit = companies.find((company) => company.id === id);
    companyToEdit.name = newName;

    companies.sort(nameCompare);
}

function deleteCompany(id) {
    companies = companies.filter((company) => company.id !== id);

    for (developer of developers) {
        if (developer.company?.id == id) {
            developer.company = null;
            developer.status = developerStatus.UNEMPLOYED;
        }
    }
}