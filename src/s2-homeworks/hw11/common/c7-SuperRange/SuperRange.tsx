import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                position: 'relative',
                maxWidth: '147px',
                '& .MuiSlider-track': {
                    backgroundColor: '#0c2;',
                    border: 'none',
                    borderRadius: '10px',
                    height: '4px',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8b8b8b',
                    border: 'none',
                    borderRadius: '10px',
                    height: '4px',
                },
                '& .MuiSlider-thumb': {
                    border: '1px solid #0c2',
                    width: '18px',
                    height: '18px',
                    background: '#fff',
                    position: 'absolute',
                    left: '-9px',
                    
                },
                '& .MuiSlider-thumb::before' : {
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#0c2',
                    boxShadow: 'none'
                }
            }}
            valueLabelDisplay='off'
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
