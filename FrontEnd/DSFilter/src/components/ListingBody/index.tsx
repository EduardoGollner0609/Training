import './styles.css';
import Filter from "../Filter";
import Listing from "../Listing";
import * as productService from '../../services/product-service';
import { ProductDTO } from '../../models/product';
import { useContext, useEffect, useState } from 'react';
import { ContextProductCount } from '../../utils/context-products';

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(productService.findAllSortedPrice);

    const { setContextProductCount } = useContext(ContextProductCount);

    useEffect(() => {
        setContextProductCount(products.length);
    }, [products]);

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