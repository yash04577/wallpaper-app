import { basePath } from '@/apiRoutes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, {Axios} from "axios";
// Async thunk for fetching data
export const getImagesAsynch = createAsyncThunk(
  'image/getImagesAsynch',
  async (param, thunkAPI) => {
    try {
        console.log("param ", param)
      const {data} = await axios.get(`${basePath}&page=${param?.page}&q=${param?.search}`);
    //   console.log("resssssss ", data);
      return data;
    } catch (error) {
      console.log("error on fetching images ", error)
    }
  }
);

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    data: [],
    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    resetData: (state) => {
        state.data = [];
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImagesAsynch.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getImagesAsynch.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = [...state.data, ...action.payload.hits];
        // state.data = action.payload.hits;
      })
  },
});

export const { resetData } = imageSlice.actions;
export default imageSlice.reducer;
