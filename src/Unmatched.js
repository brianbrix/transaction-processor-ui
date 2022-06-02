import React from "react";
import axios from 'axios';
class Unmatched extends React.Component {
    constructor() {
        super();

    }
render() {
        const tranArr = new Array();
        const tranArr2 = new Array();
        for (let i=0; i<this.props.unmatched.completeFails.length;i++)
        {
            tranArr.push([this.props.unmatched.completeFails[i].transaction.transactionId,this.props.unmatched.completeFails[i].transaction.transactionDate,this.props.unmatched.completeFails[i].transaction.transactionAmount,
                this.props.unmatched.completeFails[i].transaction.transactionNarrative])
            tranArr2.push([this.props.unmatched.completeFails[i].transaction2.transactionId,this.props.unmatched.completeFails[i].transaction2.transactionDate,this.props.unmatched.completeFails[i].transaction2.transactionAmount,
                this.props.unmatched.completeFails[i].transaction2.transactionNarrative])
        }


    return(
        <div className="panel panel-default">

            <div className="panel-heading  text-center panel-relative">RESULTS</div>
            <br />
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="container">
                            <h2>File 1</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Transaction Date</th>
                                <th>Amount</th>
                                <th>Narrative</th>
                            </tr>
                            </thead>
                            <tbody>
                            { tranArr.map(row => <tr>{ row.map(cell => <td>{ cell }</td>) }</tr>) }
                            </tbody>

                        </table>



                    </div>
                    </div>
                    <hr/>
                    <div className="col-md-6">
                        <div className="container">
                            <h2>File 2</h2>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Transaction Date</th>
                                <th>Amount</th>
                                <th>Narrative</th>
                            </tr>
                            </thead>
                            <tbody>

                            { tranArr.map(row => <tr>{ row.map(cell => <td>{ cell }</td>) }</tr>) }
                            </tbody>

                        </table>
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