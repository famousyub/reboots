const Employee = require("../models/emprebot");


exports.listAllEmployee = async (req, res) => {
  
    try {
      const book = await Employee.find();
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
 
};

exports.readEmployee = async (req, res) => {
 
    try {
      const book = await Employee.findById(req.params.employeeId);
      console.log(req.params.id);
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
 
};

exports.categoryBooks = async (req, res) => {
 
    try {
      const book = await Employee.find({ category: req.query.id });
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json("Error " + err);
    }
  
};

exports.createEmployee = async (req, res) => {
 
    const emp = new Employee(req.body);

    try {
      const b1 = await emp.save();
      res.status(200).json(b1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }

};

exports.updateEmployee = async (req, res) => {
 
    try {
      const book = await Employee.findByIdAndUpdate(req.params.employeeId, req.body);
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
 
};

exports.deleteEmployee = async (req, res) => {
  
    try {
     
      const book = await Employee.findById(req.params.employeeId);
      const b1 = await book.remove();
      res.status(200).json(b1);
    } catch (err) {
      res.status(500).json("Error" + err);
    }
 
};
