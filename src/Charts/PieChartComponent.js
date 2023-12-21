import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import "./graphs.css"

export default function PieChartComponent() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', width: '310px', height: '100%' }}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10 },
                                { id: 1, value: 15 },
                                { id: 2, value: 20 },
                            ],
                            innerRadius: 40,
                            outerRadius: 60, // Increase outer radius to accommodate labels
                        },
                    ]}
                    width={400} height={200}
                />
                {/* Custom element to display percentage in the center */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <div style={{ fontSize: '20px' }}>50</div>
                </div>
            </div>
            {/* Example of labels as rectangles inside circles */}
            {/* <div style={{ position: 'absolute', top: '50px', left: '280px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <div className='iconround' style={{  backgroundColor: 'blue' }}></div>
                    <span>Series A</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <div className='iconround' style={{ backgroundColor: 'green' }}></div>
                    <span>Series B</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='iconround' style={{ backgroundColor: 'orange' }}></div>
                    <span>Series C</span>
                </div>
            </div> */}
        </div>
    );
}
