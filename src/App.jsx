
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import CardsList from './components/CardsList/CardsList'
import Header from './components/Header/Header'
import Swal from 'sweetalert2'

function App() {
  const [card, setCard] = useState([])
  const [hour, setHour] = useState(0)
  const [prices, setPrices] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const handleClick = (oneObj) =>{
    const isHave = card.find(oneCard => oneCard.id == oneObj.id)
    let total = oneObj.credit;
    let result = oneObj.price;
    if(isHave){
      Swal.fire(
        'Sorry',
        'Already You Select This Course',
        'question'
      )
    }
    else{
      card.map(bCard => {
        total+= bCard.credit;
        result+= bCard.price;
      })
      const rem = 20 - total;
      if(rem < 0){
        Swal.fire(
          'Sorry',
          'You Have no More time',
          'question'
        )
      }
      else{
        setCard([...card, oneObj])
        setHour(total);
        setPrices(result);
        setRemaining(rem);
      }
    }
  }
  return (
    <div className='max-w-screen-xl mx-auto my-10'>
      <Header></Header>
      <div className='flex gap-6'>
        <div className='w-3/4'>
          <Cards handleClick={handleClick}></Cards>
        </div>
        <div className="w-1/4">
          <CardsList hour={hour} prices={prices} remaining={remaining} card={card}></CardsList>
        </div>
      </div>
    </div>
  )
}

export default App
