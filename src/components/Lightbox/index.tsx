import { useState } from "react";

type Image = {
  src: string;
  alt?: string;
};

type LightboxProps = {
  images: Image[]; // Array of images to display
};

const Lightbox: React.FC<LightboxProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousImage = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <button onClick={previousImage} className="absolute left-0 ml-4 text-white">
        &larr;
      </button>
      <div className="max-w-md mx-auto">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="object-contain max-w-full max-h-full w-full h-full"
        />
      </div>
      <button onClick={nextImage} className="absolute right-0 mr-4 text-white">
        &rarr;
      </button>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex overflow-x-auto">
        {images.map((image, index) => (
          <ImageThumbnail
            key={image.src}
            src={image.src}
            alt={image.alt}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

type ImageThumbnailProps = {
  src: string;
  alt?: string;
  isActive: boolean;
  onClick: () => void;
};

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({ src, alt, isActive, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={`w-24 h-24 object-cover cursor-pointer p-1 ${isActive ? 'border-4 border-red-500' : ''}`}
    />
  );
};

export default Lightbox;