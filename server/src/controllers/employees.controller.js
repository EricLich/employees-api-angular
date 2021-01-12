const employeeCntrl = {};
const Employee = require('../models/Employee');

//GET ALL EMPLOYEES
employeeCntrl.getEmployees = async (req, res) =>{
    const employees = await Employee.find()
                    .then(employees => res.json(employees))
                    .catch(err => res.send(err))
}

//GET ONE EMPLOYEE
employeeCntrl.getEmployee = async (req, res) =>{
    const employee = await Employee.findOne({_id: req.params.id})
                    .then(employee => res.send(employee))
                    .catch(err => res.send({message: "Employee not found"}))
}

//CREATE EMPLOYEE
employeeCntrl.createEmployee = async (req, res) =>{
    const newEmployee = new Employee(req.body);
    await newEmployee.save()
            .then(employee => res.send({'message': "Employee created"}))
            .catch(err => console.log(err));
}

//EDIT EMPLOYEE
employeeCntrl.editEmployee = async (req, res) =>{
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body)
                        .then(employee => res.json({status: "Employee updated"}))
                        .catch(err => console.log(err));
                    }

//DELETE EMPLOYEE
employeeCntrl.deleteEmployee = async (req, res) =>{
    const employee = await Employee.findByIdAndDelete(req.params.id)
            .then(employee => res.json({status: "Employee deleted"}))
            .catch(err => console.log(err));
}


module.exports = employeeCntrl;