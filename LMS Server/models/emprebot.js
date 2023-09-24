const mongoose = require('mongoose');

// Define collection and schema
const  emprebotSchema = mongoose.Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'employees'
})
module.exports = mongoose.model('Employees', emprebotSchema)