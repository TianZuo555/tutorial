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
        console.log(result)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h1>Sign Up with username and password.</h1>
            <form onSubmit={onSubmit}>
                <label>Name: </label>
                <input type='text' name='name' onChange={handleChange} value={name}></input>

                <label>User Name</label>
                <input type='text' name='username' onChange={handleChange} value={username}></input>

                <label>Password</label>
                <input type='text' name='password' onChange={handleChange} value={password}></input>

                <label>Confirm Password</label>
                <input type='text' name='confirmPassword' onChange={handleChange} value={confirmPassword}></input>

                <label>E-mail</label>
                <input type='text' name='email' onChange={handleChange} value={email}></input>

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}
