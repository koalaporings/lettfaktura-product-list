import { useState, useEffect } from 'react';
import { getProducts } from '../../store/api';
import '../css/Table.css';

const Table = ({ data }) => {

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
                        <th>Article No.</th>
                        <th>Product/Service</th>
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
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.in_price}</td>
                                <td>{item.price}</td>
                                <td>{item.unit}</td>
                                <td>{item.stock}</td>
                                <td>{item.description}</td>
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
