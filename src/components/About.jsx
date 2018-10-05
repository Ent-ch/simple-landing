import React from 'react';

import { apiUrl } from '../constant.js';
// import Stat from './Stat.jsx';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {},
            loaded: false,
        };
    }

    componentDidMount() {
        // this.getData();
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
                    </div>
                </div>
            </div>
        );
    }
}
