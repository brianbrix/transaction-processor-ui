import React from "react";
import axios from 'axios';
import Unmatched from '../src/Unmatched'
class UploadRes extends React.Component {
    constructor(){
        super();
        this.state = {
            unmatchedData:{},
        }

    }
    getMatches(){
        let url = "https://fierce-beyond-91184.herokuapp.com/api/matches";

        axios.get(url)
            .then(res => { // then print response status
                this.setState({
                    unmatchedData: res.data,
                })
                console.warn(res);
            }).catch(error => {
            console.log(error)
        })

    }
    render() {
        // console.log(this.data)
        return(
            <div>
            <div className="panel panel-default">

                <div className="panel-heading  text-center panel-relative">RESULTS</div>
                <br /><br />
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <h4> {this.props.file1}</h4>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <b>Total Records</b>:<label>{this.props.resData.file1.totalRecords}</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <b>Matching Records</b>:<label>{this.props.resData.file1.matchingRecords}</label>
                                </div>
                            </div>
                            <div className="form-row">

                                <div className="form-group col-md-6">
                                    <b>Unmatched records</b>:<label>{this.props.resData.file1.unmatchedRecords}</label>
                                </div>
                            </div>

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
                                    <b>Total Records</b>:<label>{this.props.resData.file2.totalRecords}</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <b>Matched Records</b>:<label>{this.props.resData.file2.matchingRecords}</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <b>Unmatched Records</b>:<label>{this.props.resData.file2.unmatchedRecords}</label>
                                </div>
                            </div>

                        </div>
                        <br/>

                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <button type="submit" className="btn btn-dark" onClick={()=>this.getMatches()}>Unmatched Report</button>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        {/*Unmatched Report*/}

                {Object.keys(this.state.unmatchedData).length>0?(
                    <Unmatched unmatched = {this.state.unmatchedData}/>):(<div></div>)}
            </div>
        )
    }
    }

export default UploadRes;