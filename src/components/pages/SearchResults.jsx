import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import SubNav from '../SubNav';

// Import product data
import inlineSkatesData from '../../data/inlineSkates';
import rollerSkatesData from '../../data/rollerSkates';
import wheelsData from '../../data/wheels';
import bootsData from '../../data/boots';
import framesData from '../../data/frames';
import accessoriesData from '../../data/accessories';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q') || '';
  const { addToCart } = useCart();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Function to search across all product data
  useEffect(() => {
    setLoading(true);
    
    // Combine all product data
    const allProducts = [
      ...mapProducts(inlineSkatesData || [], 'Inline Skates', '/inline-skates'),
      ...mapProducts(rollerSkatesData || [], 'Roller Skates', '/roller-skates'),
      ...mapProducts(wheelsData || [], 'Wheels', '/wheels'),
      ...mapProducts(bootsData || [], 'Boots', '/boots'),
      ...mapProducts(framesData || [], 'Frames', '/frames'),
      ...mapProducts(accessoriesData || [], 'Accessories', '/accessories')
    ];
    
    // Filter products based on search query
    const filteredResults = allProducts.filter(product => {
      const searchLower = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
      );
    });
    
    // Extract unique categories
    const uniqueCategories = [...new Set(filteredResults.map(item => item.category))];
    setCategories(uniqueCategories);
    
    setResults(filteredResults);
    setLoading(false);
  }, [searchQuery]);

  // Helper function to map product data to a consistent format
  function mapProducts(products, category, categoryPath) {
    return products.map(product => ({
      ...product,
      category,
      categoryPath
    }));
  }

  // Filter results by selected category
  const filteredResults = selectedCategory === 'all' 
    ? results 
    : results.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 from-10% via-blue-100 via-50% to-white to-90%">
      <SubNav />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Search Results for "{searchQuery}"
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Found {filteredResults.length} products matching your search
            </p>
          </div>

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Filter by Category</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Categories
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any products matching "{searchQuery}".
              </p>
              <Link 
                to="/"
                className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredResults.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative p-4">
                    <div className="absolute top-2 right-2 z-10">
                      <div className="px-3 py-1 bg-white shadow-sm text-gray-900 text-xs font-medium rounded-full">
                        ₹{product.price}
                      </div>
                    </div>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-contain mb-4"
                    />
                    <div className="absolute top-2 left-2">
                      <Link 
                        to={product.categoryPath}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-200 transition-colors"
                      >
                        {product.category}
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                      <Link
                        to={`${product.categoryPath}?product=${product.id}`}
                        className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-200 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
