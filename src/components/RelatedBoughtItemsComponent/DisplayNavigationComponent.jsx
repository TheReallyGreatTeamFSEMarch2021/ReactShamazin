const DisplayNavigationComponent = ({ direction, handleClick, shouldDisplayArrow }) => {
    if (shouldDisplayArrow) {
        return (
            <div onClick={handleClick}>
                {direction}
            </div>
        )
    }

    return null;
}

export default DisplayNavigationComponent;