import Categories from './components/categories/Categories.component';
import { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <Categories></Categories>
                </header>
            </div>
        );
    }
}

export default App;
