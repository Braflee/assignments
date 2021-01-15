let employees = []

function Employee(name, job, salary){
    this.name = name
    this.job = job
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function(){
    console.log(this.name + this.job + this.salary + this.status)
}

let Gosh = new Employee("Gosh", "Darning things", "4 newts/day")
Gosh.status = "Contract"
employees.push(Gosh)
let Brad = new Employee("Brad", "Student", "Air")
employees.push(Brad)
let Granny = new Employee("Granny", "Baking Cookies", "1 Hug/hr")
employees.push(Granny)

employees[0].printEmployeeForm()


