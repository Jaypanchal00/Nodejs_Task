    const usermodel = require("../model/usermodel");
    const jwt = require("jsonwebtoken")

    // CREATE (Register)
    const Register = async (req, res) => {
        const data = await usermodel.create(req.body);
        res.send(data);
    };

    const local = (req,res)=>{
        return res.send("logged Successfully")
    }

    // LOGIN
    const Login = async (req, res) => {
        const { email, password } = req.body;

        // 1) Email check
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }


        if(user && user.password==password){
            let payload = {
                username:user.username,
                password:user.password,
                id:user.id
            }

            let token = jwt.sign(payload,"private-key")
            console.log(token)

            return res.cookie("token",token).send("logged in")
        }

        // 2) Password check
        if (user.password !== password) {
            return res.status(400).send({ message: "Incorrect password" });
        }

        res.send({
            message: "Login successful",
            user
        });
    };

    // READ (GET all)
    const GetUser = async (req, res) => {
        const data = await usermodel.find();
        res.send(data);
    };
    // UI View (Render Users List)
    const UserPage = async (req, res) => {
        const users = await usermodel.find();
        res.render("users", { users });
    };



    // DELETE (by ID)
    const DeleteUser = async (req, res) => {
        const data = await usermodel.findByIdAndDelete(req.params.id);
        res.send({ message: "User Deleted", data });
    };

    // UPDATE (Edit user)
    const EditUser = async (req, res) => {
        const id = req.params.id;
        const data = await usermodel.findByIdAndUpdate(id, req.body, { new: true });
        res.send(data);
    };

    const verifyToken = (req,res)=>{
        console.log(req.headers)
        let token = req.headers.authorization.split(' ')[1]
        let decoded = jwt.verify(token,'private-key')
        return res.send(decoded)
    }

    module.exports = { Register, Login, GetUser, DeleteUser, EditUser, UserPage,local,verifyToken};