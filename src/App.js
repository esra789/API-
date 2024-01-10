
import './App.css';
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { getproduct, removeproduct } from './Redux/Action';
import Example from './Update';
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getproduct())
  },[dispatch])
 const products= useSelector(state=>state.products) 
 console.log(products)
const[search,setSearch]=useState("")  
return (
    <div className="App" style={{display:'flex',gap:'10px',flexWrap:"wrap"}}>
      <Form.Control
    onChange={(e)=>setSearch(e.target.value)}
    type="search"
    placeholder="search"
    className="me-2"
    />
      {products.filter(e=>e.title.includes(search)).map(e=>
      <Card style={{ width: '18rem' }} key={e.id}>
      <Card.Img variant="top" src={e.image} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.description}
          <br></br>
          price:{e.price}$ 
          <br></br>
          {e.rating.rate}    
           </Card.Text>
    
      </Card.Body>
      <Button variant='danger' onClick={()=>dispatch(removeproduct(e.id))}>Delete</Button>
      <Example product={e}/>
    </Card>)}
    </div>
  );
}

export default App;
