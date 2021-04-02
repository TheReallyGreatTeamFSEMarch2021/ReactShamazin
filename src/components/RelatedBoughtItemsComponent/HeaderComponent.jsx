const HeaderComponent = ({ page, totalNumOfPages }) => {
    return (
        <div className="RelatedItemHeader">
            <h2>Customers also bought these products</h2>
            <div>Page {page} of {totalNumOfPages}</div>
        </div>
    );
}

export default HeaderComponent;