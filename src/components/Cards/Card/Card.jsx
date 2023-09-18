
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
const Card = ({oneObj, handleClick}) => {
    const {title,image,credit,price,description} = oneObj;
    return (
        <div className='rounded-lg shadow-xl bg-white p-4 space-y-3'>
            <img src={image} alt="" />
            <h2 className="text-lg">{title}</h2>
            <p>{description}</p>
            <div className="flex items-center justify-between px-2 lg:px-0">
            <h4 className="text-xs lg:text-base text-[#1C1B1B99] font-medium flex gap-1 items-center"><span className="lg:text-xl"><FiDollarSign></FiDollarSign></span> Price: <span>{price}</span></h4>
            <h4 className="text-xs lg:text-base text-[#1C1B1B99] font-medium flex gap-1 items-center"><span className="lg:text-xl"><BsBook></BsBook></span> Credit: <span>{credit}</span>hr</h4>
            </div>
            <button onClick={() => handleClick(oneObj)} className='w-full rounded-lg bg-blue-500 py-2 text-lg font-bold text-white'>Select</button>
        </div>
    );
};

export default Card;