import { useState, useEffect } from 'react';
import { getProducts } from '../../store/api';
import '../css/Table.css';

const Table = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then((res) => setProducts(res.data))
        .catch((err) => console.error(err));
    },[]);

    return (
        <div className="table-wrapper">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Article No. <span style={{color: "#2196F3"}}>↓</span></th>
                        <th>Product/Service <span style={{color: "#4CAF50"}}>↓</span></th>
                        <th>In Price</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>In Stock</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.length > 0 ? (
                        products.map((item) => (
                            <tr key={item.id}>
                                <td><span className="td-pill">{item.id}</span></td>
                                <td><span className="td-pill">{item.name}</span></td>
                                <td><span className="td-pill">{item.in_price}</span></td>
                                <td><span className="td-pill">{item.price}</span></td>
                                <td><span className="td-pill">{item.unit}</span></td>
                                <td><span className="td-pill">{item.stock}</span></td>
                                <td><span className="td-pill">{item.description}</span></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="no-data">
                                No data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
