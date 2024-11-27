import './styles.css';
import Filter from "../Filter";
import Listing from "../Listing";

export default function ListingBody() {
    return (
        <main>
            <section id="section-dsfilter">
                <Filter />
                <Listing />
            </section>
        </main>
    );
}