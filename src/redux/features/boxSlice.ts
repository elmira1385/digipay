import { createSlice } from "@reduxjs/toolkit";


export interface IOpenState {
  boxes: {
    [key:string]: boolean;
  };
}

const initialState: IOpenState = {
  boxes: {
    "box1": true,
    "box2": true,
    "box3": true,
    "box4": true,
  },
};

export const boxSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    toggleBox: (state, action) => {
      const boxId = action.payload;
      state.boxes[boxId]=!state.boxes[boxId]
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleBox } = boxSlice.actions;

export default boxSlice.reducer;
