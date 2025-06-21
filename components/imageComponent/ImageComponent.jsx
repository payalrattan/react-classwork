export const ImageComponent = ({ imageUrl, alt }) => {  
  return (
    <img
      src={imageUrl}
      alt={alt}
      className="image-component"
    />
  );
}