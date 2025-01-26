import { useState } from "react";
import styles from './ViewDetails.module.css';

const sampleProduct = {
    name: "Organic Tomatoes",
    category: "Vegetables",
    desc: "Fresh and organic tomatoes grown locally and free of harmful chemicals. Perfect for salads, cooking, and more.",
    price: 35,
    quantity: 50,
    image: "https://th.bing.com/th/id/OIP.L9ayAtf1A_Uxsv4bvQFwVgHaFi?rs=1&pid=ImgDetMain",
    seller: {
        businessName: "GreenField Farms",
        location: "Springfield, IL",
        email: "contact@greenfieldfarms.com",
        phone: "+1 234-567-890",
    },
};

const ViewDetails = () => {
  const [product] = useState(sampleProduct);

  return (
    <div className={styles['detail-container']}>
      <div className={styles['detail-card']}>
        <div className={styles['image-section']}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles['content-section']}>
          <h1 className={styles['product-name']}>{product.name}</h1>
          <p className={styles['product-desc']}>{product.desc}</p>
          <p className={styles['product-category']}>
            <strong>Category:</strong> {product.category}
          </p>
          <p className={styles['product-price']}>
            <strong>Price:</strong> ${product.price}
          </p>
          <button className={styles['add-to-cart-btn']}>Add To Cart</button>
        </div>
      </div>

      <div className={styles['seller-info']}>
        <h2>Seller Information</h2>
        <p>
          <strong>Business Name:</strong> {product.seller.businessName}
        </p>
        <p>
          <strong>Location:</strong> {product.seller.location}
        </p>
        <p>
          <strong>Email:</strong> {product.seller.email}
        </p>
        <p>
          <strong>Phone:</strong> {product.seller.phone}
        </p>
      </div>
    </div>
  );
};

export default ViewDetails;
