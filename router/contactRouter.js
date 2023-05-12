const express = require("express");
const {
  getContact,
  postContact,
  updateContact,
  deleteContact,
} = require("../controller/contactController");

const router = express.Router();

router.route("/").get(getContact).post(postContact);
router.route("/:id").put(updateContact).delete(deleteContact);

module.exports = router;
