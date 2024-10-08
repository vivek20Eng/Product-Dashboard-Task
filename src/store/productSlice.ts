import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../services/api';
import { Product } from '../types';

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  searchTerm: string;
  categoryFilter: string;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  searchTerm: '',
  categoryFilter: '',
  loading: false,
  error: null,
};

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  const response = await fetchProducts();
  return response;
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredProducts = filterProducts(state);
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.categoryFilter = action.payload;
      state.filteredProducts = filterProducts(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

const filterProducts = (state: ProductState) => {
  return state.products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(state.searchTerm.toLowerCase());
    const matchesCategory = state.categoryFilter === '' || product.category === state.categoryFilter;
    return matchesSearch && matchesCategory;
  });
};

export const { setSearchTerm, setCategoryFilter } = productSlice.actions;
export default productSlice.reducer;