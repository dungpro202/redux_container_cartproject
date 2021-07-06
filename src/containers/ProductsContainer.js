import { connect } from 'react-redux';
import Products from './../components/Products'
import Product from "./../components/Product";
import PropTypes from 'prop-types';
import { actAddToCart,actChangeMessage } from './../actions/index';


function ProductsContainer(props) {

   
    const showProducts = (products) => {
        var result = null
        var { onAddToCart,onChangeMessage } = props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart2={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            })
        }
        return result;
    }

    let { products } = props;

    return (
        <Products>
            {showProducts(products)}
        </Products>
    );

}


ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        // lay tren reducers/index.js ten j thi lay nhu vay
        products: state.products
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onChangeMessage:(message) => {
            dispatch(actChangeMessage(message))

        }
    }
}



export default connect(mapStateToProps, mapDispatchtoProps)(ProductsContainer);
