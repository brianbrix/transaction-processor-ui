import React from "react";
import axios from 'axios';
class Unmatched extends React.Component {
render() {
    return(
        <div className="panel panel-default">

            <div className="panel-heading  text-center panel-relative">RESULTS</div>
            <br />
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-6">

                        <table>
                            <tr>
                                {this.props.unmatched.completeFails.transaction.map(column => <th>{column.data}</th>)}
                            </tr>
                        </table>

                    </div>
                    <hr/>
                    <div className="col-md-6">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <h4>{this.props.file2}</h4>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            </div>
                        </div>

                    </div>
                    <br/>

                </div>
                {/*<div className="row">*/}
                {/*    <div className="col-md-6 text-center">*/}
                {/*        <button type="submit" className="btn btn-dark" onClick={()=>this.getMatches()}>Unmatched Report</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <br/>
            </div>
        </div>
    )
}
}

export default Unmatched;