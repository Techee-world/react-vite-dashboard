import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Circle from './circle/Circle';

function ProgressBar({value}) {

  return (
    <div>
      <div label="Progressbar with separators" className="w-40 h-40">
        <CircularProgressbarWithChildren
          value={value}
          text={`${value}%`}
          strokeWidth={10}
          styles={buildStyles({
            strokeLinecap: 'butt'
          })}
        >
          <Circle
            count={12}
            style={{
              background: '#fff',
              width: '2px',
              height: `${10}%`
            }}
          />
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}

export default ProgressBar;
