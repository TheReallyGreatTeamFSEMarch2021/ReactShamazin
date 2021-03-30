const DisplayNavigationComponent = ({ direction, handleClick }) => {
    return (
        <div onClick={handleClick}>
            {direction}
        </div>
    )
}

export default DisplayNavigationComponent;