import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'

/**
 * The main layout component for the app.
 *
 * @returns {JSX.Element} The JSX element for the layout.
 */
export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
