import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = [
        {
          asignName: "A1",
          marks: 54,
          highest: 60
        },
        {
          asignName: "A2",
          marks: 60,
          highest: 60
        },
        {
          asignName: "A3",
          marks: 60,
          highest: 60
        },
        {
          asignName: "A4",
          marks: 60,
          highest: 60
        },
        {
          asignName: "A5",
          marks: 60,
          highest: 60
        },
        {
          asignName: "A5",
          marks: 60,
          highest: 60
        },
        {
          asignName: "A7",
          marks: 60,
          highest: 60
        },
        {
          asignName: "A8",
          marks: 60,
          highest: 60
        }
      ];

    //   const label = [a,b,c,d,e,f,g,h]

    function getIntroOfPage(label) {
        if (label === 'A1') {
          return 'Assignment 1';
        } if (label === 'A2') {
          return 'Assignment 2';
        } if (label === 'A3') {
          return 'Assignment 3';
        } if (label === 'A4') {
          return 'Assignment 4';
        } if (label === 'A5') {
          return 'Assignment 5';
        } if (label === 'A6') {
          return 'Assignment 6';
        }
         if (label === 'A7') {
          return 'Assignment 7';
        }
         if (label === 'A8') {
          return 'Assignment 8';
        }
      }
      

      function CustomTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="intro">{getIntroOfPage(label)}</p>
              <p className="label">{`Marks : ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      }

    return (
        <div>
            <h3 className='text-center font-bold text-3xl my-4 underline'>Assignment Marks:-</h3>
            
            {/* Area chart */}
            <div className='w-3/4 mx-auto'>
                <AreaChart width={900} height={400} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#7E90FE" />
                    {/* <Tooltip/> */}
                    <Tooltip content={<CustomTooltip />}/>
                    <XAxis dataKey='asignName'/>
                    <YAxis/>
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;