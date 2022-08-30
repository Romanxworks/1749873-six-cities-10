import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, CITIES} from '../../const';
import {MainProcess} from '../../types/state';

const initialState: MainProcess = {
  city: CITIES[0],
  offersByCity: [],
};


export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeOffersByCity: (state, action) => {
      state.offersByCity = action.payload;
    }
  },
});

export const {changeCity, changeOffersByCity} = mainProcess.actions;
