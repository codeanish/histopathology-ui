import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/404'
import Home from './pages/home'
import NewWorkflow from './pages/new-workflow'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-workflow" element={<NewWorkflow />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;