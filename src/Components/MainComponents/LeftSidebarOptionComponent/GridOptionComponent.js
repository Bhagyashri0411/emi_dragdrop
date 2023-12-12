import React from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ColumnAndRow from '../GridStyleComponents/ColumnAndRow'
import BlockSection from '../GridStyleComponents/BlockSection';
import TextSection from '../GridStyleComponents/TextSection';
import EditText from '../GridStyleComponents/EditText';

const GridOptionComponent = React.memo((props) => {

  return (
    <div className='stylecomponet'>

      <div className="subheading">
        <div className='icon' onClick={props.handleFun}>
          {props.open ?
            <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />
          }
        </div>

        <ul className="nav nav-tabs tabes" id="grid" role="tablist" style={{ display: props.open ? "" : 'none' }}>
          {props.selectedGrid[0] === 'open' ?
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="grid-tab-1" data-bs-toggle="tab" href="#grid-tabs-1" role="tab" aria-selected="true">
                Grid format
              </a>
            </li>

            :
            props.selectedText[0] ?
              <li className="nav-item" role="presentation">
                <a className="nav-link active">
                  Text
                </a>
              </li>
              :
              <>
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="grid-tab-2" data-bs-toggle="tab" href="#grid-tabs-2" role="tab" aria-selected="true">
                    Block
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="grid-tab-3" data-bs-toggle="tab" href="#grid-tabs-3" role="tab" aria-selected="true">
                    Text
                  </a>
                </li>
              </>
          }
        </ul>

      </div>


      {/* Grid style component */}
      <div className="tab-content mt-2" id="grid-content" style={{ display: props.open ? "" : 'none' }}>
        {props.selectedGrid[0] === "open" ?
          <div className="tab-pane fade show active" id="grid-tabs-1" aria-labelledby="grid-tab-1">
            <ColumnAndRow {...props} />
          </div>
          :
          props.selectedText[0] ?
            <div className="tab-pane active">
              <EditText {...props} />
            </div>
            :
            <>
              <div className="tab-pane active" id="grid-tabs-2" aria-labelledby="grid-tab-2">
                <BlockSection {...props} />
              </div>
              <div className="tab-pane" id="grid-tabs-3" aria-labelledby="grid-tab-3">
                <TextSection {...props} />
              </div>
            </>
        }

      </div>
    </div>
  )
})
export default GridOptionComponent