import "./styles.css";

export default function Search() {
  return (
    <main>
      <section id="section-search">
        <div className="search-account">
          <h2>Encontre um perfil Github</h2>
          <input type="text" placeholder="Usuário Github" />
          <button>Encontrar</button>
        </div>
      </section>
    </main>
  );
}
