import { useState } from "react";
import { HfInference } from "@huggingface/inference";
import "../css/Main.css";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";
import { useRef } from "react";
import { useEffect } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState("");
  const resipeSection = useRef(null);

  useEffect(() => {
    if (recipeDetail !== "" && resipeSection.current !== null) {
        resipeSection.current.scrollIntoView({behavior:"smooth"});
  }
},[recipeDetail])


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredients");

    if (newIngredient.trim() !== "") {
      setIngredients((prev) => [...prev, newIngredient.trim()]);
    }

    e.target.reset();
  };

  const handleRecipe = async () => {
    const inputRecipe = ingredients.join(", ");
    const hf = new HfInference("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");
    try {
      const response = await hf.chatCompletion({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
          { role: "system", content: "give this so i can render on webpage" },
          {
            role: "user",
            content: `I have ${inputRecipe}. Please give me a recipe you'd recommend I make!`,
          },
        ],
        max_tokens: 1024,
      });
      setRecipeDetail(response.choices[0].message.content);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredients"
          placeholder="e.g. oregano"
          name="ingredients"
          autoFocus
        />
        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          handleRecipe={handleRecipe}
          ref={resipeSection}
        />
      )}

      {recipeDetail && <ClaudeRecipe recipe={recipeDetail} />}
    </main>
  );
};

export default Main;
