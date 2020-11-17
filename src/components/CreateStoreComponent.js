import React, { Component } from 'react'
import StoreService from '../services/StoreService';

class CreateStoreComponent extends Component {
    state = {
        type: '',
        name: '',
        hours: '',
        address: '',
        address2: '',
        city: '',
        usState: '',
        zip: '',
        location: {lat: 0, lon: 0},
        serviceStr: '',
    }

    changeSingleValueHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    changeLocationHandler = (event) => {
        this.setState(prevState => ({
            location: {
                ...prevState.location,
                [event.target.name]: Number(event.target.value)
            }
        }));
    }

    saveStore = (event) => {
        event.preventDefault();

        const serv = this.state.serviceStr.split(",");
        let store = {
            type: this.state.type,
            name: this.state.name,
            hours: this.state.hours,
            address: this.state.address,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.usState,
            zip: this.state.zip,
            location: this.state.location,
            services: serv
        }
        console.log('store => ' + JSON.stringify(store));

        StoreService.createStore(store)
            .then(res => {
                this.props.history.push("/stores")
            });
    }

    cancel = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Store</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Type: </label>
                                        <input placeholder="Type" name="type" className="form-control" value={this.state.type} onChange={this.changeSingleValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changeSingleValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Hours (eg. Mon: 10-9:30; Tue: 10-9:30): </label>
                                        <input placeholder="Hours" name="hours" className="form-control" value={this.state.hours} onChange={this.changeSingleValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.changeSingleValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Address2: </label>
                                        <input placeholder="Address2" name="address2" className="form-control" value={this.state.address2} onChange={this.changeSingleValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City: </label>
                                        <input placeholder="City" name="city" className="form-control" value={this.state.city} onChange={this.changeSingleValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>State: </label>
                                        <input placeholder="State" name="usState" className="form-control" value={this.state.usState} onChange={this.changeSingleValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Zip: </label>
                                        <input placeholder="Zip" name="zip" className="form-control" value={this.state.zip} onChange={this.changeSingleValueHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Latitude: </label>
                                        <input placeholder="Latitude" name="lat" className="form-control" type="number" step="0.0000001" 
                                        value={this.state.location.lat} onChange={this.changeLocationHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Longitude: </label>
                                        <input placeholder="Longitude" name="lon" className="form-control" type="number" step="0.0000001" 
                                        value={this.state.location.lon} onChange={this.changeLocationHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Services (please split with ','): </label>
                                        <input placeholder="Services" name="serviceStr" className="form-control" value={this.state.serviceStr} onChange={this.changeSingleValueHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveStore}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "20px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateStoreComponent
