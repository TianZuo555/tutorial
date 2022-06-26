import Button from '../button/Button.component';
import FormInput from '../formInput/FormInput.component';
import { UserContext } from '../../contexts/User.context';
import { postByApiEndpoint } from '../../apiUtils/apiUtils';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userEndPoints } from '../../apiUtils/apiEndPoints';

const Login = (props) => {
    const navigation= useNavigate();

    const defaultFormData = {
        username: '',
        password: '',
    };

    const [formData, setFormData] = useState(defaultFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const { setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = await postByApiEndpoint(userEndPoints.login, formData);
        if (user) {
            setUser(user);
            navigation('/');
        }
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <span>Sign In with username and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={'User Name'}
                    name={'username'}
                    onChange={handleChange}
                    value={formData.username}
                    type='text'
                />
                <FormInput
                    label={'Password'}
                    name={'password'}
                    onChange={handleChange}
                    value={formData.password}
                    type='password'
                />
                <Button btnType={'inverted'}>Login</Button>
            </form>
        </div>
    );
};

export default Login;
