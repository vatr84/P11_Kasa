import homeBanner from '../../assets/home-banner.jpg'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Loader from '../../components/loader/Loader'
import accommodationsData from '../../data/logements.json'
import { useFetchData } from '../../hooks/useFetchData'
import './Home.scss'

/**
 * Renders the Home page component.
 *
 * @returns {JSX.Element} The Home page component.
 */
export default function Home() {
    const { isLoading, data } = useFetchData(accommodationsData)
    return (
        <main className="content container">
            <Banner title="Chez vous, partout et ailleurs" image={homeBanner} />
            <section className="logements">
                <h2 className="sr-only">Liste de logements</h2>
                {isLoading ? (
                    <Loader />
                ) : !data ? (
                    <div>Pas de données disponibles</div>
                ) : (
                    <Gallery accommodations={data} />
                )}
            </section>
        </main>
    )
}
