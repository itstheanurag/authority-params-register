const {users} = require("../data/users")

const registerUser = (req, res) => {
    let user = req.body;

    const {first_name, last_name, email, ip_address} = user
    
    let newUser = {
        id : users.length + 1,
        first_name,
        last_name,
        email,
        ip_address,
    }

    users.push(newUser)
    console.log(users)
    return res.status(201).send({message : 'registered successfully', data : newUser })

}

const showParams = (req, res) => {
    let pathParam = req.params.id
    let queryParam = req.query.last_name

    return res.status(200).send({message : "data recieved" , Data : {pathParam, queryParam}})

}


module.exports = {registerUser, showParams}