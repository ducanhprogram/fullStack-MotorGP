const express = require("express");
const {
    getHomepage,
    getABC,
    getDaihoccn,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

//router.Method('/router, handler);
router.get("/", getHomepage);

//Khai báo route  :: Để server để biết được có những router nào
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/daihoccn", getDaihoccn);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

module.exports = router;
