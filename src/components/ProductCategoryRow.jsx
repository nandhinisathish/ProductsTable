import data from '../utilities/data.js';


export default function ProductsCategoryRow(props){
    console.log(data);
    return <tr>
        <th colSpan={2}>{props.category}</th>
        </tr>
}