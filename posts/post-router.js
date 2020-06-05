const express = require("express");
//imports the database
const posts = require("../data/db");

const router = express.Router();
// Returns an array of all the post objects contained in the database.
router.get("/api/posts", (req, res) => {
  posts
    .find()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      console.log(err);

      res.status(500).json({
        error: "The posts information could not be retrieved.",
      });
    });
});
// Returns the post object with the specified id.
router.get("/api/posts/:id", (req, res) => {
    posts.findById(req.params.id)
    .then(post=> {
        if (post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        }
    })
    .catch(err => {
        console.log(err)

        res.status(500).json ({
            error: "The post information could not be retrieved."
        })
    })
});
// Creates a post using the information sent inside the request body.
router.post("/api/posts", (req, res) => {});
// Updates the post with the specified id using data from the request body.
// Returns the modified document, NOT the original.
router.put("/api/posts/:id", (req, res) => {});
// Removes the post with the specified id and returns the deleted post object.
// You may need to make additional calls to the database in order to satisfy this requirement.
router.delete("/api/posts/:id", (req, res) => {});
// Returns an array of all the comment objects associated
// with the post with the specified id.
router.get("/api/posts/:id/comments", (req, res) => {});
// Creates a comment for the post with the specified id using information
// sent inside of the request body.
router.post("/api/posts/:id/comments", (req, res) => {});

module.exports = router;
