import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

import { feedBackUrl } from '../constant.js';

export default class Feedback extends React.Component {
  state = {
    data: '',
  };

  componentDidMount() {
  }

  handleSubmit = ev => {
    ev.preventDefault();  // prevent form submission
    const formData  = new FormData();
    const entryData = this.input.controlEl.value.trim();

    formData.append('entry.1907684808', entryData);
    
    fetch(feedBackUrl, {
      method: 'post',
      mode: 'no-cors',
      headers: {
        // 'Accept': 'application/xml, text/xml, */*; q=0.01',
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },    
      body: formData
    }).then(resp => {
      console.log(resp);

      fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vS6hh_0QQ6X0DRTfwz4PtS9Q9kicXmBN2-FP_JCcjg8Fb75qs8qe3qWmmLzjrxGR3hNTheoEFrMwfje/pub?output=csv")
      .then(resp => resp.text()).then(data => {
        console.log(data);

        this.setState({ data });
      })
    });
     
  }

  render() {
    const { data } = this.state;

    return (<Container>
      <Form onSubmit={this.handleSubmit}>
        <legend>Feedback</legend>
        <Input ref={el => { this.input = el; }} name="userName" placeholder="Name" required />
        <Textarea name="comment" placeholder="Comment" />
        <Button variant="raised">Submit</Button>
      </Form>
      
      <pre>{data}</pre>
    </Container>);
  }
}
