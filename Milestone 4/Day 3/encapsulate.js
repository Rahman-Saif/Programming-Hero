class Player{
    #name;
    #birthday;
    constructor(name,birthday,monthlySalary,noOfmonths){
        this.#name=name;
        this.#birthday=birthday;
        this.monthlySalary=monthlySalary;
        this.noOfmonths=noOfmonths;
    }

    calculateAge(){
    const diff_ms=Date.now()-new Date(this.#birthday).getTime();
    const age_dt=new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear()-1978);
}

    getSalary(){
    return (this.monthlySalary*this.noOfmonths).toLocaleString();
}
}

const sakib=new Player("sakib","1987-03-24",34000,12);
console.log(sakib.calculateAge());
console.log(sakib.getSalary());