import API from 'src/services';

class Products {
    constructor (){
        this.API = API
    }
    products(){
        return this.API.get('/products')
    }
}

export default Products;
