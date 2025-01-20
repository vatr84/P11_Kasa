import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'

// Le composant de mise en page
export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
