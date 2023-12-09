import React from 'react'
import { Button } from 'react-bootstrap'

export default function AddGridInGrid(props) {
    return (
        <>
            {props.nestedGridBlock.map((nestedGrid, key) => {
                (
                    <div
                    key={key}
                        className="grid-container"
                        style={{
                            gridTemplateColumns: `repeat(${nestedGrid.ncolumns}, 1fr)`,
                        }}
                    >
                        {nestedGrid.items.map((item, key) => (
                            <div className='grid-item'
                                key={key}
                            >
                                {item.text}

                            </div>
                        ))}
                    </div>
                )
            }
            )}
        </>
    )
}
