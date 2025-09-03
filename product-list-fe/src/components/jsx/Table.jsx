import React from 'react';
import '../css/Table.css';

const Table = ({ data }) => {
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
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
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
