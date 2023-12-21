import React from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ColumnAndRow from '../GridStyleComponents/ColumnAndRow'
import BlockSection from '../GridStyleComponents/BlockSection';
import TextSection from '../GridStyleComponents/TextSection';
import EditText from '../GridStyleComponents/EditText';
import DoughnutGraph from '../../GraphComponent/DoughuntGraph';
import PieChartComponent from '../../../Charts/PieChartComponent';
import MakeTableElements from '../GridStyleComponents/MakeTableElements';
import { Text } from "../GridStyleComponents/TextSection"

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
              props.selectPart[0] ?
                props.selectPart[1] === "header" ?
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="grid-tab-3" data-bs-toggle="tab" href="#grid-tabs-3" role="tab" aria-selected="true">
                      Text
                    </a>
                  </li>
                  :
                  <>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="grid-tab-3" data-bs-toggle="tab" href="#grid-tabs-3" role="tab" aria-selected="true">
                        Text
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="grid-tab-4" data-bs-toggle="tab" href="#grid-tabs-4" role="tab" aria-selected="true">
                        Graphs
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="grid-tab-5" data-bs-toggle="tab" href="#grid-tabs-5" role="tab" aria-selected="true">
                        Table
                      </a>
                    </li>
                  </>
                :
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="grid-tab-2" data-bs-toggle="tab" href="#grid-tabs-2" role="tab" aria-selected="true">
                    Block
                  </a>
                </li>
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
            props.selectPart[0] ?
              props.selectPart[1] === "header" ?
                <Text {...props} />
                :
                <>
                  <div className="tab-pane active" id="grid-tabs-3" aria-labelledby="3">
                    <TextSection {...props} />
                  </div>
                  <div className="tab-pane" id="grid-tabs-4" aria-labelledby="4">
                    <DoughnutGraph />
                    <PieChartComponent />
                  </div>
                  <div className="tab-pane" id="grid-tabs-5" aria-labelledby="5">
                    <MakeTableElements {...props} />
                  </div>
                </>
              :
              <div className="tab-pane active" id="grid-tabs-2" aria-labelledby="grid-tab-2">
                <BlockSection {...props} />
              </div>
        }

      </div>
    </div>
  )
})
export default GridOptionComponent