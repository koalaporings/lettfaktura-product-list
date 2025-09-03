import "../css/Sidebar.css";

function Sidebar() {

    const menuItems = [
        { id: 1, label: "Invoices", imgSrc: "https://via.placeholder.com/40" },
        { id: 2, label: "Customers", imgSrc: "https://via.placeholder.com/40" },
        { id: 3, label: "My Business", imgSrc: "https://via.placeholder.com/40" },
        { id: 4, label: "Invoice Journal", imgSrc: "https://via.placeholder.com/40" },
        { id: 5, label: "Price List", imgSrc: "https://via.placeholder.com/40" },
        { id: 6, label: "Multiple Invoicing", imgSrc: "https://via.placeholder.com/40" },
        { id: 7, label: "Unpaid Invoices", imgSrc: "https://via.placeholder.com/40" },
        { id: 8, label: "Offer", imgSrc: "https://via.placeholder.com/40" },
        { id: 9, label: "Inventory Control", imgSrc: "https://via.placeholder.com/40" },
        { id: 10, label: "Member Invoicing", imgSrc: "https://via.placeholder.com/40" },
        { id: 11, label: "Import/Export", imgSrc: "https://via.placeholder.com/40" },
        { id: 12, label: "Log Out", imgSrc: "https://via.placeholder.com/40" },
    ];

    return (
        <>
            <div>
                <h2> Menu </h2>
                <hr/>
                <ul>
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <img className="profile-image" src={item.imgSrc}/>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
