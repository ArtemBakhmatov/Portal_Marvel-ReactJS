import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';
import AppHeader from "../appHeader/AppHeader";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Spinner from "../spinner/Spinner";

const Page404Lazy = lazy(() => import('../pages/404'));         // ленивая загрузка
const MainPageLazy = lazy(() => import('../pages/MainPage'));   
const ComicsPageLazy = lazy(() => import('../pages/ComicsPage')); 
const SingleComicPageLazy = lazy(() => import('../pages/SingleComicPage')); 

const App = () =>  {

    return (
        <Router>
            <div className="app">
                <ErrorBoundary>
                    <AppHeader/>
                </ErrorBoundary>
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage/>} />
                            <Route path="/comics" element={<ComicsPage/>} />  
                            <Route path="/comics/:comicId" element={<SingleComicPage/>} />  
                            <Route path="*" element={<Page404/>} />   
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;