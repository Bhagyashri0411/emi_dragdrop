import React from 'react'

export default function PreviewpageSection({ code }) {
    return <div className='pt-3' dangerouslySetInnerHTML={{ __html: code }} />;

}
