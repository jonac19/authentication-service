import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import ArtistsSection from './Artists/ArtistsSection'


export default function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <SearchBar placeholder='Search by Artist'/>
            <ArtistsSection />
        </div>
    )
}
