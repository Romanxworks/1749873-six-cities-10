import {memo} from 'react';

function LoadingPage(): JSX.Element {
  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">Loading ...</b>
      <p>Please wait ...</p>
    </div>
  );
}

export default memo(LoadingPage);
