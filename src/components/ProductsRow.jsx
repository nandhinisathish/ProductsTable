
// With destructuring the props in the function declaration
export default function ProductsRow({name, price, stocked}){

    // Dynamically adding RED color to item name to indicate - its out of stock
    let style = {color: stocked ? "" : "red"}

    return <tr>
        <td style={style}>{name}</td>
        <td>{price}</td>
    </tr>
}

/**
 *  // WITHOUT destructuring the props in the function declaration
 * 
 * export default function ProductsRow(props){
    return <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
    </tr>
}
 * 
 */