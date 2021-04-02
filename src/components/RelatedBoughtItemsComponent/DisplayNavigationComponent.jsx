const DisplayNavigationComponent = ({ direction, handleClick, shouldDisplayArrow }) => {
    if (shouldDisplayArrow) {
        const src = process.env.PUBLIC_URL + `/chevron-${direction === "<" ? "left" : "right"}.svg`;
        
        return (
            <div className="RelatedItemNav" onClick={handleClick}>
                <img src={src}/>
            </div>
        )
    }

    return null;
}

export default DisplayNavigationComponent;