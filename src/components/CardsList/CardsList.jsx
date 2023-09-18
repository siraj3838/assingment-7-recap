
const CardsList = ({card, prices, hour, remaining}) => {
    return (
        <div className="bg-white p-3 lg:p-6 rounded-lg h-fit space-y-3">
            <h3 className="text-blue-500 text-lg font-semibold">Credit Hour Remaining <span>{remaining}</span> hr</h3>
            <hr className="my-4"/>
            <h4 className="text-xl font-semibold">Course Name</h4>
            <div>
                {
                    card.map(sCard =><li key={sCard.id}>{sCard.title}</li>)
                }
            </div>
            <p className="text-base font-medium">Total Credit Hour : <span>{hour}</span></p>
            <h5 className="text-base font-bold">Total Price : <span>{prices}</span> USD</h5>
        </div>
    );
};

export default CardsList;