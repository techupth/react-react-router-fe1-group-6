import { useEffect ,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProductForm() {

  const [name , setName] = useState('')
  const [image , setImage] = useState('')
  const [price , setPrice] = useState('')
  const [description , setDescription] = useState('')

  const param = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getProduct()
  },[])  

  const getProduct = async () => {
    const results = await axios("http://localhost:4001/products/" + param.id);
    console.log(results)
    setName(results.data.data.name)
    setImage(results.data.data.image)
    setPrice(results.data.data.price)
    setDescription(results.data.data.description)
  }

  const createProduct = async (event) => {
    event.preventDefault();
    await axios.put('http://localhost:4001/products/'+ param.id, 
    {
      name : name,
      image : image,
      price : price,
      description : description
    });
    navigate('/product')
  }

  return (
    <form className="product-form" onSubmit={createProduct}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {setName(e.target.value)}}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {setImage(e.target.value)}}
            value={image}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {setPrice(e.target.value)}}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {setDescription(e.target.value)}}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
