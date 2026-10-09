import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faGamepad } from "@fortawesome/free-solid-svg-icons";
import "../../styles.css";

const consoleListings = [
  { id: "console-1", name: "Thorbox Living Room", price: "899", condition: "New build", specs: "Custom mini-ITX build / 1440p gaming / Quiet living-room enclosure", status: "Ready to ship", image: "" },
  { id: "console-2", name: "Thorbox Arcade", price: "649", condition: "New build", specs: "Emulation-ready system / Wireless controllers / Compact arcade cabinet", status: "Available now", image: "" },
];

export default function ConsolesPage() {
  return (
    <main className="pcs-page consoles-page">
      <header className="pcs-header">
        <nav className="navbar pcs-navbar" aria-label="Custom consoles navigation">
          <a className="brand" href="#hero" aria-label="Return to Thortech home"><img src="/thortech/images/logos/white-hammer.png" alt="" /><span>Thortech<small>LLC</small></span></a>
          <a className="pcs-back" href="#hero"><FontAwesomeIcon icon={faArrowLeft} /> Back to Thortech</a>
        </nav>
        <div className="content-width pcs-intro">
          <div>
            <p className="eyebrow">THORTECH LLC /// HARDWARE</p>
            <h1>Consoles built<br /><em>for your space.</em></h1>
            <p>Custom gaming systems designed around the way you play. Explore finished builds for the living room, game room, or a dedicated arcade setup.</p>
          </div>
          <div className="pcs-signal"><FontAwesomeIcon icon={faGamepad} /><span>INVENTORY<br /><strong>{consoleListings.length.toString().padStart(2, "0")} BUILDS</strong></span></div>
        </div>
      </header>

      <section className="pcs-workspace content-width" aria-label="Available custom consoles">
        <div className="pcs-listings">
          <div className="pcs-listings-heading"><div><p className="eyebrow">01 / CURRENT INVENTORY</p><h2>Available<br /><span>consoles.</span></h2></div><span>{consoleListings.length} listed</span></div>
          <div className="pc-grid">{consoleListings.map((listing) => <article className="pc-card" key={listing.id}>{listing.image ? <img src={listing.image} alt={`${listing.name} product`} /> : <div className="pc-card-visual console-card-visual"><FontAwesomeIcon icon={faGamepad} /><span>THORTECH<br />CONSOLE</span></div>}<div className="pc-card-content"><div className="pc-card-top"><span>{listing.condition}</span></div><h3>{listing.name}</h3><p>{listing.specs}</p><div className="pc-card-bottom"><strong>${Number(listing.price).toLocaleString()}</strong><span>{listing.status}</span></div></div></article>)}</div>
        </div>
      </section>
      <footer className="footer"><div className="footer-content"><a className="footer-logo" href="#hero">Thortech<span>LLC</span></a><span>&copy; 2026 Thortech LLC</span><a href="mailto:thortech117@gmail.com">Ask about a console <FontAwesomeIcon icon={faArrowRight} /></a></div></footer>
    </main>
  );
}
