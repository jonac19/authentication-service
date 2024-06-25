import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import ArtistsSection from './Artists/ArtistsSection'
import ShowsSection from './Shows/ShowsSection'


export default function HomePage() {
    return (
        <div>
            <Hero />
            <SearchBar placeholder='Search by Artist'/>
            <ArtistsSection />
            <ShowsSection />
        </div>
    )
}
