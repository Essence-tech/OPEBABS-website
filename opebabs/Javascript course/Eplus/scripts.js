
// Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Handle dropdown menus on mobile
  if (dropdowns.length) {
    dropdowns.forEach(dropdown => {
      const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
      
      if (window.innerWidth <= 768 && dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        });
      }
    });
  }

  // Hero Slider
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  if (slides.length && dots.length && prevBtn && nextBtn) {
    let currentSlide = 0;

    // Set initial state
    showSlide(currentSlide);

    // Next/Prev button clicks
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    // Dot clicks
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Auto rotate slides
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }
  }

  // Mobile Filters
  const showFiltersBtn = document.getElementById('showFilters');
  const closeFilterBtn = document.getElementById('closeFilter');
  const mobileFilterOverlay = document.getElementById('mobileFilterOverlay');
  
  if (showFiltersBtn && closeFilterBtn && mobileFilterOverlay) {
    showFiltersBtn.addEventListener('click', function() {
      mobileFilterOverlay.classList.add('active');
    });
    
    closeFilterBtn.addEventListener('click', function() {
      mobileFilterOverlay.classList.remove('active');
    });
    
    // Copy desktop filters to mobile container
    const filtersContent = document.querySelector('.filters-sidebar');
    const mobileFilterContent = document.querySelector('.mobile-filter-content');
    
    if (filtersContent && mobileFilterContent) {
      mobileFilterContent.innerHTML = filtersContent.innerHTML;
      
      // Rebind events for mobile filters
      const mobileResetBtn = document.getElementById('resetMobileFilters');
      const mobileApplyBtn = document.getElementById('applyMobileFilters');
      
      if (mobileResetBtn && mobileApplyBtn) {
        mobileResetBtn.addEventListener('click', resetFilters);
        mobileApplyBtn.addEventListener('click', applyFilters);
      }
    }
  }

  // Initialize product data and render products
  initializeProducts();
});

// Sample product data
const products = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    category: "Smartphones",
    price: 999.99,
    originalPrice: 1099.99,
    discount: "9%",
    rating: 4.8,
    ratingCount: 2456,
    image: "https://placehold.co/400x400?text=iPhone+13+Pro",
    brand: "Apple",
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S22 Ultra",
    category: "Smartphones",
    price: 1199.99,
    originalPrice: 1299.99,
    discount: "8%",
    rating: 4.7,
    ratingCount: 1823,
    image: "https://placehold.co/400x400?text=Samsung+S22+Ultra",
    brand: "Samsung",
    featured: true,
    bestSeller: true
  },
  {
    id: 3,
    name: "MacBook Pro 14\"",
    category: "Laptops",
    price: 1999.99,
    originalPrice: 2199.99,
    discount: "9%",
    rating: 4.9,
    ratingCount: 1256,
    image: "https://placehold.co/400x400?text=MacBook+Pro",
    brand: "Apple",
    featured: true,
    bestSeller: false
  },
  {
    id: 4,
    name: "Dell XPS 15",
    category: "Laptops",
    price: 1799.99,
    originalPrice: 1999.99,
    discount: "10%",
    rating: 4.6,
    ratingCount: 892,
    image: "https://placehold.co/400x400?text=Dell+XPS+15",
    brand: "Dell",
    featured: false,
    bestSeller: true
  },
  {
    id: 5,
    name: "iPad Air",
    category: "Tablets",
    price: 599.99,
    originalPrice: 649.99,
    discount: "8%",
    rating: 4.7,
    ratingCount: 1432,
    image: "https://placehold.co/400x400?text=iPad+Air",
    brand: "Apple",
    featured: true,
    bestSeller: true
  },
  {
    id: 6,
    name: "Sony WH-1000XM4",
    category: "Audio",
    price: 349.99,
    originalPrice: 399.99,
    discount: "13%",
    rating: 4.8,
    ratingCount: 2145,
    image: "https://placehold.co/400x400?text=Sony+WH-1000XM4",
    brand: "Sony",
    featured: true,
    bestSeller: true
  },
  {
    id: 7,
    name: "Amazon Echo Dot",
    category: "Smart Home",
    price: 49.99,
    originalPrice: 59.99,
    discount: "17%",
    rating: 4.5,
    ratingCount: 3254,
    image: "https://placehold.co/400x400?text=Echo+Dot",
    brand: "Amazon",
    featured: false,
    bestSeller: true
  },
  {
    id: 8,
    name: "Samsung QLED TV",
    category: "TVs",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: "13%",
    rating: 4.7,
    ratingCount: 856,
    image: "https://placehold.co/400x400?text=Samsung+QLED+TV",
    brand: "Samsung",
    featured: true,
    bestSeller: false
  }
];

// Generate star rating HTML
function generateStars(rating) {
  let starsHtml = '';
  
  // Full stars
  const fullStars = Math.floor(rating);
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>';
  }
  
  // Half star
  if (rating % 1 >= 0.5) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>';
  }
  
  // Empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="far fa-star"></i>';
  }
  
  return starsHtml;
}

// Create a product card
function createProductCard(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">${generateStars(product.rating)}</div>
          <div class="rating-count">(${product.ratingCount})</div>
        </div>
        <div class="product-price">
          <div class="current-price">$${product.price.toFixed(2)}</div>
          <div class="original-price">$${product.originalPrice.toFixed(2)}</div>
          ${product.discount ? `<div class="discount">${product.discount} OFF</div>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn add-to-cart">
            <i class="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button class="wishlist-btn">
            <i class="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render products
function renderProducts(containerSelector, productList) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  let productsHtml = '';
  
  productList.forEach(product => {
    productsHtml += createProductCard(product);
  });
  
  container.innerHTML = productsHtml;
  
  // Add event listeners to product cards
  const addToCartButtons = container.querySelectorAll('.add-to-cart');
  const wishlistButtons = container.querySelectorAll('.wishlist-btn');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
  
  wishlistButtons.forEach(button => {
    button.addEventListener('click', toggleWishlist);
  });
}

// Add to cart
function addToCart(e) {
  const productCard = e.currentTarget.closest('.product-card');
  const productId = productCard.dataset.id;
  
  // Update cart count
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
  }
  
  // Animation feedback
  e.currentTarget.innerHTML = '<i class="fas fa-check"></i> Added';
  e.currentTarget.classList.add('added');
  
  setTimeout(() => {
    e.currentTarget.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
    e.currentTarget.classList.remove('added');
  }, 2000);
  
  console.log(`Added product ${productId} to cart`);
}

// Toggle wishlist
function toggleWishlist(e) {
  const button = e.currentTarget;
  const icon = button.querySelector('i');
  
  if (icon.classList.contains('far')) {
    icon.classList.remove('far');
    icon.classList.add('fas');
    icon.style.color = '#ef4444';
  } else {
    icon.classList.remove('fas');
    icon.classList.add('far');
    icon.style.color = '';
  }
}

// Filter and sort products for products page
function filterProducts() {
  // Get filter values
  const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(input => input.value);
  const selectedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked')).map(input => parseInt(input.value));
  const minPrice = parseInt(document.getElementById('price-min').textContent);
  const maxPrice = parseInt(document.getElementById('price-max').textContent);
  const sortValue = document.getElementById('sort') ? document.getElementById('sort').value : 'newest';
  
  // Filter products
  let filteredProducts = products.filter(product => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    const matchesRating = selectedRatings.length === 0 || selectedRatings.some(rating => product.rating >= rating);
    
    return matchesBrand && matchesPrice && matchesRating;
  });
  
  // Sort products
  switch (sortValue) {
    case 'newest':
      // Assuming products are already ordered by newest first
      break;
    case 'popular':
      filteredProducts.sort((a, b) => b.ratingCount - a.ratingCount);
      break;
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
  }
  
  // Update products count
  const productCount = document.getElementById('productCount');
  if (productCount) {
    productCount.textContent = filteredProducts.length;
  }
  
  // Render filtered products
  renderProducts('#productsGrid', filteredProducts);
}

// Reset filters
function resetFilters() {
  // Uncheck all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  
  // Reset price range
  const minPriceElem = document.getElementById('price-min');
  const maxPriceElem = document.getElementById('price-max');
  if (minPriceElem) minPriceElem.textContent = '0';
  if (maxPriceElem) maxPriceElem.textContent = '2000';
  
  // Reset slider position
  const slider = document.getElementById('price-slider');
  if (slider) {
    // Implementation depends on price slider library
  }
  
  // Reapply filters
  filterProducts();
}

// Apply filters
function applyFilters() {
  filterProducts();
  
  // Close mobile filter overlay if open
  const mobileFilterOverlay = document.getElementById('mobileFilterOverlay');
  if (mobileFilterOverlay && mobileFilterOverlay.classList.contains('active')) {
    mobileFilterOverlay.classList.remove('active');
  }
}

// Initialize products on page
function initializeProducts() {
  // Handle featured products
  const featuredProductsContainer = document.getElementById('featuredProducts');
  if (featuredProductsContainer) {
    const featuredProducts = products.filter(product => product.featured);
    renderProducts('#featuredProducts', featuredProducts);
  }
  
  // Handle best sellers
  const bestSellersContainer = document.getElementById('bestSellers');
  if (bestSellersContainer) {
    const bestSellerProducts = products.filter(product => product.bestSeller);
    renderProducts('#bestSellers', bestSellerProducts);
  }
  
  // Handle products listing page
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    // Set up filter events
    const applyFiltersBtn = document.getElementById('applyFilters');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const sortSelect = document.getElementById('sort');
    
    if (applyFiltersBtn) applyFiltersBtn.addEventListener('click', applyFilters);
    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetFilters);
    if (sortSelect) sortSelect.addEventListener('change', filterProducts);
    
    // Initial render of all products
    renderProducts('#productsGrid', products);
  }
  
  // Handle newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      if (emailInput && emailInput.value) {
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.textContent = 'Subscribed!';
          setTimeout(() => {
            submitBtn.textContent = 'Subscribe';
            emailInput.value = '';
          }, 3000);
        }
        
        console.log(`Newsletter subscription: ${emailInput.value}`);
      }
    });
  }
}
