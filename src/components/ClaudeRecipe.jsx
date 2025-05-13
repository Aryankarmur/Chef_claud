import "../css/ClaudeRecipe.css"
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <section className="main-sec">
    <h2>Chef Claude Recommends:</h2>
              <article className="suggested-recipe-container" aria-live="polite">
               <ReactMarkdown>{props.recipe}</ReactMarkdown>  
              </article>
          </section>

  )
}

export default ClaudeRecipe
