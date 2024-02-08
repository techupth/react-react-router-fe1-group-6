import { useEffect ,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {

  const [products, setProducts] = useState({});

  const param = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getProduct()
  },[])  

  const getProduct = async () => {
    const results = await axios("http://localhost:4001/products/" + param.id);
    setProducts(results.data.data)
  }
  
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{products.name}</h2>
        <p>{products.description}</p>
      </div>
      <button onClick={()=>{
        navigate('/product')
      }}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
