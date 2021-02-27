function addCompany(name) {
    let companyId = Math.max(0, Math.max.apply(Math, companies.map((company)=>company.id))+1);
    let company = {
        id: companyId,
        name: name,
        employees: []
    };

    companies.push(company);
    companies.sort(nameCompare);
}

function editCompany(id, newName){
    let companyToEdit = companies.find((company)=>company.id===id);
    companyToEdit.name = newName;

    companies.sort(nameCompare);
}

function deleteCompany(index) {
    companies.splice(id,1);
}