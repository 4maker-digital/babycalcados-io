import React, { useEffect } from 'react';

function MetaTag() {
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=1';

    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  return null;
}

export default MetaTag;