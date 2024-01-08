import React from 'react'
import FontFamiliesList, { FontSize } from '../../CommonComponents/StyleSection/FontFamiliesList'
import { Form } from 'react-bootstrap';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { ColorPicker } from '../../CommonComponents/StyleSection/StyleSection';

export default function FontChanges() {
  return (
    <div className='fontBox'>
      <div className='fontBoxMain'>
        <div className='firstfontBox mb-2'>
          <select>
            <FontFamiliesList />
          </select>
          <select>
            <FontSize />
          </select>
        </div>
        <div className='firstfontBox'>
          <FormatBoldIcon />
          <FormatItalicIcon />
          <FormatUnderlinedIcon />
          <ColorPicker/>
        </div>
      </div>
    </div>
  )
}
