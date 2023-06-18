import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';
import AppHeader from "../appHeader/AppHeader";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const App = () =>  {

    return (
        <Router>
            <div className="app">
                <ErrorBoundary>
                    <AppHeader/>
                </ErrorBoundary>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="/comics" element={<ComicsPage/>} />  
                        <Route path="/comics/:comicId" element={<SingleComicPage/>} />  
                        <Route path="*" element={<Page404/>} />   
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;