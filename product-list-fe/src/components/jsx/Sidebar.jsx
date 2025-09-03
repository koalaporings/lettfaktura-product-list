import "../css/Sidebar.css";

function Sidebar() {

    const menuItems = [
        { id: 1, label: "Invoices", icon: "mdi mdi-file-document-outline" },
        { id: 2, label: "Customers", icon: "mdi mdi-account-outline" },
        { id: 3, label: "My Business", icon: "mdi mdi-cog-outline" },
        { id: 4, label: "Invoice Journal", icon: "mdi mdi-book-outline" },
        { id: 5, label: "Price List", icon: "mdi mdi-tag-outline" },
        { id: 6, label: "Multiple Invoicing", icon: "mdi mdi-file-document-multiple-outline" },
        { id: 7, label: "Unpaid Invoices", icon: "mdi mdi-close-circle-outline" },
        { id: 8, label: "Offer", icon: "mdi mdi-mail" },
        { id: 9, label: "Inventory Control", icon: "mdi mdi-clipboard-outline" },
        { id: 10, label: "Member Invoicing", icon: "mdi mdi-card-account-details-outline" },
        { id: 11, label: "Import/Export", icon: "mdi mdi-swap-vertical-bold" },
        { id: 12, label: "Log Out", icon: "mdi mdi-logout" },
    ];

    return (
        <>
            <h2> Menu </h2>
            <hr/>
            <div className="menu-items">
                {menuItems.map(item => (
                    <button key={item.id}>
                        <i className={item.icon} />
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Sidebar;
