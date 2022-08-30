import {MAX_IMAGES_COUNT} from '../../const';

type PropertyGalleryProps = {
    images: string[] | undefined;
    type: string | undefined;
};

function PropertyGallery ({images, type}:PropertyGalleryProps):JSX.Element {
  return(
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images?.slice(0,MAX_IMAGES_COUNT).map((image, i) => {
          const keyValue = `${image}-${i}`;
          return(
            <div key={keyValue} className="property__image-wrapper">
              <img className="property__image" src = {image} alt = {type}/>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default PropertyGallery;
