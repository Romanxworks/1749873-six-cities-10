type PropertyInsideListProps = {
    goods:string[] | undefined;
}

function PropertyInsideList ({goods}:PropertyInsideListProps):JSX.Element {
  return (
    <ul className="property__inside-list">
      {goods?.map((good) => {
        const keyValue = `o-${good}`;
        return(
          <li key={keyValue} className="property__inside-item">
            {good}
          </li>
        );
      })}
    </ul>
  );
}

export default PropertyInsideList;
