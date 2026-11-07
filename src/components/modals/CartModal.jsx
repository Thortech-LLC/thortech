import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";

export default function CartModal({ items, onClose, onUpdateQuantity, onRemove }) {
  const total = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const inquiryBody = items
    .map((item) => `${item.name} (quantity: ${item.quantity}) - $${(Number(item.price) * item.quantity).toLocaleString()}`)
    .join("\n");
  const inquiryLink = `mailto:thortech117@gmail.com?subject=Hardware%20inquiry&body=${encodeURIComponent(`${inquiryBody}\n\nEstimated total: $${total.toLocaleString()}`)}`;

  return (
    <div className="cart-overlay" role="presentation" onMouseDown={onClose}>
      <section className="cart-modal" role="dialog" aria-modal="true" aria-labelledby="cart-title" onMouseDown={(event) => event.stopPropagation()}>
        <header className="cart-modal-header">
          <div>
            <p className="eyebrow">THORTECH LLC /// HARDWARE</p>
            <h2 id="cart-title">Your cart.</h2>
          </div>
          <button className="cart-close" type="button" onClick={onClose} aria-label="Close cart">×</button>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <button className="btn btn-primary" type="button" onClick={onClose}>Continue browsing</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>${Number(item.price).toLocaleString()} each</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                      <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}><FontAwesomeIcon icon={faMinus} /></button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <strong>${(Number(item.price) * item.quantity).toLocaleString()}</strong>
                    <button className="cart-remove" type="button" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}><FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                </article>
              ))}
            </div>
            <footer className="cart-footer">
              <div><span>Estimated total</span><strong>${total.toLocaleString()}</strong></div>
              <p>We'll confirm availability and shipping details when you send your inquiry.</p>
              <a className="btn btn-primary" href={inquiryLink} onClick={onClose}>Ask about this order</a>
            </footer>
          </>
        )}
      </section>
    </div>
  );
}
