import React from 'react';

const PreviewpageSection = React.memo(() => {
  // Retrieve the saved code from localStorage
  const savedCode = localStorage.getItem('savedCode');

  return <div className='preview' dangerouslySetInnerHTML={{ __html: savedCode }} />;
});

export default PreviewpageSection;
