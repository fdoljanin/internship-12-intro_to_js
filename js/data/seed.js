function seed() {

    addLanguage("C");
    addLanguage("C++");
    addLanguage("C#");
    addLanguage("Python");
    addLanguage("Ruby");
    addLanguage("Fortran");
    addLanguage("COBOL");
    addLanguage("PHP");

    addCompany("Google");
    addCompany("Facebook");
    addCompany("Tesla");

    let devSeed = [];

    devSeed[0] = {
        name: "Sundar Pichai",
        status: developerStatus.EMPLOYED,
        company: companies[1],
        type: developerType.BACKEND,
        languages: [{ ...languages[0] }, { ...languages[6] }]
    }

    devSeed[1] = {
        name: "Mark Zuckerberg",
        status: developerStatus.EMPLOYED,
        company: companies[0],
        type: developerType.FRONTEND,
        languages: [{ ...languages[5] }, { ...languages[4] }]
    }

    devSeed[2] = {
        name: "George Hotz",
        status: developerStatus.UNEMPLOYED,
        company: null,
        type: developerType.FULLSTACK,
        languages: [{ ...languages[0] }, { ...languages[1] }, { ...languages[3] }, { ...languages[6] }]
    }

    devSeed[3] = {
        name: "Elon Musk",
        status: developerStatus.EMPLOYED,
        company: companies[2],
        type: developerType.FULLSTACK,
        languages: [{ ...languages[7] }, { ...languages[5] }, { ...languages[3] }, { ...languages[1] }]
    }

    devSeed[4] = {
        name: "Tom Scott",
        status: developerStatus.FREELANCER,
        company: null,
        type: developerType.FRONTEND,
        languages: [{ ...languages[7] }]
    }

    devSeed[5] = {
        name: "Larry Page",
        status: developerStatus.EMPLOYED,
        company: companies[1],
        type: developerType.BACKEND,
        languages: [{ ...languages[0] }]
    }

    for (let dev of devSeed)
        addDeveloper(dev);
}