import { useState, useEffect } from 'react';
import { todayQuote } from './quotes.js';
import recipes from './recipes.js';

function getRandomRecipe(exclude) {
  let r;
  do {
    r = recipes[Math.floor(Math.random() * recipes.length)];
  } while (recipes.length > 1 && r === exclude);
  return r;
}

export default function App() {
  const [recipe, setRecipe] = useState(null);
  const [visible, setVisible] = useState(false);

  function handleFetch() {
    setVisible(false);
    const next = getRandomRecipe(recipe);
    setRecipe(next);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }

  useEffect(() => {
    if (recipe) {
      const t = setTimeout(() => setVisible(true), 30);
      return () => clearTimeout(t);
    }
  }, [recipe]);

  return (
    <div className="wrapper">
      <p className="label">🍳 Tagesrezept</p>

      <div className="headline">
        <span className="headline-black">Dein Rezept.</span>
        <em className="headline-rust">Für heute.</em>
      </div>

      <p className="subtext">
        Jeden Tag ein neues Rezept. Frisch für dich.
      </p>

      <blockquote className="quote">
        „{todayQuote}"
      </blockquote>

      <button className="btn" onClick={handleFetch}>
        Rezept holen
      </button>

      {recipe && (
        <div className={`card${visible ? ' card-visible' : ''}`}>
          <h2 className="card-title">{recipe.name}</h2>
          <p className="card-tag">{recipe.herkunft} · {recipe.kategorie}</p>

          <div className="card-section">
            <h3>Zutaten</h3>
            <ul className="ingredient-list">
              {recipe.zutaten.map((z, i) => (
                <li key={i}>
                  <span className="checkbox">☐</span>
                  {z}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-section">
            <h3>Zubereitung</h3>
            <ol className="step-list">
              {recipe.zubereitung.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
      <footer className="attribution">
        Icon von <a href="https://www.flaticon.com/de/kostenlose-icons/ofen" title="ofen Icons" target="_blank" rel="noopener noreferrer">Freepik – Flaticon</a>
      </footer>
    </div>
  );
}
