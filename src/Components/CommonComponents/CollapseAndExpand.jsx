import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

export default function CollapseAndExpand({ name, contentComponent: ContentComponent, componentProps }) {
    const [expand, setExpand] = useState(true);

    return (
        <>
            <div className=" section-header">
                <div className=" panel-title-container">
                    <span className=" panel-title">{name}</span>
                </div>
                <button className="pt-btn" onClick={() => setExpand(!expand)}>
                    <div className="pt-icon">
                        {expand ? <Plus /> : <Minus />}
                    </div>
                </button>
            </div>

            {!expand && <ContentComponent {...componentProps} />}
        </>
    );
}
