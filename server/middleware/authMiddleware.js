const asyncHandler = require('express-async-handler')
// const jwt = require('jsonwebtoken')
// const { pool } = require('../db');

const protect = asyncHandler(async (req, res, next) => {
    
    let token;
    next();

    // if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        
    //     token = req.headers.authorization.split(' ')[1];
    //     try {
    //         const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //         const { rows } = await pool.query('SELECT users.id, username, name, avator, is_verfied, date FROM users WHERE users.id = $1', [decoded.user.id]);
    //         const currentUser = rows[0]

    //         if(!currentUser){
    //             res.status(401)
    //             throw new Error('Not authorized to access this route, token failed')
    //         }
    //         req.user = currentUser
    //         next();
    //     } catch (error) {
    //         console.log(error)
    //         res.status(401)
    //         throw new Error('Not authorized to access this route, token failed')
    //     }
    // }

    // if (!token) {
    //     res.status(401)
    //     throw new Error('Not authorized to access this route, no token')
    // }

})



module.exports = {
    protect
}