const connection = require("../config/database");
const {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
    res.send("Check ABC");
};

// res.send("<h1>Nhom Do An CN4</h1>");
//views động   ==> render
const getDaihoccn = (req, res) => {
    res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body);
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email = ", email, "name = ", name, "city = ", city);
    //     INSERT INTO Users (email,name, city)
    // VALUES ("Huong", "huona@gmail.com", "Ho Chi Minh");

    // onnection.query(
    //     ` INSERT INTO Users (email,name, city) VALUES (?,?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('Created user succed!');
    //     }

    //let{email. name. ctiy}

    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email,name, city) VALUES (?,?,?)`,
        [email, name, city]
    );

    console.log(">>Check results: ", results);

    res.send("Created user succed!!!");
    // connection.query("SELECT * FROM Users", function (err, results, fields) {
    //     console.log(">>>results= ", results); // results contains rows returned by server
    // }

    // const [results, fields] = await connection.query("SELECT * FROM Users");
    // console.log(">>>Check results: ", results);
};

const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId);

    res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, city, name, userId);

    console.log(
        ">>> email = ",
        email,
        "name = ",
        name,
        "city = ",
        city,
        "userId= ",
        userId
    );

    // res.send("Updated user succed!!!");
    res.redirect("/");
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId);
    res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;

    await deleteUserById(id);
    res.redirect("/");
};
//Export ra nhiều biến
module.exports = {
    getHomepage,
    getABC,
    getDaihoccn,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
};
