import './styles.css';
import Filter from "../Filter";
import Listing from "../Listing";
import * as productService from '../../services/product-service';
import { ProductDTO } from '../../models/product';
import { useState } from 'react';

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(productService.findAllSortedPrice);

    function filterProducts(minPrice: number, maxPrice: number) {
        setProducts(productService.findByPrice(minPrice, maxPrice));
    }

    return (
        <main>
            <section id="section-dsfilter">
                <Filter filterProducts={
                    filterProducts
                } />
                <Listing products={products} />
            </section>
        </main>
    );
}