function addCompany(name) {
    let companyId = Math.max(0, Math.max.apply(Math, companies.map((company) => company.id)) + 1);
    let company = {
        id: companyId,
        name: name,
        employees: []
    };

    companies.push(company);
    companies.sort(nameCompare);
}

function editCompany(id, newName) {
    let companyToEdit = companies.find((company) => company.id === id);
    companyToEdit.name = newName;

    companies.sort(nameCompare);
}

function deleteCompany(id) {
    companies = companies.filter((company) => company.id !== id);

    for (developer in developers) {
        if (developer.company.id == id) {
            developer.company = null;
            developer.status = developerStatus.UNEMPLOYED;
        }
    }
}