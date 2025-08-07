import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then(setItems);
    fetch("/api/alerts")
      .then((res) => res.json())
      .then(setAlerts);
    fetch("/api/suppliers")
      .then((res) => res.json())
      .then(setSuppliers);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Clinic Inventory Dashboard</h1>
      <section>
        <h2>Inventory</h2>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Expiry</th>
              <th>Barcode</th>
              <th>Threshold</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.quantity}</td>
                <td>{item.expiry}</td>
                <td>{item.barcode}</td>
                <td>{item.threshold}</td>
                <td>{item.supplier_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Alerts</h2>
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id}>
              {alert.name} ({alert.type}) — Qty: {alert.quantity} — Expiry: {alert.expiry}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Suppliers</h2>
        <ul>
          {suppliers.map((s) => (
            <li key={s.id}>{s.name} ({s.email})</li>
          ))}
        </ul>
      </section>
      <p style={{ marginTop: 40, fontStyle: "italic" }}>
        Basic demo. For full features, add forms and barcode scanning components.
      </p>
    </div>
  );
}

export default App;