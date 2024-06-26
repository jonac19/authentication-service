import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import ArtistsSection from './Artists/ArtistsSection'
import ShowsSection from './Shows/ShowsSection'
import Footer from '../../components/Footer/Footer'


export default function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <SearchBar placeholder='Search by Artist'/>
            <ArtistsSection />
            <ShowsSection />
            <Footer />
        </div>
    )
}
