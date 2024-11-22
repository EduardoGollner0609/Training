import { Link } from "react-router-dom";
import "./styles.css";

export default function Introduction() {
  return (
    <main>
      <section id="section-introduction">
        <div className="introduction-invite">
          <h2>Desafio Github API</h2>
          <h3>DevSuperior - Escola de programação</h3>
          <Link to="/search">
            <button>Começar</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
