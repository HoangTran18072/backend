
const User = require('../model/User');

const postNewUser = (req, res) =>
{
    const user = new User(req.body);
    user.save().then(() => res.status(200).send('save success')
    ).catch((error) => res.status(404).send(error))
    
}

const getAllUser = (req, res) =>
{
    let currentPage = req.params.page;
    let nUserPerPage = 3;
    User.find({}).then((user) => {
        let totalUser = user.length;
        let totalPage = Math.ceil(totalUser / nUserPerPage);
        let userInPageX = user.slice(nUserPerPage * (currentPage - 1), nUserPerPage * currentPage)
        let data = {
            totalUser,
            nUserPerPage,
            totalPage,
            userInPageX
        }
        res.status(200).send(data)
    })
    .catch(() => res.status(400).send('something wrong!'))
}

const getUserByID = (req, res) => {
    let _id = req.params.id;
    User.findById(_id)
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.status(200).send(user);
        })
        .catch(error => {
            console.error('Error while fetching user by ID:', error);
            res.status(500).send('Internal Server Error');
        });
};


const updateUserByID = (req, res) => {
    const { ID, Email, FirstName, LastName } = req.body;
    const newData = {
        Email: Email,
        FirstName: FirstName,
        LastName: LastName
    };
    User.findByIdAndUpdate(ID, newData, { new: true })
        .then(updatedUser => {
            if (!updatedUser) {
                return res.status(404).send('User not found');
            }
            res.status(200).send(updatedUser);
        })
        .catch(error => {
            res.status(500).send('Something went wrong');
        });
};

const deleteUserByID = (req, res) =>{
    const ID = req.params.id;
    User.findByIdAndDelete(ID)
        .then(deletedUser => {
            if (!deletedUser) {
                return res.status(404).send('User not found');
            }
            res.status(200).send(deletedUser);
        })
        .catch(error => {
            console.error('Error deleting user:', error.message);
            res.status(500).send(error);
        });
}


module.exports = {postNewUser, getAllUser, getUserByID, updateUserByID, deleteUserByID};