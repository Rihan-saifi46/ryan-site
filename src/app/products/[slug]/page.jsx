
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { use } from "react";

export default async function ProductPage({ params }) {
  const { slug } = await (params);
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <div style={pageWrapper}>

      {/* MAIN PRODUCT SECTION */}
      <div style={mainLayout}>
        
        <div style={stickyLeftSection}>
          <div style={imageGalleryWrapper}>
            
            <div style={thumbnailColumn}>
              {[1, 2, 3].map((i) => (
                <img key={i} src={product.image} style={thumbStyle} />
              ))}
            </div>

            <div style={mainImageContainer}>
              <img src={product.image} style={mainImageStyle} />
            </div>

          </div>
        </div>

        <div style={rightContentSection}>
          
          <span style={badgeStyle}>{product.badge || "Popular"}</span>

          <h1 style={titleStyle}>{product.name}</h1>

          <div style={ratingRow}>
            <span style={{ color: "#ffb400" }}>★★★★★</span>
            <span style={{ color: "#666", fontSize: "0.85rem", marginLeft: "10px" }}>
              (1,200+ Reviews)
            </span>
          </div>

          <p style={descriptionText}>{product.description}</p>

          <div style={extraDetails}>
            <p>• Clinically proven to regrow hair</p>
            <p>• Reactivates dormant hair follicles</p>
            <p>• Easy-to-use precision spray</p>
          </div>

          <h2 style={priceTextStyle}>{product.price}</h2>

          <p style={optionLabel}>Choose Option:</p>

          <div style={optionWrapper}>
            <div style={{...optionBox, borderColor:"#4100e5", background:"#f8f6ff"}}>
              <b>1 Month</b>
              <small>Starter Pack</small>
            </div>
            <div style={optionBox}>
              <b>3 Months</b>
              <small style={{color:"#10b981"}}>Save 15%</small>
            </div>
          </div>

          <button style={buyBtnStyle}>Buy Now</button>

          <div style={shippingInfoBox}>
            🚚 <b>Fast shipping available</b>
            <br />
            Delivery in 2-3 days
          </div>

        </div>

      </div>

      {/* --- AMAZON STYLE REVIEW SECTION --- */}

      <div style={reviewWrapper}>

        {/* LEFT */}2
        <div style={ratingSummaryBox}>

          <h2 style={{ fontSize:"1.6rem" }}>Customer reviews</h2>

          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <span style={{ color:"#ff9900", fontSize:"1.4rem" }}>★★★★☆</span>
            <b>4.1 out of 5</b>
          </div>

          <p style={{ color:"#666" }}>1,794 global ratings</p>

          {[
            { star:5, percent:59 },
            { star:4, percent:21 },
            { star:3, percent:8 },
            { star:2, percent:2 },
            { star:1, percent:10 }
          ].map((item,i)=>(
            <div key={i} style={starRow}>
              <span>{item.star} star</span>
              <div style={progressBar}>
                <div style={{...progressFill, width:`${item.percent}%`}}></div>
              </div>
              <span>{item.percent}%</span>
            </div>
          ))}

        </div>

        {/* RIGHT */}
        <div style={reviewInsightBox}>

          <h2>Customers say</h2>

          <p style={{ color:"#555", lineHeight:"1.6" }}>
            Customers find the product easy to use and effective.
            Many noticed reduced hair fall and improved density.
          </p>

          <div style={tagWrap}>
            {["Quality","Comfort","Ease of use","Value","Looks","Support"]
            .map((tag,i)=>(
              <span key={i} style={tagStyle}>✓ {tag}</span>
            ))}
          </div>

          <h3 style={{ marginTop:"30px" }}>Reviews with images</h3>

          <div style={reviewImageRow}>
            {[1,2,3,4,5].map(i=>(
              <img key={i} src={product.image} style={reviewImage} />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}


const pageWrapper = { background: "#fcfcfd", minHeight: "100vh", padding: "40px 5%", fontFamily: "system-ui, sans-serif" };
const mainLayout = { maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "50px", alignItems: "flex-start" };
const stickyLeftSection = { flex: "1.2", position: "sticky", top: "90px" };
const imageGalleryWrapper = { display: "flex", gap: "20px" };
const thumbnailColumn = { display: "flex", flexDirection: "column", gap: "15px" };
const thumbStyle = { width: "65px", height: "65px", borderRadius: "12px", objectFit: "cover", border: "1px solid #eee" };
const mainImageContainer = { flex: 1, background: "#fff", borderRadius: "24px", padding: "0px 10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", height: "500px" };
const mainImageStyle = { width: "100%", maxHeight: "100%", objectFit: "contain" };
const rightContentSection = { flex: 1 };
const badgeStyle = { background: "#eee", padding: "6px 14px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" };
const titleStyle = { fontSize: "2.8rem", fontWeight: "800", margin: "15px 0 5px 0", color: "#111" };
const ratingRow = { display: "flex", alignItems: "center", marginBottom: "20px" };
const descriptionText = { color: "#555", lineHeight: "1.6", fontSize: "1.05rem", marginBottom: "10px" };
const extraDetails = { color: "#777", fontSize: "0.95rem", marginBottom: "25px" };
const priceTextStyle = { fontSize: "2.2rem", fontWeight: "700", marginBottom: "20px", color: "#4100e5" };
const optionLabel = { fontSize: "0.85rem", fontWeight: "600", marginBottom: "10px" };
const optionWrapper = { display: "flex", gap: "12px", marginBottom: "30px" };
const optionBox = { flex: 1, padding: "15px", borderRadius: "15px", border: "2px solid #eee", cursor: "pointer", textAlign: "center", display: "flex", flexDirection: "column" };
const buyBtnStyle = { width: "100%", padding: "18px", borderRadius: "50px", border: "none", background: "#4100e5", color: "#fff", fontWeight: "700", fontSize: "1.1rem", cursor: "pointer", marginBottom: "20px", boxShadow: "0 10px 25px rgba(65, 0, 229, 0.2)" };
const shippingInfoBox = { background: "#f3f3f7", padding: "20px", borderRadius: "15px", fontSize: "0.85rem", color: "#555", lineHeight: "1.5" };

// Slider Specific Styles
const reviewsSection = { maxWidth: "100%", marginTop: "100px", paddingTop: "50px", borderTop: "1px solid #eee", overflow: "hidden" };
const sectionTitle = { fontSize: "2.4rem", fontWeight: "800", marginBottom: "50px", textAlign: "center", letterSpacing: "-1px" };
const sliderContainer = { position: "relative", width: "100%", display: "flex", alignItems: "center" };
const sliderTrack = { display: "flex", gap: "30px", padding: "10px 0" };
const enhancedReviewCard = { 
  minWidth: "350px", 
  background: "#fff", 
  padding: "30px", 
  borderRadius: "20px", 
  boxShadow: "0 10px 40px rgba(0,0,0,0.04)", 
  border: "1px solid #f0f0f0" 
};
const reviewText = { fontSize: "1rem", color: "#333", lineHeight: "1.6", fontStyle: "italic", marginBottom: "15px" };
const authorBrand = { fontWeight: "700", color: "#4100e5", fontSize: "0.9rem" };

const leftGlassFade = {
  position: "absolute", left: 0, top: 0, bottom: 0, width: "15%",
  background: "linear-gradient(to right, #fcfcfd, transparent)", zIndex: 10
};
const rightGlassFade = {
  position: "absolute", right: 0, top: 0, bottom: 0, width: "15%",
  background: "linear-gradient(to left, #fcfcfd, transparent)", zIndex: 10
};

const reviewWrapper = {
  marginTop:"100px",
  display:"flex",
  gap:"60px",
  flexWrap:"wrap",
  borderTop:"1px solid #eee",
  paddingTop:"60px"
};

const ratingSummaryBox = {
  flex:"1",
  minWidth:"280px"
};

const reviewInsightBox = {
  flex:"2",
  minWidth:"320px"
};

const starRow = {
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginTop:"8px"
};

const progressBar = {
  flex:1,
  height:"8px",
  background:"#eee",
  borderRadius:"20px"
};

const progressFill = {
  height:"100%",
  background:"#ff9900"
};

const tagWrap = {
  display:"flex",
  gap:"10px",
  flexWrap:"wrap",
  marginTop:"15px"
};

const tagStyle = {
  background:"#f3f4f6",
  padding:"6px 12px",
  borderRadius:"20px",
  fontSize:"0.8rem"
};

const reviewImageRow = {
  display:"flex",
  gap:"15px",
  marginTop:"15px",
  overflowX:"auto"
};

const reviewImage = {
  width:"120px",
  height:"120px",
  objectFit:"cover",
  borderRadius:"12px"
};