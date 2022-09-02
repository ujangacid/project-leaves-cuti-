const dotenv = require('dotenv');
const JwtUtil = require('../utils/jwt.utils');

const AuthenticationService = (peopleService) => {
    dotenv.config();
    const {findNipPassword} = peopleService;

    const login = async (payload) => {
        const people =
            await findNipPassword(
                payload.nip,
                payload.password
            );
        if (!people) return `Invalid account!`;
        return JwtUtil().sign(people);;
    }

    return {
        login
    }
}

module.exports = AuthenticationService