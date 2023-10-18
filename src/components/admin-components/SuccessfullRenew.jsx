import checkMark from "../../assets/icon/check-mark.svg";
import { useNavigate } from "react-router-dom";

export const SuccessfullRenew = () => {
   const navigate = useNavigate();
   return (
      <div className="login-content">
         <img className="check-mark" src={checkMark} />
         <h2>Пароль успішно змінено!</h2>
         <form className="login-form success-form">
            <button onClick={() => navigate("/login")}>Увійти в акаунт</button>
         </form>
      </div>
   );
};
