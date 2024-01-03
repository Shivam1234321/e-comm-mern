import { useEffect, useState } from "react"

export const ProductList= ()=>{
    const [products, setProduct] = useState();

    useEffect(()=>{
        getProduct();
    },[]);
    const getProduct= async ()=>{
        let result= await fetch("http://localhost:3030/products");
        result= await result.json();
        setProduct(result);
    }
    return(
        <div className="center">
            <h1>Product Page</h1>
            <table className="table" cellSpacing={0}>
                <thead>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Company</td>
                        <td>Action</td>
                    </tr>
                </thead>
                {
                    products?.map((item, index) =>
                        <tbody key={item._id}>
                            <tr>
                                <td>{index+1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.price}</td>
                                <td>{item?.category}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </table>

        </div>
    )
}