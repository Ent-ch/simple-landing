import React from 'react';

export const catsPath = '/#/Services';
export const helpPath = '/#/Help';

export const fetchInit = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin'
};

export const Modal = ({ children, isOpen = false, handleClose }) => ( isOpen &&
	<div 
    tabindex="-1"
    className="modal fade bs-example-modal-lg in"
    role="dialog" aria-hidden="true"
    style={{ display: 'block' }}>
		<div className="modal-dialog modal-lg">
			<div className="modal-content">
				<div className="modal-header">
                    <button className="close" type="button" data-dismiss="modal" onClick={handleClose} >
                        <span aria-hidden="true">×</span>
					</button>
					<h4 className="modal-title" id="myModalLabel"></h4>
				</div>
				<div className="modal-body">
					{children}
				</div>
				<div className="modal-footer">
					<button className="btn btn-default" type="button" data-dismiss="modal" onClick={handleClose} >Close</button>
				</div>
			</div>
		</div>
	</div>
);

export class SlideBlock extends React.Component {

    render() {
        const { description, title, handleClose, icon, id } = this.props;

		return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
						<div className="x_title" id={id}>
                            <h2>{icon} {title}</h2>
                            <ul className="nav navbar-right panel_toolbox" style={{minWidth: '20px'}}>
                                <li>
                                    <a onClick={handleClose} >
                                        <i className='fa fa-close' />
                                    </a>
                                 </li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
						<div className="x_content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

