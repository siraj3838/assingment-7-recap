
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card/Card";

const Cards = ({handleClick}) => {
    const [apiLink, setApiLink] = useState([])
    useEffect(()=>{
        fetch('link.json')
        .then(res => res.json())
        .then(data => setApiLink(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-6">
            {
                apiLink.map((oneObj,idx)=> <Card handleClick={handleClick} key={idx} oneObj={oneObj}></Card>)
            }
        </div>
    );
};

export default Cards;