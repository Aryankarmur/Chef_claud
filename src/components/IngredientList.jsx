

const IngredientList = (props) => {
  return (
    <>
      <section className="ingedients_name">
          <div>
            <h1>Ingredients on hand:</h1>
            <ul className="ingredient-ul">
              {props.ingredients.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="data-div"ref={props.ref}>
            <div className="sub-data" >
              <h2>Reddy for a recipe?</h2>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button className="data-btn" onClick={props.handleRecipe} >
  Get Recipe
</button>
          </div>
        </section>
    </>
  )
}

export default IngredientList
