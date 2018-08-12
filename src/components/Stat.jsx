import React from 'react';

import { apiUrl } from '../constant.js';

export default class Stat extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch(`${apiUrl}/Services/getInformatiotForFirstPage`).then(data => data.json()).then(data => {
      this.setState({data});
    });
  }

  render() {
    const { totalservicecount, totalapicount, totaldatatypecount, totalapiservers } = this.state.data;
    const arrStat = [
      { title: 'Services supported', value: totalservicecount, url: '/#/Services/all' },
      { title: 'APIs', value: totalapicount, url: '/#/Services/all' },
      { title: 'Data types', value: totaldatatypecount, url: '/#/Services/all' },
      { title: 'Free bNesis API Servers', value: totalapiservers, url: '/#/Services/all' },
    ];

    return (<div className="row tile_count" id="firstPageInformation1">
      {arrStat.map((el, i) =>(
      <a className="col-md-3 col-sm-3 col-xs-6 tile_stats_count" href={el.url} key={i}>
        <span className="count_top"><h4><i className="fa fa-bookmark"></i> {el.title}</h4></span>
        <div className="count green">{el.value}</div>
      </a>
      ))}
    </div>);
  }
}
