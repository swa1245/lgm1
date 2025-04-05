import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import proSeriesX1Image1 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.53_7ab433e5.jpg';
import proSeriesX1Image2 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.54_3b7058b3.jpg';
import proSeriesX1Image3 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.54_bfbf990d.jpg';
import proSeriesX1Image4 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.55_502990e2.jpg';
import proSeriesX1Image5 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.55_7a2241ff.jpg';
import proSeriesX1Image6 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.56_4c43e70b.jpg';
import proSeriesX1Image7 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.56_6f348e04.jpg';
import proSeriesX1Image8 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.56_f877c57c.jpg';
import proSeriesX1Image9 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.57_58c0a331.jpg';
import proSeriesX1Image10 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.57_d6d89682.jpg';
import proSeriesX1Image11 from '../../assets/inlineskate/WhatsApp Image 2025-04-03 at 11.42.58_0e2215ae.jpg';

const ProSeriesX1 = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = {
    name: 'Pro Series X1',
    price: 4999,
    description: 'Competition-grade speed skates designed for maximum performance and speed.',
    images: [
      proSeriesX1Image1,
      proSeriesX1Image2,
      proSeriesX1Image3,
      proSeriesX1Image4,
      proSeriesX1Image5,
      proSeriesX1Image6,
      proSeriesX1Image7,
      proSeriesX1Image8,
      proSeriesX1Image9,
      proSeriesX1Image10,
      proSeriesX1Image11,
    ],
  };

  const handleAddToCart = () => {
    addToCart({
      id: 'pro-series-x1',
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.images[0],
      category: 'inline-skates'
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img src={product.images[currentImageIndex]} alt={product.name} className="w-full h-auto mb-4" />
          <div className="flex space-x-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                className={`w-16 h-16 object-cover cursor-pointer ${currentImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Price: ₹{product.price}</p>
          <button 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProSeriesX1;
