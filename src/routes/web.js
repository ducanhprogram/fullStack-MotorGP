const express = require("express");
const {
    getHomepage,
    getABC,
    getDaihoccn,
    postCreateUser,
    getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

//router.Method('/router, handler);
router.get("/", getHomepage);

//Khai báo route  :: Để server để biết được có những router nào
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/daihoccn", getDaihoccn);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
