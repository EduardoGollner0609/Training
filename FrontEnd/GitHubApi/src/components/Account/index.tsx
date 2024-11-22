import "./styles.css";

export default function Account() {
  return (
    <div className="account-details">
      <div className="account-details-img">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.6495wXGc8-MjrTaqj5c09gHaHa&pid=Api&P=0&h=180"
          alt=""
        />
      </div>
      <div className="account-details-content">
        <h3>Informações</h3>
        <div className="account-details-item">
          <h4>Perfil: </h4> <a href="">https://api.github.com/users/acenelio</a>
        </div>
        <div className="account-details-item">
          <h4>Seguidores: </h4> <p>4379</p>
        </div>
        <div className="account-details-item">
          <h4>Localidade: </h4> <p>Uberlandia</p>
        </div>
        <div className="account-details-item">
          <h4>Nome: </h4> <p>Nelio Alves</p>
        </div>
      </div>
    </div>
  );
}
