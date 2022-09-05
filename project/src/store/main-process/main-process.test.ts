import {makeFakeCity, makeFakeOffer} from '../../mocks';
import {changeCity, changeOffersByCity, mainProcess} from './main-process';
import {CITIES} from '../../const';

const mockCity = makeFakeCity();
const mockOffers = Array.from({length: 3}, makeFakeOffer);

describe('Reducer: mainProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({city: CITIES[0], offersByCity: []});
  });
  it('should updated the city', () => {
    const state = {city: CITIES[0], offersByCity: []};
    expect(mainProcess.reducer(state, changeCity(mockCity)))
      .toEqual({city: mockCity, offersByCity: []});
  });
  it('should updated the offersByCity', () => {
    const state = {city: CITIES[0], offersByCity: []};
    expect(mainProcess.reducer(state, changeOffersByCity(mockOffers)))
      .toEqual({city: CITIES[0], offersByCity: mockOffers});
  });
});
