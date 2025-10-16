import ProductsCategoryRow from "./ProductCategoryRow";
import ProductsRow from "./ProductsRow";
import ProduceData from "../utilities/data.js"

export default function ProductsTable() {

    let rows = [] ; // In this array, when conditions met  - we will read and add the items from ProduceData.

    let prevCategory  = null; // Setting previous caetogry as null, as there will be no category to compare with 1st item.

    for(let item of ProduceData){
        if(item.category !== prevCategory){ // Condition check to create a new component for a new category (header)
            rows.push(<ProductsCategoryRow key={item.name} category={item.category} />) // Will create a new row in the table when there is a different category than current. Passing the props "Category"

        }
        rows.push(<ProductsRow key={item.name} {...item}/>); // Passing the entire object and spreading it. You have to accept these props in the component receiving it.

        prevCategory = item.category;
    }

  return (
    <table>
      <thead>
        <tr>
         <th>Name</th>
         <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows} {/* Render the newly generated array(rows) into the table */}
      </tbody>
    </table>
  );
}
