import Button from '../button/Button.component';
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
        // to do change to modal
        console.log(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Do not have an account ?</h2>
            <span>Sign Up with username and password.</span>
            <form onSubmit={onSubmit}>
                <FormInput label={'Name'} name={'name'} onChange={handleChange} value={name} type='text' />
                <FormInput
                    label={'User Name'}
                    name={'username'}
                    onChange={handleChange}
                    value={username}
                    type='text'
                    required
                />
                <FormInput
                    label={'Password'}
                    name={'password'}
                    onChange={handleChange}
                    value={password}
                    type='password'
                    required
                />
                <FormInput
                    label={'Password Confirmation'}
                    name={'confirmPassword'}
                    onChange={handleChange}
                    value={confirmPassword}
                    type='password'
                    required
                />
                <FormInput
                    label={'E-mail address'}
                    name={'email'}
                    onChange={handleChange}
                    value={email}
                    type='text'
                    required
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUp;
