import { Route, Routes } from 'react-router-dom';

import Categories from '../../components/categories/Categories.component';
import Navigation from '../navigation/Navigation.component';
import Shop from '../../components/shop/Shop.component';
import SignIn from '../auth/Auth.component';

function Home() {
    return (
        <Routes>
            <Route path='/' element={<Navigation></Navigation>}>
                <Route index element={<Categories />}></Route>
                <Route path='shop' element={<Shop />}></Route>
                <Route path='signin' element={<SignIn />}></Route>
            </Route>
        </Routes>
    );
}

export default Home;
