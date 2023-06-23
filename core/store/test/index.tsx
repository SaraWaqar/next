import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { testService } from "../../../core/services";


interface InitialState{
    entities: []
}

// First, create the thunk
export const fetchAll = createAsyncThunk("test/getAll", async () => {
  console.log("try");
  try {
    const response = await testService.getAll();
    console.log(response);
    return response.data
  } catch (error) {
    console.log(error);
  }
}); 

// Then, handle actions in your reducers:
const Slice = createSlice({
  name: "test",
  initialState: { entities: [] } as InitialState,

  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(
        fetchAll.fulfilled, (state, action) =>{
            console.log("action playlod", action.payload);
            state.entities =  action.payload
        } 
    )
  },
});

// Later, dispatch the thunk as needed in the app
export default Slice.reducer;
