import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IContact } from "../../../services/IContact";

// Define a type for the slice state
interface ContactState {
  selected: IContact;
}

// Define the initial state using that type
const initialState: ContactState = {
  selected: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};

export const contactSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    selectContact: (state, action: PayloadAction<IContact>) => {
      state.selected = action.payload;
    },
  },
});

export const { selectContact } = contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContactSelected = (state: RootState) =>
  state.contact.selected;

export default contactSlice.reducer;
