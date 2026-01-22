import { createSlice } from "@reduxjs/toolkit";

// Load wishlist from localStorage
const loadWishlistFromStorage = () => {
  try {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  } catch (error) {
    console.error("Error loading wishlist from localStorage:", error);
    return [];
  }
};

// Save wishlist to localStorage
const saveWishlistToStorage = (wishlist) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } catch (error) {
    console.error("Error saving wishlist to localStorage:", error);
  }
};

const initialState = {
  items: loadWishlistFromStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);

      if (!exists) {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          discountPercentage: product.discountPercentage || 0,
          thumbnail: product.thumbnail,
          images: product.images,
          rating: product.rating,
        });
        saveWishlistToStorage(state.items);
      }
    },
    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      saveWishlistToStorage(state.items);
    },
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id,
      );

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          discountPercentage: product.discountPercentage || 0,
          thumbnail: product.thumbnail,
          images: product.images,
          rating: product.rating,
        });
      }
      saveWishlistToStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToStorage(state.items);
    },
    moveAllToCart: (state) => {
      // This action only clears wishlist - cart addition handled separately
      state.items = [];
      saveWishlistToStorage(state.items);
    },
  },
});

// Selectors
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;
export const selectIsInWishlist = (state, productId) =>
  state.wishlist.items.some((item) => item.id === productId);

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
  moveAllToCart,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
