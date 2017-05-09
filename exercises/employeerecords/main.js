var employees = []

var Employee = function(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full-Time";
    this.printEmployeeForm = function () {
        Employee()
    }
}

var bestEmployee = new Employee("Bobby","CEO","$5200/Hr")
var worstEmployee = new Employee("Richard", "Janitor", "$4/Hr")
var normEmployee = new Employee("Jack", "Sales", "$19/Hr")
console.log(bestEmployee)
console.log(worstEmployee)
console.log(normEmployee)