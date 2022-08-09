import {useState, SyntheticEvent} from 'react';
// import {useAppSelector} from '../../hooks';
// import { Offer } from '../../types/offer';
function MainSort ():JSX.Element{
  const [sortState, setSortState] = useState(false);
  const [sortName, setSortName] = useState('Popular');
  //   const offers = useAppSelector((state) => (state.offers));
  //   const sortByPrice = (pointA:Offer, pointB:Offer) => pointB.price - pointA.price;
  const getSotrName = ({currentTarget}:SyntheticEvent<HTMLElement>) => {
    setSortName(currentTarget.innerHTML);
    setSortState(!sortState);

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
        <li className="places__option" tabIndex={0} data-sort = 'PriceLow' onClick = {getSotrName}>Price: low to high</li>
        <li className="places__option" tabIndex={0} data-sort = 'PriceHigh' onClick = {getSotrName}>Price: high to low</li>
        <li className="places__option" tabIndex={0} data-sort = 'Rated' onClick = {getSotrName}>Top rated first</li>
      </ul>
    </form>
  );
}

export default MainSort;
