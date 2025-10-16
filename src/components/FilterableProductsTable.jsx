import ProductsTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductsTable(){

    return (
    <div>
        <SearchBar/>
        <ProductsTable/>
    </div>
    )
}