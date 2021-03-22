const RelatedItemDisplayComponent = ({item}) => {
    return (
        <div>
            <div>{item.id}</div>
            <div>photo goes here</div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.primeEligible ? "This item is prime eligible" : ""}</div>
        </div>
    )
};

export default RelatedItemDisplayComponent;