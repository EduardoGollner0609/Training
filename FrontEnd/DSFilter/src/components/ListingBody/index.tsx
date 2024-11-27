import Filter from "../Filter";
import Listing from "../Listing";

export default function ListingBody() {
    return (
        <main>
            <section>
                <Filter />
                <Listing />
            </section>
        </main>
    );
}