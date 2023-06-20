import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { 
    MainPage, 
    ComicsPage, 
    Page404, 
    SingleComicPage, 
    SinglePage, 
    SingleCharacterLayout, 
    //SingleComicLayout 
} from '../pages';

import AppHeader from "../appHeader/AppHeader";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Spinner from "../spinner/Spinner";

// eslint-disable-next-line no-unused-vars
const Page404Lazy = lazy(() => import('../pages/404'));         // ленивая загрузка
// eslint-disable-next-line no-unused-vars
const MainPageLazy = lazy(() => import('../pages/MainPage')); 
// eslint-disable-next-line no-unused-vars  
const ComicsPageLazy = lazy(() => import('../pages/ComicsPage')); 
// eslint-disable-next-line no-unused-vars
const SingleComicPageLazy = lazy(() => import('../pages/SingleComicPage')); 
// eslint-disable-next-line no-unused-vars
const SingleComicLayoutLazy = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
// eslint-disable-next-line no-unused-vars
const SingleCharacterLayoutLazy = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
// eslint-disable-next-line no-unused-vars
const SinglePageLazy = lazy(() => import('../pages/SinglePage'));
// eslint-disable-next-line no-unused-vars


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
                            {/* <Route exact path="/comics/:comicId" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>} />  */}
                            <Route exact path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>} />   
                            <Route path="*" element={<Page404/>} />   
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;

// 41 строка выдает баг , 40 -ю стороку оставил чтобы вывести отдельного комикса, а так его нужно удалить