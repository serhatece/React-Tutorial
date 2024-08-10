import { useState } from "react";
import "../css/Auth.css";
import { IoLogoGoogleplus } from "react-icons/io";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Auth() {
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("Kullanıcı Oluşturuldu");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Giriş Yapilamadi: " + error.message);
    }
  };

  return (
    <div className="auth">
      <h3 className="auth-header">Giriş Yap / Kaydol</h3>
      <div className="input-div">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email Adres"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Şifre"
        />
      </div>
      <div>
        <button onClick={loginWithGoogle} className="btn-google">
          <IoLogoGoogleplus className="react-google-icon" />
          Google ile Giriş
        </button>
        <div className="btn-container">
          <button onClick={login} className="btn-giriş">
            Giriş Yap
          </button>
          <button onClick={register} className="btn-kaydol">
            Kaydol
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
