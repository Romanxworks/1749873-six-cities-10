import {memo} from 'react';

function PremiumFlag ():JSX.Element{
  return(
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

export default memo(PremiumFlag);
