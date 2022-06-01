import './App.css';

import { Component } from 'react';
import List from './components/list/list.component';
import SearchInput from './components/searchInput/searchInput.component';
import { getByUrl } from './apiUtils/apiUtil';

class App extends Component {
    state = {
        input: '',
        users: [],
    };

    componentDidMount() {
        getByUrl('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState({
                users: response,
            });
        });
    }

    handleOnChange = (e) => {
        const input = e.target.value;
        this.setState({
            input,
        });
    };

    filterUser = (users, input) => users.filter((user) => user.name.toLowerCase().includes(input.toLowerCase()));

    render() {
        const { input, users } = this.state;
        const { handleOnChange, filterUser } = this;

        const filteredUser = filterUser(users, input);

        return (
            <div className='App'>
                <header className='App-header'>
                    <SearchInput handleOnChange={handleOnChange} placeholder='search user name'></SearchInput>
                    <List value={filteredUser}></List>
                </header>
            </div>
        );
    }
}

export default App;
