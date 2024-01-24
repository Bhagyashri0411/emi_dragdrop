import React from 'react'

export function WidthAndHeightComponent({ size, funOnchange }) {
    return (
        <div className="section-wrapper my-2">
            <span className="size">Width</span>
            <div className="pt-input">
                <input type="number" placeholder="auto" value={size.width}
                    onChange={(e) => funOnchange(e, "width")} />
            </div>
            <span className="size">Height</span>
            <div className="pt-input">
                <input type="number" placeholder="auto" value={size.height}
                    onChange={(e) => funOnchange(e, "height")} />
            </div>
        </div>
    )
}


export function FontSizeAndWeightComponent({ size, funOnchange }) {
    return (
        <div className="section-wrapper my-1">
            <span className="size">Size</span>
            <div className="pt-input">
                <input type="number" placeholder="auto" value={size.fontSize} onChange={(e) => funOnchange(e, "fontSize")} />
            </div>
            <span className="size">Weight</span>
            <div className="pt-input">
                <select id="fontWeight"
                    value={size.fontWeight} onChange={(e) => funOnchange(e, "fontWeight")}
                >
                    <option value="300" style={{ fontWeight: 300 }} >300 Light</option>
                    <option value="400" style={{ fontWeight: 400 }}>400 Regular</option>
                    <option value="500" style={{ fontWeight: 500 }}>500 Medium</option>
                    <option value="600" style={{ fontWeight: 600 }}>600 Semi-Bold</option>
                    <option value="700" style={{ fontWeight: 700 }}>700 Bold</option>
                    <option value="800" style={{ fontWeight: 800 }}>800 Extra-Bold</option>
                </select>
            </div>
        </div>
    )
}

export function PaddingComponent({ size, funOnchange }) {
    return (
        <div className="section-wrapper">
            <span className="size">Top</span>
            <div className="pt-input">
                <input type="number" placeholder="auto" value={size.padding[0]} onChange={(e) => funOnchange(e, "padding.0")} />
            </div>
            <span className="size">Left</span>
            <div className="pt-input">
                <input type="number" placeholder="auto" value={size.padding[1]} onChange={(e) => funOnchange(e, "padding.1")} />
            </div>
        </div>
    )
}