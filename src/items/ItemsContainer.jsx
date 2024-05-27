import React, { useState, useEffect } from 'react';
import '../App.css';
import ItemList from './ItemList';
function ItemsContainer() {

  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [itemDetails, setItemDetails] = useState([])
  const [filterText, setFilterText] = useState('')

  //Retrieves the master list of items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsResponse = await fetch('https://www.dnd5eapi.co/api/equipment')
        const itemsData = await itemsResponse.json()
        setItems(itemsData.results)
        setFilteredItems(itemsData.results)

      } catch (error) {
        console.error('error fetching data', error)
      }
    }
    
    fetchItems();
  }, [])

  const handleFilterChange = (e) => {
    const value = e.target.value
    setFilterText(value)
   
    const filteredItemResults = items.filter((item) => item.index.includes(value.toLowerCase()));
    setFilteredItems(filteredItemResults);
  }

  //Called from ItemList to retrieve the details for a given item 
  async function getDetails(itemIndex){
    const itemDetailsResponse = await fetch(`https://www.dnd5eapi.co/api/equipment/${itemIndex}`)
    const itemDetailsData = await itemDetailsResponse.json()
    setItemDetails(itemDetailsData)
  }

  return (
    <div className="App">
      <h1>Dungeons and Dragons 5th Edition Items</h1>
      <input
         type="text"
         placeholder="Search for a piece of equipment..." 
         value={filterText}
         onChange={handleFilterChange}
         />
      <ItemList items={filteredItems} itemDetails={itemDetails} onClick={getDetails} />
    </div>
  )
}

export default ItemsContainer;
