import React from "react";
class Unmatched extends React.Component {

render() {
        const completeFailsArr1 = [];
        const completeFailsArr2 = [];
        const partialMathchesArr1 = [];
        const partialMathchesArr2 = [];
        for (let i=0; i<this.props.unmatched.completeFails.length;i++)
        {
            completeFailsArr1.push([this.props.unmatched.completeFails[i].transaction.transactionId,this.props.unmatched.completeFails[i].transaction.transactionDate,this.props.unmatched.completeFails[i].transaction.transactionAmount,
                this.props.unmatched.completeFails[i].transaction.transactionNarrative])
            completeFailsArr2.push([this.props.unmatched.completeFails[i].transaction2.transactionId,this.props.unmatched.completeFails[i].transaction2.transactionDate,this.props.unmatched.completeFails[i].transaction2.transactionAmount,
                this.props.unmatched.completeFails[i].transaction2.transactionNarrative])
        }
    for (let i=0; i<this.props.unmatched.partialMatches.length;i++)
    {
        partialMathchesArr1.push([this.props.unmatched.partialMatches[i].transaction.transactionId,this.props.unmatched.partialMatches[i].transaction.transactionDate,this.props.unmatched.partialMatches[i].transaction.transactionAmount,
            this.props.unmatched.partialMatches[i].transaction.transactionNarrative, this.props.unmatched.partialMatches[i].fields])
        partialMathchesArr2.push([this.props.unmatched.partialMatches[i].transaction2.transactionId,this.props.unmatched.partialMatches[i].transaction2.transactionDate,this.props.unmatched.partialMatches[i].transaction2.transactionAmount,
            this.props.unmatched.partialMatches[i].transaction2.transactionNarrative, this.props.unmatched.partialMatches[i].fields])
    }
    let nil = "N/A";

    // console.log(partialMathchesArr1.slice(1, partialMathchesArr1.length-1))


    return(

        <div className="panel panel-default">

            <div className="panel-heading  text-center panel-relative">RESULTS</div>
            <br />
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="container">
                            <h2>File 1</h2>
                        <table className="table" style={{overflow:"hidden"}}>
                            <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Transaction Date</th>
                                <th>Amount</th>
                                <th>Narrative</th>
                            </tr>
                            </thead>
                            <tbody>
                            { completeFailsArr1.map(row => <tr>{ row.map(cell => <td style={{color: "red"}}>{ cell!==null?cell:nil }</td>) }</tr>) }
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

                            { completeFailsArr2.map(row => <tr>{ row.map(cell => <td style={{color: "red"}}>{ cell!==null?cell:nil }</td>) }</tr>) }
                            </tbody>

                        </table>
                    </div>
                    </div>
                    <br/>

                </div>

                <br/>
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
                                { partialMathchesArr1.slice(0,-1).map(row => <tr>{ row.slice(0,-1).map(cell => <td>{ cell }</td>) }</tr>) }
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

                                { partialMathchesArr2.slice(0,-1).map(row => <tr>{ row.slice(0, -1).map(cell => <td>{ cell }</td>) }</tr>) }
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <br/>

                </div>
            </div>

        </div>
    )
}
}

export default Unmatched;