const router = require('express').Router();

// GET portfolio app
router.get("/", async (req, res) => {
    res.render("portfolio");
});

// Get contact Page
router.get("/contact", async (req, res) => {
    res.render('contact');
});

 module.exports = router;