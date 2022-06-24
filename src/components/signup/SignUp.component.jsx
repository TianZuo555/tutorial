import FormInput from '../formInput/FormInput.component';
import { postByApiEndpoint } from '../../apiUtils/apiUtils';
import { useState } from 'react';
import { userEndPoints } from '../../apiUtils/apiEndPoints';

export function SignUp() {
    const defaultFormData = {
        name: '',
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
    };

    const [formData, setFormData] = useState(defaultFormData);
    const { name, username, password, email, confirmPassword } = formData;

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await postByApiEndpoint(userEndPoints.signUp, formData);
        console.log(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Sign Up with username and password.</h2>
            <form onSubmit={onSubmit}>
                <FormInput label={'Name'} name={'name'} onChange={handleChange} value={name} type='text' />
                <FormInput
                    label={'User Name'}
                    name={'username'}
                    onChange={handleChange}
                    value={username}
                    type='text'
                />
                <FormInput
                    label={'Password'}
                    name={'password'}
                    onChange={handleChange}
                    value={password}
                    type='password'
                />
                <FormInput
                    label={'Password Confirmation'}
                    name={'conformPassword'}
                    onChange={handleChange}
                    value={confirmPassword}
                    type='password'
                />
                <FormInput
                    label={'E-mail address'}
                    name={'email'}
                    onChange={handleChange}
                    value={email}
                    type='text'
                />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}
