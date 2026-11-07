import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCartShopping, faDesktop } from "@fortawesome/free-solid-svg-icons";
import CartModal from "./modals/CartModal";
import "../../styles.css";

const starterListings = [
  { id: "starter-1", name: "Thorforge 01", price: "1299", condition: "New build", specs: "Ryzen 7 7800X3D / RTX 4070 Super / 32GB RAM / 1TB NVMe", status: "Ready to ship", image: "" },
];

export default function PCsPage() {
  const listings = starterListings;
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (listing) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === listing.id);
      if (existing) return current.map((item) => item.id === listing.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...listing, quantity: 1 }];
    });
  };
  const updateQuantity = (id, quantity) => setCart((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item));
  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id));
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="pcs-page">
      <header className="pcs-header">
        <nav className="navbar pcs-navbar" aria-label="PCs navigation">
          <a className="brand" href="#hero" aria-label="Return to Thortech home"><img src="/thortech/images/logos/white-hammer.png" alt="" /><span>Thortech<small>LLC</small></span></a>
          <div className="pcs-nav-actions"><a className="pcs-back" href="#hero"><FontAwesomeIcon icon={faArrowLeft} /> Back to Thortech</a><button className="cart-button" type="button" onClick={() => setCartOpen(true)} aria-label={`Open cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}><FontAwesomeIcon icon={faCartShopping} /><span>Cart</span>{cartCount > 0 && <b>{cartCount}</b>}</button></div>
        </nav>
        <div className="content-width pcs-intro">
          <div>
            <p className="eyebrow">THORTECH LLC /// HARDWARE</p>
            <h1>PCs built<br /><em>for the next task.</em></h1>
            <p>Browse ready-to-go systems from Thortech. Every machine is tested, documented, and ready for a real workload.</p>
          </div>
          <div className="pcs-signal"><FontAwesomeIcon icon={faDesktop} /><span>INVENTORY<br /><strong>{listings.length.toString().padStart(2, "0")} SYSTEMS</strong></span></div>
        </div>
      </header>

      <section className="pcs-workspace content-width" aria-label="Available PCs">
        <div className="pcs-listings">
          <div className="pcs-listings-heading"><div><p className="eyebrow">01 / CURRENT INVENTORY</p><h2>Available<br /><span>systems.</span></h2></div><span>{listings.length} listed</span></div>
          <div className="pc-grid">{listings.map((listing) => <article className="pc-card" key={listing.id}>{listing.image ? <img src={listing.image} alt={`${listing.name} product`} /> : <div className="pc-card-visual"><FontAwesomeIcon icon={faDesktop} /><span>THORTECH<br />SYSTEM</span></div>}<div className="pc-card-content"><div className="pc-card-top"><span>{listing.condition}</span></div><h3>{listing.name}</h3><p>{listing.specs}</p><div className="pc-card-bottom"><strong>${Number(listing.price).toLocaleString()}</strong><button className="btn btn-primary pc-add-button" type="button" onClick={() => addToCart(listing)}>Add to cart</button></div></div></article>)}</div>
        </div>
      </section>
      <footer className="footer"><div className="footer-content"><a className="footer-logo" href="#hero">Thortech<span>LLC</span></a><span>&copy; 2026 Thortech LLC</span><a href="mailto:thortech117@gmail.com">Ask about a build <FontAwesomeIcon icon={faArrowRight} /></a></div></footer>
      {cartOpen && <CartModal items={cart} onClose={() => setCartOpen(false)} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />}
    </main>
  );
}
