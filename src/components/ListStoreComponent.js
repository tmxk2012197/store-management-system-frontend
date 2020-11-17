import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import StoreService from '../services/StoreService';

class ListStoreComponent extends Component {
    state = {
        stores: []
    };

   componentDidMount() {
        StoreService.getAllStores().then(
            (res) => {
                this.setState({stores: res.data});
            }
        );
    }

    addStore = () => {
        this.props.history.push('/add-store');
    }

    updateStore = (storeId) => {
        this.props.history.push(`/update-store/${storeId}`);
    }

    removeStore = (storeId) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                       StoreService.deleteStore(storeId)
                            .then(res => {
                                this.setState({stores: this.state.stores.filter(s => s.externalId != storeId)})
                            });
                    }              
                },
                {
                    label: 'No',
                    onClick: () => this.props.history.push('/')
                }
            ]
        });


    }

    render() {
        return (
            <div>
                <h2 className="text-center">Store List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStore}>Add Store</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Type</th>
                                <th>Name</th>
                                <th>Hours</th>
                                <th>Address</th>
                                <th>Address2</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Location</th>
                                <th>Services</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.stores.map(
                                    store => {
                                        const loc = store.location.lat + "," + store.location.lon;
                                        const serv = store.services === null ? '' : store.services.join(", ");
                                        
                                        return <tr key={store.externalId}>
                                                <td>{store.externalId}</td>
                                                <td>{store.type}</td>
                                                <td>{store.name}</td>
                                                <td>{store.hours}</td>
                                                <td>{store.address}</td>
                                                <td>{store.address2}</td>
                                                <td>{store.city}</td>
                                                <td>{store.state}</td>
                                                <td>{store.zip}</td>
                                                <td>{loc}</td>
                                                <td>{serv}</td>
                                                <td>
                                                    <button onClick={() => this.updateStore(store.externalId)} className="btn btn-info">Update</button>
                                                    <button onClick={() => this.removeStore(store.externalId)} className="btn btn-danger"
                                                        style={{marginTop:"20px"}}>Delete</button>
                                                </td>
                                        </tr>
                                    }                 
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListStoreComponent


