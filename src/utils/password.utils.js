const bcrypt = require('bcryptjs');

// string hash password
const passwordUtil = async (password) => {
    const saltPassword = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, saltPassword)
}

// boolean
const passwordCompare = async (password, hasPassword) => {
    // return await bcrypt.compare(password, hasPassword);
    if (password === hasPassword) {
        return true
    } else {
        return false
    }
}

module.exports = { passwordUtil, passwordCompare };
