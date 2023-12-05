import React from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import BlockSection from './StyleComponents/BlockSection';
import "./StyleComponents/Section.css"
import TextSection from './StyleComponents/TextSection';

export default function StyleComponent(props) {
 
    return (
        <div className='stylecomponet'>

            <div className="subheading">
                <div className='icon' onClick={props.handleFun}>
                    {props.open ?
                        <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />
                    }
                </div>

                <ul className="nav nav-tabs tabes" id="ex1" role="tablist" style={{ display: props.open  ? "none":'' }}>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="ex1-tab-1" data-bs-toggle="tab" href="#ex1-tabs-1" role="tab" aria-selected="true">
                            Block
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="ex1-tab-2" data-bs-toggle="tab" href="#ex1-tabs-2" role="tab" aria-selected="false">
                            Text
                        </a>
                    </li>
                </ul>


            </div>

            <div className="tab-content mt-2" id="ex1-content">
                <div className="tab-pane fade show active" id="ex1-tabs-1" aria-labelledby="ex1-tab-1">
                    <BlockSection {...props} />
                </div>
                <div className="tab-pane fade" id="ex1-tabs-2" aria-labelledby="ex1-tab-2">
                    <TextSection {...props} />
                </div>
            </div>
        </div>
    )
}
