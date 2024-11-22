import axios from "axios";
import { ChangeEvent, useState } from "react";
import Account from "../../../components/Account";
import { User } from "../../../models/user";
import "./styles.css";

export default function Search() {
  const [messageError, setMessageError] = useState(false);

  const [user, setUser] = useState<User>();

  const [userName, setUserName] = useState("");

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSearch(event: any) {
    event.preventDefault();
    setUser(undefined);
    setMessageError(false);
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => setUser(response.data))
      .catch(() => {
        setMessageError(true);
      });
  }

  return (
    <main>
      <section id="section-search">
        <div className="search-account">
          <h2>Encontre um perfil Github</h2>
          <form onSubmit={handleSearch}>
            <input
              onChange={handleOnChange}
              value={userName}
              type="text"
              placeholder="Usuário Github"
            />
            <button type="submit" onClick={handleSearch}>
              Encontrar
            </button>
          </form>
        </div>
        {user && (
          <Account
            avatar_url={user?.avatar_url || ""}
            url={user?.url || ""}
            followers={user?.followers || ""}
            location={user?.location || ""}
            name={user?.name || ""}
          />
        )}
        {messageError && <h2>Erro ao buscar usuário</h2>}
      </section>
    </main>
  );
}
