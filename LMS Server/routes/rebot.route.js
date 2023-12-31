const router = require("express").Router();
const verify = require("../middleware/verifyToken");
const bookController = require("../controllers/rebot.controller");

router.get("/allbooks", verify, bookController.allBooks);

router.get("/categorybooks", verify, bookController.categoryBooks);

router.post("/", verify, bookController.addBook);

router.get("/:id", verify, bookController.getBook);

router.put("/:id", verify, bookController.updateBook);

router.delete("/:id", verify, bookController.deleteBook);

module.exports = router;
