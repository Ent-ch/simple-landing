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

  sendData = () => {
    var field3 = 'eeeerrrr22244555';
    var url = "https://docs.google.com/forms/d/1uyfUirXounliTxoZ5XjSJmfVPR93w6KPCsE8deYZTPg/formResponse";
    
     
     var formData  = new FormData();
     formData.append("entry.1907684808", field3);
     
     fetch(url, {
       method: 'post',
       headers: {
         //'Accept': 'application/xml, text/xml, */*; q=0.01',
         //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
       },    
       body: formData
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
