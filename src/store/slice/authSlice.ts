import {createSlice} from '@reduxjs/toolkit';

interface AuthSliceState {
  isUserSignedIn: boolean;
}

const initialState: AuthSliceState = {
  isUserSignedIn: false,
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setIsUserSignedIn: (state, action) => {
      state.isUserSignedIn = action.payload;
    },
  },
});

export const {setIsUserSignedIn} = authSlice.actions;

export default authSlice.reducer;
