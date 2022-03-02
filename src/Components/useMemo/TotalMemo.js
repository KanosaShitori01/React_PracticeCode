import {useState, useMemo, useRef} from 'react';
function TotalMemo(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    let focName = useRef();

    const handleProducts = () => {
        setProducts([...products, {
            name: name,
            price: +price
        }]);
        focName.current.focus();
        setName("");
        setPrice("");
    }
    const total = useMemo(()=>{
        const result = products.reduce((res, prod)=>{
            console.log("Total Working...");
            return res + prod.price;
        }, 0);
        return result;
    }, [products]);
    return(<div className="totalMemo">
        <input ref={focName} value={name} type="text" onChange={(e)=>setName(e.target.value)} name="name"/>
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} name="price"/>
        <button onClick={handleProducts}>Add</button>
        <h1>Total: {total}</h1>
        <ul>
            {products.map((product, index)=>(
                <li key={index}>{product.name} - {product.price}</li>
            ))}
        </ul>
    </div>)
}
export default TotalMemo;