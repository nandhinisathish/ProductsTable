export default function SearchBar(){
    return( 
        <form >
            <input type="text" id="searchBox" placeholder="Search..." />
            <label>
                 <input type="checkbox"  id="chkSearch" />
                 Only show the products in stock
            </label>
           
        </form>
    )
}