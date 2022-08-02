import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { userInputs, productInputs } from './formSource';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />}></Route>
                        <Route path="users">
                            <Route index element={<List />}></Route>
                            <Route path=":userID" element={<Single />}></Route>
                            <Route
                                path="new"
                                element={<New inputs={userInputs} title="Add New User" />}
                            ></Route>
                        </Route>
                        <Route path="products">
                            <Route index element={<List />}></Route>
                            <Route path=":productID" element={<Single />}></Route>
                            <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
