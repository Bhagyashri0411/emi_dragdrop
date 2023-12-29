import React from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ColumnAndRow from '../GridStyleComponents/ColumnAndRow'
import BlockSection from '../GridStyleComponents/BlockSection';
import DoughnutGraph from '../../GraphComponent/DoughuntGraph';
import PieChartComponent from '../../../Charts/PieChartComponent';
import MakeTableElements from '../GridStyleComponents/MakeTableElements';
import { CardText } from '../GridStyleComponents/Texts/CardText';
import InputForm from '../GridStyleComponents/InputForm';
import EditText from '../GridStyleComponents/EditText';
import EditRadio from '../GridStyleComponents/EditFields/EditRadio';
import EditDatePicker from '../GridStyleComponents/EditFields/EditDatePicker';
import AddGraphType from '../GridStyleComponents/GraphSection/AddGraphType';

const GridOptionComponent = React.memo((props) => {
  console.log(props.selectedText[1]);
  return (
    <div className='stylecomponet'>

      <div className="subheading">
        <div className='icon' onClick={props.handleFun}>
          {props.open ?
            <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />
          }
        </div>

        <ul className="nav nav-tabs tabes" id="grid" role="tablist" style={{ display: props.open ? "" : 'none' }}>
          {props.selectedGrid[0] === 'open' &&
            <li className="nav-item" role="presentation">
              <a className="nav-link active">
                Grid format
              </a>
            </li>
          }

          {props.selectedText[1] === "" && props.selectedText[3] === "empty_header" &&
            <>
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="grid-tab-1" data-bs-toggle="tab" href="#grid-tabs-1" role="tab" aria-selected="true">
                  Add Heading
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="grid-tab-2" data-bs-toggle="tab" href="#grid-tabs-2" role="tab" aria-selected="true">
                  Add Input
                </a>
              </li>
            </>
          }

          {props.selectedText[1].includes("text") && props.selectedText[3] === "header" &&
            <li className="nav-item" role="presentation">
              <a className="nav-link active">
                Edit Text
              </a>
            </li>
          }

          {props.selectedText[1].includes("radio") && props.selectedText[3] === "header" &&
            <li className="nav-item" role="presentation">
              <a className="nav-link active">
                radio Text
              </a>
            </li>
          }
          {props.selectedText[1].includes("datepicker") && props.selectedText[3] === "header" &&
            <li className="nav-item" role="presentation">
              <a className="nav-link active">
                edit datepicker
              </a>
            </li>
          }

          {props.selectedText[3] == "empty_body" &&
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
          }

          {props.selectedGrid[1] !== "" &&
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="grid-tab-2" data-bs-toggle="tab" href="#grid-tabs-2" role="tab" aria-selected="true">
                Block
              </a>
            </li>}
        </ul>
      </div>


      {/* Grid style component */}
      <div className="tab-content mt-2" id="grid-content" style={{ display: props.open ? "" : 'none' }}>
        {props.selectedGrid[0] === "open" && <ColumnAndRow {...props} />}

        {props.selectedText[1] === "" && props.selectedText[3] === "empty_header" &&
          <>
            <div className="tab-pane active" id="grid-tabs-1" aria-labelledby="1">
              <CardText {...props} />
            </div>
            <div className="tab-pane" id="grid-tabs-2" aria-labelledby="1">
              <InputForm {...props} />
            </div>
          </>
        }

        {props.selectedText[1].includes("text") &&
          <EditText {...props} />
        }

        {props.selectedText[1].includes("radio") && props.selectedText[3] === "header" &&
          <EditRadio {...props} />
        }

        {props.selectedText[1].includes("datepicker") && props.selectedText[3] === "header" &&
          <EditDatePicker {...props} />
        }

        {props.selectedText[3] === "empty_body" &&
          <>
            <div className="tab-pane active" id="grid-tabs-3" aria-labelledby="3">
              <CardText {...props} />
            </div>
            <div className="tab-pane" id="grid-tabs-4" aria-labelledby="4">
              <AddGraphType {...props} />
            </div>
            <div className="tab-pane" id="grid-tabs-5" aria-labelledby="5">
              <MakeTableElements {...props} />
            </div>
          </>
        }
        {props.selectedGrid[1] !== "" &&
          <div className="tab-pane active" id="grid-tabs-2" aria-labelledby="grid-tab-2">
            <BlockSection {...props} />
          </div>
        }

      </div>
    </div>
  )
})
export default GridOptionComponent