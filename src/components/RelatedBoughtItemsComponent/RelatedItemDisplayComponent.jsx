const RelatedItemDisplayComponent = ({item}) => {
    const { name, primeEligible } = item;
    const photoURL = item.productPhotos.length > 0 ? item.productPhotos[0].photoURL : "";
    const price = (item.price).toFixed(2);
    
    return (
        <div>
            <img src={photoURL} alt={name}/>
            <div className="RelatedItemName">{name}</div>
            <div className="RelatedItemPrice">{`$${price}`}</div>
            <img 
                className="RelatedItemPrimeEligibility" 
                src={primeEligible ? process.env.PUBLIC_URL + "/prime_logo.png" : ""} 
            />
        </div>
    )
};

export default RelatedItemDisplayComponent;