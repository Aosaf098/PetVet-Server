const User = require('../models/User')

exports.getUsers = async(req, res) => {
    try{
        const users = await User.find().select('-password')
        res.josn(users)
    } catch(err) {
        console.log(err.message)
        res.status(500).send('User Not Found')
    }
}