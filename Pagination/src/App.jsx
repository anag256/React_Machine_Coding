import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState();
  const [totalPages,setTotalPages]=useState();
  const [page,setPage]=useState(1);
  //using just fronted
  // const fetchProducts = async () => {
  //   const res = await fetch("https://dummyjson.com/products?limit=100");
  //   const data = await res.json();
  //   setProducts(data.products);
  //   setTotalPages(Math.floor(data.total/10));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  //backend driven
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=${10}&skip=${page*10-10}`);
    const data = await res.json();
    setProducts(data.products);
    setTotalPages(Math.floor(data.total/10));
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  console.log(products);
  function setPageHandler(selectedPage){
    if(selectedPage<=totalPages && selectedPage > 0){
      setPage(selectedPage);
    }

  }
  return (
    <>
      <div className="container">
        {/* frontend driven */}
        {/* {products?.slice(page*10-10,page*10).map((prod) => { */}
        {/* backend driven */}
        {products?.map((prod) => {
          return (
            <div className="product">
              <img src={`${prod.thumbnail}`} />
              <h5>{prod.brand}</h5>
            </div>
          );
        })}


      </div>

      <div className="buttons">
       {
        page!=1 && <button onClick={()=>setPageHandler(page-1)}>←</button>
       }
          {
            Array.from(Array(totalPages))?.map((page,index)=><button key={index+1} onClick={()=>setPage(index+1)}>{index+1}</button>)
          }

          {
            page!=totalPages &&  <button onClick={()=>setPageHandler(page+1)}>→</button>
          }

        </div>
    </>
  );
}

export default App;
