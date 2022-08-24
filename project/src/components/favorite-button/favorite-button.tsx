
type FavoriteButtonProps = {
    handleClickFavorite: () => void;
    isFavorite: boolean | undefined
};

function FavoriteButton ({handleClickFavorite, isFavorite}:FavoriteButtonProps):JSX.Element{

  return(
    <button className= {`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button" onClick = {handleClickFavorite}>
      <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
