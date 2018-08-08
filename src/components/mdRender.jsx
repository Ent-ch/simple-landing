import React from 'react';
import Remarkable from 'remarkable';

import { SlideBlock } from '../helpers.jsx';

export default class SlideDoc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    componentDidMount() {
        this.getData(this.props.chapter);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.chapter !== this.props.chapter) {
            this.getData(nextProps.chapter);
        }
    }

    getData = chapter => {
        const docsDir = 'https://raw.githubusercontent.com/bNesisDeveloper/bNesis/master/Landing/'

        fetch(`${docsDir}${chapter}.md`).then(data => {
            const text = data.text();

            return text;
        }).then(text => {
            if (text === 'Documentation not found') {
                return this.props.notFoundContent ? this.props.notFoundContent : text;
            }

            this.setState({text});
        });
    }

    render() {
        const { chapter = 'documentation', addTopClass = false } = this.props;
        const { text = '' } = this.state;
        const md = new Remarkable('full');
        let currDoc = text;

        let pureMd = md.render(text);
        
        currDoc =  addTopClass ? pureMd.replace(/href="#top"/g, 'href="#top" class="go-top"') : pureMd;

        return (
            <div className="doc-block">
                <div dangerouslySetInnerHTML={{ __html: currDoc }} />
            </div>
        );
    }
}
