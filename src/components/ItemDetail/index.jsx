import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import ItemCount from '../ItemCount'
import './styles.css'


const ItemDetail = ({product}) => {

  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const addCart = (quantity) => {
    setQty(quantity);
  }

  const handleFinish = () => {
    navigate("./cart")
  }
  
  console.log(qty)

  return (
    <div>
        <h1>{product.title}</h1>
        <div className='DetailContenedor'> 
        <img src= {product.image} alt="producto detalle" width={400}/>
        <div className='DataDescripcion'>
        <p>{product.description}</p>
        <p>${product.price}</p>
        {qty ? <Button variant="outline-dark" onClick={handleFinish}>Finalizar Compra</Button>
          : <ItemCount stock={5} initial={1} onAdd={addCart}/>}
        </div>
        </div>
    </div>
  )
}

export default ItemDetail