
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <div style={pageWrapper}>
      {/* MAIN PRODUCT SECTION */}
      <div style={mainLayout}>
        
        {/* LEFT SIDE - STICKY IMAGES */}
        <div style={stickyLeftSection}>
          <div style={imageGalleryWrapper}>
            {/* THUMBNAILS */}
            <div style={thumbnailColumn}>
              {[1, 2, 3].map((i) => (
                <img key={i} src={product.image} style={thumbStyle} alt="thumbnail" />
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div style={mainImageContainer}>
              <img
                src={product.image}
                alt={product.name}
                style={mainImageStyle}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - SCROLLABLE CONTENT */}
        <div style={rightContentSection}>
          <span style={badgeStyle}>{product.badge || "Popular"}</span>

          <h1 style={titleStyle}>{product.name}</h1>

          <div style={ratingRow}>
            <span style={{ color: "#ffb400" }}>★★★★★</span>
            <span style={{ color: "#666", fontSize: "0.85rem", marginLeft: "10px" }}>(1,200+ Reviews)</span>
          </div>

          <p style={descriptionText}>{product.description}</p>
          
          {/* Extra Details to ensure scrolling */}
          <div style={extraDetails}>
            <p>• Clinically proven to regrow hair</p>
            <p>• Reactivates dormant hair follicles</p>
            <p>• Easy-to-use precision spray</p>
          </div>

          <h2 style={priceTextStyle}>{product.price}</h2>

          <p style={optionLabel}>Choose Option:</p>
          <div style={optionWrapper}>
            <div style={{...optionBox, borderColor: "#4100e5", background: "#f8f6ff"}}>
              <b>1 Month</b>
              <small>Starter Pack</small>
            </div>
            <div style={optionBox}>
              <b>3 Months</b>
              <small style={{color: "#10b981"}}>Save 15%</small>
            </div>
          </div>

          <button style={buyBtnStyle}>Buy Now</button>

          <div style={shippingInfoBox}>
            🚚 <b>Fast shipping available</b>
            <br />
            Delivery in 2-3 days
          </div>
          
          {/* Spacing for demo - details can be longer */}
          <div style={{height: "100px"}}></div>
        </div>
      </div>

      {/* REVIEWS SECTION - Pure width mein niche aayega */}
      <div style={reviewsSection}>
        <h2 style={sectionTitle}>Customer Stories</h2>
        <div style={reviewsGrid}>
          <div style={reviewCard}>"Consistency is key! Seeing results after 2 months." - <b>Ankit S.</b></div>
          <div style={reviewCard}>"The spray is so much better than the dropper." - <b>Vikas M.</b></div>
          <div style={reviewCard}>"Genuine product, very happy with the packaging." - <b>Sahil K.</b></div>
        </div>
      </div>
    </div>
  );
}

// --- STYLES ---

const pageWrapper = {
  background: "#fcfcfd",
  minHeight: "100vh",
  padding: "40px 5%",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

const mainLayout = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  gap: "50px",
  alignItems: "flex-start", // This is crucial for sticky to work
};

const stickyLeftSection = {
  flex: "1.2",
  position: "sticky",
  top: "90px", // Kitni door fix rahega top se
};

const imageGalleryWrapper = {
  display: "flex",
  gap: "20px",
};

const thumbnailColumn = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const thumbStyle = {
  width: "65px",
  height: "65px",
  borderRadius: "12px",
  objectFit: "cover",
  cursor: "pointer",
  border: "1px solid #eee",
};

const mainImageContainer = {
  flex: 1,
  background: "#fff",
  borderRadius: "24px",
  padding: "0px 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
  height: "500px",
};

const mainImageStyle = {
  width: "100%",
  maxHeight: "100%",
  objectFit: "contain",
};

const rightContentSection = {
  flex: 1,
};

const badgeStyle = {
  background: "#eee",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "0.75rem",
  fontWeight: "600",
  textTransform: "uppercase",
};

const titleStyle = {
  fontSize: "2.8rem",
  fontWeight: "800",
  margin: "15px 0 5px 0",
  color: "#111",
};

const ratingRow = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};

const descriptionText = {
  color: "#555",
  lineHeight: "1.6",
  fontSize: "1.05rem",
  marginBottom: "10px",
};

const extraDetails = {
  color: "#777",
  fontSize: "0.95rem",
  marginBottom: "25px",
};

const priceTextStyle = {
  fontSize: "2.2rem",
  fontWeight: "700",
  marginBottom: "20px",
  color: "#4100e5",
};

const optionLabel = { fontSize: "0.85rem", fontWeight: "600", marginBottom: "10px" };

const optionWrapper = {
  display: "flex",
  gap: "12px",
  marginBottom: "30px",
};

const optionBox = {
  flex: 1,
  padding: "15px",
  borderRadius: "15px",
  border: "2px solid #eee",
  cursor: "pointer",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
};

const buyBtnStyle = {
  width: "100%",
  padding: "18px",
  borderRadius: "50px",
  border: "none",
  background: "#4100e5",
  color: "#fff",
  fontWeight: "700",
  fontSize: "1.1rem",
  cursor: "pointer",
  marginBottom: "20px",
  boxShadow: "0 10px 25px rgba(65, 0, 229, 0.2)",
};

const shippingInfoBox = {
  background: "#f3f3f7",
  padding: "20px",
  borderRadius: "15px",
  fontSize: "0.85rem",
  color: "#555",
  lineHeight: "1.5",
};

const reviewsSection = {
  maxWidth: "1200px",
  margin: "60px auto 0",
  borderTop: "1px solid #eee",
  paddingTop: "50px",
};

const sectionTitle = { fontSize: "2rem", marginBottom: "30px", textAlign: "center" };

const reviewsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};

const reviewCard = {
  padding: "25px",
  background: "#fff",
  borderRadius: "15px",
  border: "1px solid #f0f0f0",
  fontSize: "0.95rem",
  color: "#444",
};