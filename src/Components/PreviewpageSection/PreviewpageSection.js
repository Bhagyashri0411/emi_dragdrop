import React from 'react'

const PreviewpageSection = React.memo(({ code }) => {
    return <div className='pt-3' dangerouslySetInnerHTML={{ __html: code }} />;

})
export default PreviewpageSection;