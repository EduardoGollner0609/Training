/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './styles.css';

type Props = {
    filterProducts: (minPrice: number, maxPrice: number) => void
}

export default function Filter({ filterProducts }: Props) {

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    function handleChangeInputMinPrice(event: any) {
        setMinPrice(event.target.value);
    }

    function handleChangeInputMaxPrice(event: any) {
        setMaxPrice(event.target.value);
    }

    function handleOnClikFilter() {
        if (!Number(minPrice)) {
            filterProducts(0, Number(maxPrice));
        }
        if (!Number(maxPrice)) {
            filterProducts(Number(minPrice), Number.MAX_VALUE);
        }
        if (!Number(minPrice) && !Number(maxPrice)) {
            filterProducts(0, Number.MAX_VALUE);
        }
        if (Number(minPrice) && Number(maxPrice)) {
            filterProducts(Number(minPrice), Number(maxPrice));
        }

    }

    return (
        <div className="filter">
            <input type="number" placeholder='Preço mínimo' onChange={handleChangeInputMinPrice} value={minPrice} />
            <input type="number" placeholder='Preço máximo' onChange={handleChangeInputMaxPrice} value={maxPrice} />
            <button onClick={handleOnClikFilter}>Filtrar</button>
        </div>);
}