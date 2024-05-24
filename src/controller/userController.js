const userService = require("../service/userService")

exports.handleGetAllUser = async (req, res) => {
    try {
        let list = [];

        list = await userService.getAllUser();

        res.status(200).json(list);
    } catch (error) {
        return res.status(500).json({ message: "get all users false." })
    }
}

exports.handleGetUserById = async (req, res) => {
    try {
        const uid = req.params.id;
        user = await userService.getUSer(uid);

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "update a user false." });
    }
}

exports.handleCreateNewUser = async (req, res) => {
    try {
        let name = req.body.name;
        let gender = req.body.gender;
        let university = req.body.university;

        if (name === "" || gender === "" || university === "") {
            return res.status(400).json({ message: "req is empty" });
        }

        let data = await userService.createNewUser(req.body);

        return res.status(200).json({ message: data })
    } catch (error) {
        return res.status(500).json({ message: "create a new user false." })
    }
}

exports.handleUpdateUser = async (req, res) => {
    try {
        const uid = req.params.id;
        await userService.updateUser(uid, req.body.name, req.body.gender, req.body.university);

        return res.status(200).json({ message: "update success" });
    } catch (error) {
        return res.status(500).json({ message: "update a user false." });
    }
}

exports.handleDeleteUser = async (req, res) => {
    try {
        const uid = req.params.id;

        await userService.deleteUser(uid);

        return res.status(200).json({ message: "success" });
    } catch (error) {
        return res.status(500).json({ message: "delete a user false." });
    }
}