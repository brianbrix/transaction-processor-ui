import React from 'react'
import axios from 'axios';
import {useState} from "react";
class FileUpload extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedFile:'',
            selectedFile2:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
        })
    }
    handleInputChange2(event) {
        console.log(event.target.files[0])
        this.setState({
            selectedFile2: event.target.files[0],
        })
    }

    submit(){
        var data = new FormData()
        console.log(this.state.selectedFile2)
        console.log(this.state.selectedFile1)
        data.append('file1', this.state.selectedFile)
        data.append('file2', this.state.selectedFile2)
        console.warn(data);
        let url = "https://fierce-beyond-91184.herokuapp.com/api/upload";

        axios.post(url, data, { // receive two parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.warn(res);
            })

    }

    render(){
        return(
            <div className="container" style={{border: '1px solid #cecece', marginTop: '30px', marginBottom:'30px'}}>
            <div className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading">UPLOAD FILES</div>
                    <div className="panel-body">
                <div className="row">
                    <div className="col-md-6">
                        <br /><br />

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="">Select File 1 :</label>
                                <input type="file" className="form-control" name="file1" onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="">Select File 2 :</label>
                                <input type="file" className="form-control" name="file2" onChange={this.handleInputChange2} />
                            </div>
                        </div>


                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        {/*<div className="form-row">*/}
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Compare</button>
                            </div>
                        {/*</div>*/}

                    </div>
                    <br/>

                </div>
                </div>
                </div>
                <div className="panel panel-default">

                </div>
            </div>
            </div>
        )
    }
}

export default FileUpload;