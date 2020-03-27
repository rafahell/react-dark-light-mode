import React from 'react'
import { Chart } from "react-google-charts";
import "./chart.css"

const ExampleChart = () => {

    return (
        <div className="chart">
            <Chart
                chartType="ScatterChart"
                spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
                options={{
                    hAxis: {
                        format: 'short',
                    },
                    vAxis: {
                        format: 'decimal',
                        // format:'scientific'
                        // format:'long'
                        // format:'percent'
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
};
export default ExampleChart;