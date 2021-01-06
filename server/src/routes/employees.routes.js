const { Router } = require('express');
const router = Router();
const employeesCntrl = require('../controllers/employees.controller');

//CRUD
//would be the route /api/employees/
router.get('/', employeesCntrl.getEmployees);

router.post('/', employeesCntrl.createEmployee);

router.get('/:id', employeesCntrl.getEmployee);

router.put('/:id', employeesCntrl.editEmployee);

router.delete('/:id', employeesCntrl.deleteEmployee);

module.exports = router;

