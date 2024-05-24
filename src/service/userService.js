const db = require("../models");

exports.createNewUser = async (data) => {
    try {
        let name = data.name;
        let gender = data.gender;
        let university = data.university;

        await db.User.create({
            name: name,
            gender: gender,
            university: university
        })

        return {
            message: "success"
        }
    } catch (error) {
        return {
            message: error
        }
    }
}

exports.getAllUser = async () => {
    try {
        const res = await db.User.findAll({
            attributes: ['id', 'name', 'gender', 'university'],
        });

        return res;
    } catch (error) {
        return {
            message: "error"
        }
    }
}

exports.getUser = async (uid) => {
    try {
        const res = await db.User.findAll({
            where: {
                id: uid
            },
            attributes: ['id', 'name', 'gender', 'university']
        });

        return res;
    } catch (error) {
        return {
            message: error
        }
    }
}

exports.deleteUser = async (data) => {
    try {
        await db.User.destroy({
            where: {
                id: data
            },
        });
    } catch (error) {
        return {
            message: error
        }
    }
}

exports.updateUser = async (uid, name, gender, university) => {
    try {
        await db.User.update(
            { name: name, gender: gender, university: university },
            {
                where: {
                    id: uid
                }
            }
        );
    } catch (error) {
        return {
            message: error
        }
    }
}