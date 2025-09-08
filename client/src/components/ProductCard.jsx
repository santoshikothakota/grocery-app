import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Heart, HeartOff } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart, cart, wishlist, toggleWishlist } = useContext(CartContext);

  const inCart = cart.some(item => item.id === product.id);
  const inWishlist = wishlist.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <p>{product.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>

      <div className="actions">
        <button
          disabled={!product.inStock || inCart}
          onClick={() => addToCart(product)}
        >
          {inCart ? "✔ Added" : "🛒 Add to Cart"}
        </button>

        <button onClick={() => toggleWishlist(product)} className="wishlist-btn">
          {inWishlist ? <HeartOff color="red" /> : <Heart />}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;