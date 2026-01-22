import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  priceRange: { min: 0, max: 1000 },
  searchQuery: "",
  sortBy: "default", // default, price-low, price-high, rating
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearCategory: (state) => {
      state.selectedCategory = null;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearchQuery: (state) => {
      state.searchQuery = "";
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilters: (state) => {
      state.selectedCategory = null;
      state.priceRange = { min: 0, max: 1000 };
      state.searchQuery = "";
      state.sortBy = "default";
    },
  },
});

// Selectors
export const selectCategory = (state) => state.filter.selectedCategory;
export const selectPriceRange = (state) => state.filter.priceRange;
export const selectSearchQuery = (state) => state.filter.searchQuery;
export const selectSortBy = (state) => state.filter.sortBy;

export const {
  setCategory,
  clearCategory,
  setPriceRange,
  setSearchQuery,
  clearSearchQuery,
  setSortBy,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
