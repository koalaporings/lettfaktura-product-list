import { useState, useEffect, Suspense } from 'react';
import { getProducts, updateProduct } from '../../store/api';
import EditModal from './EditModal';
import '../css/Table.css';

const Table = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [isOpenModal, setOpenModal] = useState(false);

    const handleEdit = (item) => {
        setOpenModal(true);
        setSelectedProduct(item);
    }

    const onSave = async (updatedProduct) => {
        try {
            const res = await updateProduct(updatedProduct.id, updatedProduct);
            if (res.status === 200){
                setProducts(prevProducts =>
                    prevProducts.map(p =>
                        p.id === updatedProduct.id ? updatedProduct : p
                    )
                );
            }
            setOpenModal(false);
        } catch (error) {
            console.error('Failed to update product:', error);
            alert('Failed to save changes.');
        }
    };

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
                        <th></th>
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
                                <td>
                                    <button className="td-pill" onClick={() => handleEdit(item)}>
                                        <i className="mdi mdi-dots-horizontal"/>
                                    </button>
                                </td>
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
            <Suspense fallback="Loading">
                {isOpenModal && (
                    <EditModal
                        isOpen={isOpenModal}
                        onClose={() => setOpenModal(false)}
                        product={selectedProduct}
                        onSave={onSave}
                    />
                )}
            </Suspense>
        </div>
    );
};

export default Table;
