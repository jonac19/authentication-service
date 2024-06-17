import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import ArtistsBody from './Artists/ArtistsBody'


export default function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <SearchBar placeholder='Search by Artist'/>
            <ArtistsBody />
        </div>
    )
}
