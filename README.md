step 0: Create mock data
    // create a utilites folder => data.js
    // data can be export as default export without any name and without assignment operator(=) or it can be name export
    export default {
        [name]
    }

    export data = [
  { category: "Fruits", price: 1, stocked: true, name: "Apple" },
  { category: "Fruits", price: 1, stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: 2, stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: 2, stocked: true, name: "Spinach" },
  { category: "Vegetables", price: 4, stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: 1, stocked: true, name: "Peas" },
];

step 1: Create wireframe
step 2: Create individual components and containerisation based on parent child relationship.
        Do some basic CSS
        Build static layout - data soesn't change as there is no state involved at this point.
            1. create layout structure how it has to appear on the screen,
                set up first structure and logic comes later
            2. Rendering the table rows dynamically, note the data array has only 6 objects in it but whereas in UI - we can 8 objects/ components including the category row(fruits and vegetables). So using map will return only 1 object/value/row/component per item in the array. Here we are using for and if together to also return a new entry/component/ row in case of new category.
            3. Setting up the color of the item name to red based on conditional rendering when stocked has a falsey value - refers to item out of stock.
            4. Setting up the colspan as 2 to bring category header in the center of 2 columns.
            5. Setting table width as 100%

        
step 3: 