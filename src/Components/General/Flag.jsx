import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Flag = ({ countryCode, size = '21px', className = '', alt = '' }) => {
  // Correct Twemoji flag URLs (Apple-style)
  const flagUrls = {
    'US': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg',
    'RS': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f7-1f1f8.svg',
    'HR': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ed-1f1f7.svg',
    'ME': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f2-1f1ea.svg',
    'BA': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e7-1f1e6.svg',
    'DE': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1ea.svg',
    'FR': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1eb-1f1f7.svg',
    'GB': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ec-1f1e7.svg',
    'CA': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e8-1f1e6.svg',
    'AU': 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e6-1f1fa.svg'
  };

  const flagUrl = flagUrls[countryCode.toUpperCase()];
  
  // Fallback if no URL found
  if (!flagUrl) {
    return (
      <span 
        className={`flag-fallback ${className}`}
        style={{ 
          fontSize: '0.8em',
          display: 'inline-block',
          verticalAlign: 'middle',
          marginRight: '0.3em',
          padding: '2px 4px',
          background: '#f0f0f0',
          borderRadius: '3px'
        }}
        role="img"
        aria-label={alt || `${countryCode} flag`}
        title={alt || `${countryCode} flag`}
      >
        {countryCode.toUpperCase()}
      </span>
    );
  }
  
  return (
    <img
      src={flagUrl}
      alt={alt || `${countryCode} flag`}
      title={alt || `${countryCode} flag`}
      className={`flag-icon ${className}`}
      style={{
        width: size,
        height: 'auto',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '0.3em'
      }}
      onError={(e) => {
        // Replace with fallback text if image fails to load
        const fallback = document.createElement('span');
        fallback.className = `flag-text ${className}`;
        fallback.style.cssText = `
          font-size: ${size}; 
          display: inline-block; 
          vertical-align: middle; 
          padding: 2px 4px; 
          background: #f0f0f0; 
          border-radius: 3px; 
          font-size: 0.8em;
          margin-right: 0.3em;
        `;
        fallback.textContent = countryCode.toUpperCase();
        e.target.parentNode.replaceChild(fallback, e.target);
      }}
    />
  );
};

Flag.propTypes = {
  countryCode: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string
};

export default memo(Flag);