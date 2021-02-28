function addCompanyAction() {
    let name = prompt("Enter company name:");
    if (name === null) return;
    addCompany(name);
}

function editCompanyAction() {
    let message = "Choose company index:\n" + printCompanies();
    let companyToEdit = getArrayMember(message, companies);
    if (companyToEdit === null) return;

    let newName = prompt(`Enter new company name: (${companyToEdit.name})`);
    if (newName === null) return;

    editCompany(companyToEdit.id, newName);
}

function deleteCompanyAction() {
    let message = "Choose index of company to delete:\n" + printCompanies();
    let companyToDelete = getArrayMember(message, companies);
    if (companyToDelete === null) return;

    let doesDelete = confirm(`Are you sure you want to delete ${companyToDelete.name}?`);
    if (doesDelete) deleteCompany(companyToDelete.id);
}

function readCompanies() {
    let companiesString = "Companies list:\n" + printCompanies();
    alert(companiesString);
}
