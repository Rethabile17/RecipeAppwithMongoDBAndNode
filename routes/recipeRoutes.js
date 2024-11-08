const express = require("express");
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipeById,
  deleteRecipeById,
} = require("../controllers/recipeControllers");

const router = express.Router();

router.post("/recipes", createRecipe);
router.get("/recipes", getAllRecipes);
router.get("/recipes/:id", getRecipeById);
router.put("/recipes/:id", updateRecipeById);
router.delete("/recipes/:id", deleteRecipeById);

module.exports = router;