const Router = require('express-promise-router')
const asyncHandler = require('express-async-handler')
const { protect } = require('../middleware/authMiddleware')
const { v4: uuidv4 } = require('uuid');
const db = require('../db');

const router = new Router()

// @route       GET api/v1/vehicles
// @desc        Get Vehicles 
// @access      Private

router.get('/', protect, asyncHandler ( async (req, res, next) => {

    // const { rows }  = await db.query('SELECT * FROM vehicle LEFT JOIN twoots on users.id = twoots.user_id;');
    const { rows }  = await db.query('SELECT * FROM vehicle;');

    res.status(200).json({
        success: true,
        rows
    });
}))



router.get('/:id', asyncHandler( async (req, res, next) => {

    const { id } = req.params;
    const { rows } = await db.query('SELECT users.id "userID", twoots.id "twootID", handle, name, avator, is_verfied, twoots.twoot, twoots.date, twoots.image FROM users LEFT JOIN twoots on users.id = twoots.user_id where users.id = $1;', [id])
    res.status(200).json({
        success: true,
        data: rows
    });
}))



router.put('/:id', asyncHandler( async (req, res, next) => {
    const { twoot } = req.body;
    const { id } = req.params;
    const { rows } = await db.query('UPDATE twoot SET twoot = $1 where id = $2 returning *;', [twoot, id]);

    res.status(200).json({
        success: true,
        data: rows
    });
}))

// @route       DELETE api/v1/vehicles
// @desc        delete a Vehicle 
// @access      Private

router.delete('/:id', asyncHandler( async (req, res, next) => {

    const { id } = req.params;
    await db.query('DELETE FROM twoots where id = $1;', [id]);

    res.status(200).json({
        success: true,
        data: 'Vehicle Deleted'
    });
}))

// @route       POST api/v1/vehicles
// @desc        Add a Vehicle 
// @access      Private

router.post('/', asyncHandler( async (req, res, next) => {

    
    const {name, vehicleNumber, weight, registrationNumber, vehicleType, engineSize, odometerReading, manufacture, description } = req.body;
    const img = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60';
    const id = uuidv4()

    const { rows } =  await db.query('INSERT INTO vehicle (id, name, vehicleNumber, registrationNumber, weight,  vehicleType,  engineSize,  odometerReading,  image,  manufacture,  description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *;', [id, name, vehicleNumber, registrationNumber, weight,  vehicleType,  engineSize,  odometerReading,  img,  manufacture,  description]);
    res.status(201).json({
        success: true,
        rows
    });


}))

module.exports = router