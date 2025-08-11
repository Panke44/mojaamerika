import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ src, alt, className, loading = 'lazy', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`image-placeholder ${className || ''}`} role="img" aria-label={alt}>
        <span>Slika nije dostupna</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className || ''} ${isLoaded ? 'loaded' : 'loading'}`}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager'])
};

export default memo(OptimizedImage);