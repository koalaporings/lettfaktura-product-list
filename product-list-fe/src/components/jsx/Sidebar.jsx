import "../css/Sidebar.css";

function Sidebar() {

    const menuItems = [
        { id: 1, label: "Invoices", icon: "mdi mdi-file-document-outline", color: "#2196F3" },
        { id: 2, label: "Customers", icon: "mdi mdi-account-outline", color: "#4CAF50" },
        { id: 3, label: "My Business", icon: "mdi mdi-cog-outline", color: "#2196F3" },
        { id: 4, label: "Invoice Journal", icon: "mdi mdi-book-outline", color: "#2196F3" },
        { id: 5, label: "Price List", icon: "mdi mdi-tag-outline", color: "#FF9800" },
        { id: 6, label: "Multiple Invoicing", icon: "mdi mdi-file-document-multiple-outline", color: "#2196F3" },
        { id: 7, label: "Unpaid Invoices", icon: "mdi mdi-close-circle-outline", color: "#F44336" },
        { id: 8, label: "Offer", icon: "mdi mdi-mail", color: "#FFC107" },
        { id: 9, label: "Inventory Control", icon: "mdi mdi-clipboard-outline", color: "#2196F3" },
        { id: 10, label: "Member Invoicing", icon: "mdi mdi-card-account-details-outline", color: "#2196F3" },
        { id: 11, label: "Import/Export", icon: "mdi mdi-swap-vertical-bold", color: "#2196F3" },
        { id: 12, label: "Log Out", icon: "mdi mdi-logout", color: "#2196F3" },
    ];

    return (
        <>
            <p className="header-text"> Menu </p>
            <hr/>
            <div className="menu-items">
                {menuItems.map(item => (
                    <button key={item.id}>
                        <i className={item.icon} style={{ color: item.color }} />
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Sidebar;
