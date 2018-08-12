import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

import { apiUrl } from '../constant.js';
import Stat from './Stat.jsx';

const {global, line} = defaults;

const chartOptions = {
    ...global,
    ...line,
    responsive: true,
    title: {
        display: true,
        text: 'bNesis SDK development statistics'
    },
    tooltips: {
        mode: 'label',
    },
    hover: {
        mode: 'dataset'
    },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                show: true,
                labelString: 'Date'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                show: true,
                labelString: 'Value'
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 30,
            }
        }]
    }
};

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {},
            loaded: false,
        };
    }

    componentDidMount() {
        this.getData();
    }


    getData = () => {
        fetch(`${apiUrl}/SDKStatistics/GetChartConfigData`).then(data => {
            return data.json();
        }).then(chartData => {

            this.setState({ chartData, loaded: true });
        });
    }

    render() {
        const { chartData, loaded } = this.state; 

        if (!loaded) {
            return null;
        }

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="x_panel">
                        <Stat />
                        <Line
                          data={chartData}
                          height={200}
                          options={chartOptions}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
