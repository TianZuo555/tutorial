import './auth.styles.scss'

import Login from "../../components/login/Login.component";
import SignUp from "../../components/signup/SignUp.component";

export default function Ath(props) {
    return (
        <div className="auth-container">
            <Login></Login>
            <SignUp></SignUp>
        </div>
    );
}
