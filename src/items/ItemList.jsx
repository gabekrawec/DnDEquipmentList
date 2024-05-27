
const ItemList = ({items, itemDetails, onClick}) => {
    //uses map function to render individual items
    console.log("Items count: ", items.length)
    const renderItems = () => {
        return items.map(item => {
            return(
            <li key={item.index} style={{margin: '20px 0px', cursor: 'pointer'}} >
                <h2 onClick={() => onClick(item.index)}>{item.name}</h2>
                { (item.index === itemDetails.index) ? renderItemDetails() : null }
            </li>
            )
        })
    }

    function renderItemDetails()
    {
        var category = itemDetails.equipment_category.name
        var weight = itemDetails.weight
        var cost = `${itemDetails.cost.quantity} ${itemDetails.cost.unit}`
        var description = itemDetails.desc

        return(
            <div id="itemInfoBlock">
                <p>Category: {category} </p>
                <p>Weight: {!isNaN(weight) ? weight : "N/A"}</p>
                <p>Cost: {cost} </p>
                {/*Conditionally renders the description if the item has one*/}
                {description.length > 0 ? <p>Description: {description}</p> : null}
            </div>
        )
    }

    return(
        <div>
            {
                items.length > 0 ? (
                    <ul>
                        {renderItems()}
                    </ul>
                ) : (
                    <p>No Items Found!</p>
                )
            }
        </div>
    );
}

export default ItemList