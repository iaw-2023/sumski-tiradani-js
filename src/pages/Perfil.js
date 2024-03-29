import { useEffect, useState } from "react";
import PurchaseHistory from "../components/perfil/PurchaseHistory";
import CenteredContent from "../layouts/CenteredContent";
import { useAuth0 } from "@auth0/auth0-react";

const Perfil = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const {
    user,
    loginWithRedirect,
    logout,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const getProfileData = async () => {
        const token = await getAccessTokenSilently();
        await fetch(API_URL + "/compras/" + user.email, {
          method: "GET",
          headers: {
            "X-CSRF-TOKEN": "",
            Authorization: `Bearer ${token}`,
            accept: "application/json",
            "content-type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) throw new Error("Error de Red");
            return response.json();
          })
          .then((data) => {
            setLoading(false);
            setHistory(data);
          })
          .catch((error) => {
            setLoading(false);
            setErrorMessage("Error");
          });
      };
      getProfileData();
    }
  }, [API_URL, isAuthenticated, user, getAccessTokenSilently]);

  if (isAuthenticated)
    return (
      <CenteredContent>
        <p className="text-3xl font-bold">Perfil</p>
        <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0">
          <p className="text-2xl align-middle">
            Hola {user.email} {":)"}
          </p>
          {!user.email_verified && (
            <p className="inline md:hidden italic text-red-800 dark:text-red-500 align-bottom">
              Recordá verificar tu mail para poder realizar compras
            </p>
          )}
          <button
            className="bg-red-700 rounded-lg p-2 px-4 text-white font-bold w-full md:w-fit md:ml-auto hover:bg-red-900"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Desconectarse
          </button>
        </div>
        {!user.email_verified && (
          <p className="hidden md:inline italic text-red-800 dark:text-red-500 align-bottom">
            Recordá verificar tu mail para poder realizar compras
          </p>
        )}
        <p className="text-3xl font-bold">Tus Compras</p>
        <PurchaseHistory
          history={history}
          loading={loading}
          errorMessage={errorMessage}
        />
      </CenteredContent>
    );
  else {
    return loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
    });
  }
};

export default Perfil;
