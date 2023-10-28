const mongoose = require('mongoose')

const validateEmail = function (email) {
    const re = 
    return re.test(email)
};

const studentSchema = new mongoose