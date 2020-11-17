import axios from 'axios';

const STORE_API_BASE_URL = "http://localhost:8080/stores";

class StoreService {
    getAllStores() {
        return axios.get(STORE_API_BASE_URL);
    }

    createStore(store) {
        return axios.post(STORE_API_BASE_URL, store);
    }

    getStoreById(storeId) {
        return axios.get(STORE_API_BASE_URL + "/" + storeId);
    }

    updateStore(store, storeId) {
        return axios.patch(STORE_API_BASE_URL + "/" + storeId, store);
    }

    deleteStore(storeId) {
        return axios.delete(STORE_API_BASE_URL + "/" + storeId);
    }
}

export default new StoreService();