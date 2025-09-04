import { useState, useEffect } from 'react';
import '../css/EditModal.css';

const EditModal = ({ isOpen, onClose, product, onSave }) => {
    const [formData, setFormData] = useState({ ...product });

    useEffect(() => {
        setFormData({ ...product });
    }, [product]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Product</h2>
                <label>
                    Product/Service:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    In Price:
                    <input
                        type="number"
                        name="in_price"
                        value={formData.in_price}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Unit:
                    <input
                        type="text"
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    In Stock:
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <div className="modal-buttons">
                    <button className="save-btn" onClick={handleSave}>Save</button>
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
