const RelatedItemDisplayComponent = ({item}) => {
    const photoURL = item.productPhotos.length > 0 ? item.productPhotos[0].photoURL : "";
    const price = (item.price).toFixed(2);
    
    return (
        <div>
            <img src={photoURL} alt={item.name}/>
            <div>{item.name}</div>
            <div>{`$${price}`}</div>
            <div>{item.primeEligible ? "prime" : ""}</div>
        </div>
    )
};

export default RelatedItemDisplayComponent;