import { useState, useEffect } from 'react';
import './login.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../redux/store/action/authAction';
import { useSelector, useDispatch } from 'react-redux/es/exports';

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const state = useSelector((state) => state.authReducer);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(authLogin(user));
                navigate('/');
            })
            .catch((error) => {
                setError(true);
            });
    };
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.currentUser));
    }, [state.currentUser]);
    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <h1>ADMIN LOGIN</h1>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <span>Tài khoản mật khẩu không đúng</span>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
