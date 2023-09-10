import React from 'react';
import ContentLoader from 'react-content-loader';

function SkeletonAlbums() {
  return (
    <ContentLoader
      speed={3}
      width={205}
      height={205}
      viewBox="0 0 205 205"
      backgroundColor="#bdbdbd"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="5" ry="5" width="200" height="200" />
    </ContentLoader>
  );
}

export default SkeletonAlbums;
