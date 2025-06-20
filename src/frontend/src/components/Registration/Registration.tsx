import styles from "./registration.module.scss";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { FacebookProvider } from "@kazion/react-facebook-login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const request = await fetch(
        `https://back-vonoselecto-bedagphgf7cgeqf3.uksouth-01.azurewebsites.net/api/user/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (!request.ok) throw new Error("Error");
      await request.json();
    } catch {
      setError("Catch error");
      console.log("Catch error");
    }
  };

  return (
    <GoogleOAuthProvider clientId="151411138542-of5dl4mgn6clfc4a4c70s8jdiu8udfcr.apps.googleusercontent.com">
      <div className={styles.box}>
        <h2 className={styles.box__title}>Registration in Vino Selecto</h2>
        <input
          type="email"
          placeholder="E-Mail"
          className={styles.box__input}
          value={email}
          onChange={(event) => setEmail(event?.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.box__input}
          value={password}
          onChange={(event) => setPassword(event?.target.value)}
          required
        />
        <p className={styles.box__text}>sign in with</p>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.box__google}>
          <GoogleLogin
            onSuccess={(credetialResponse) => {
              console.log(credetialResponse);
              navigate("/home");
            }}
          />
        </div>
        <FacebookProvider />
        <button
          onClick={handleRegistration}
          type="submit"
          className={styles.box__submit}
        >
          Registration
        </button>
        <a href="#">I have an account</a>
      </div>
    </GoogleOAuthProvider>
  );
};
