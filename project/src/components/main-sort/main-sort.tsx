import {useState, SyntheticEvent, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeOffersByCity} from '../../store/main-process/main-process';
import { getOffersByCityName } from '../../store/main-process/selectors';
// import {getCity} from '../../store/main-process/selectors';
// import { Offer } from '../../types/offer';
// import { getOffers } from '../../store/offers-data/selectors';
import {sortByPriceToLow, sortByPriceToHigh, sortByRating} from '../../utils';

// type MainSortProps = {
//   offers: Offer[]
// }

function MainSort ():JSX.Element{
  const dispatch = useAppDispatch();
  const [sortState, setSortState] = useState(false);
  const [sortName, setSortName] = useState('Popular');
  const offers = useAppSelector(getOffersByCityName);
  const sortOffers = offers.slice();

  const getSotrName = ({currentTarget}:SyntheticEvent<HTMLElement>) => {
    setSortName(currentTarget.innerHTML);
    setSortState(!sortState);

    switch (currentTarget.dataset.sort) {
      case 'PriceLow':
        sortOffers.sort(sortByPriceToLow);
        dispatch(changeOffersByCity(sortOffers));
        break;
      case 'PriceHigh':
        sortOffers.sort(sortByPriceToHigh);
        dispatch(changeOffersByCity(sortOffers));
        break;
      case 'Rated':
        sortOffers.sort(sortByRating);
        dispatch(changeOffersByCity(sortOffers));
        break;
      case 'Popular':
        dispatch(changeOffersByCity(offers));
        break;
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex= {0} onClick = {()=> setSortState(!sortState) }>
        {sortName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className = {`places__options places__options--custom places__options--${sortState && 'opened'}`} >
        <li className="places__option places__option--active" tabIndex={0} data-sort = 'Popular' onClick = {getSotrName}>Popular</li>
        <li className="places__option" tabIndex={0} data-sort = 'PriceHigh' onClick = {getSotrName}>Price: low to high</li>
        <li className="places__option" tabIndex={0} data-sort = 'PriceLow' onClick = {getSotrName}>Price: high to low</li>
        <li className="places__option" tabIndex={0} data-sort = 'Rated' onClick = {getSotrName}>Top rated first</li>
      </ul>
    </form>
  );
}

export default memo(MainSort);
