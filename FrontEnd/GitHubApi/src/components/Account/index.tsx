import { User } from "../../models/user";
import "./styles.css";

export default function Account(user: User) {
  return (
    <div className="account-details">
      <div className="account-details-img">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="account-details-content">
        <h3>Informações</h3>
        <div className="account-details-item">
          <h4>Perfil: </h4> <a href="">{user.url}</a>
        </div>
        <div className="account-details-item">
          <h4>Seguidores: </h4> <p>{user.followers}</p>
        </div>
        <div className="account-details-item">
          <h4>Localidade: </h4> <p>{user.location}</p>
        </div>
        <div className="account-details-item">
          <h4>Nome: </h4> <p>{user.name}</p>
        </div>
      </div>
    </div>
  );
}
