


const router = require("express").Router();


const employee = require('./../controllers/emprobtot.controller');

router.get("/", employee.listAllEmployee);
router.get("/employee",employee.listAllEmployee);
router.post("/employee", employee.createEmployee);

router.get("/employee/:employeeId",employee.readEmployee);

router.put("/employee/:employeeId",employee.updateEmployee);

router.delete("/employee/:employeeId",employee.deleteEmployee);

module.exports = router;
