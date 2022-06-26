import Button from '../button/Button.component';
import FormInput from '../formInput/FormInput.component';
import { useState } from 'react';

const Login = (props) => {
    const defaultFormData = {
        username: '',
        password: '',
    };

    const [formData, setFormData] = useState(defaultFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <span>Sign In with username and password.</span>
            <form>
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
