import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import NotFound from './pages/404'
import Home from './pages/home'
import NewWorkflow from './pages/new-workflow'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/new-workflow" element={<NewWorkflow />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;