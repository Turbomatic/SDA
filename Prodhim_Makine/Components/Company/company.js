class Company{
    constructor(name){
        this.name = name;
    }
    getCompanyName(){
        return this.name;
    }
    addCompany(company,companyList){
        companyList.push(company);
    }
}