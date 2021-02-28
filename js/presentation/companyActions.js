function addCompanyAction(){
    let name = prompt("Enter company name:");
    if (name===null) return;
    addCompany(name);
}

function editCompanyAction(){
    let message = "Choose company index:\n" + printCompanies();
    
    let inputIndex = getInputIndex(message, companies.length);
    if (inputIndex === null) return;

    let newName = prompt("Enter new company name:");
    if (newName === null) return;

    editCompany(inputIndex, newName);
}

function deleteCompanyAction(){
    let message = "Choose index of company to delete:\n" + printCompanies();
    let inputIndex = getInputIndex(message, companies.length);
    let doesDelete = confirm(`Are you sure you want to delete ${languages[inputIndex]}?`);
    if (doesDelete) deleteCompany(inputIndex);
}
