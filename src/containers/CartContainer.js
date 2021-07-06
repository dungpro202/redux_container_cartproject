import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from "./../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import {actDeleteProductInCart,actUpdateProductInCart,actChangeMessage} from './../actions/index';

import * as Message from './../constants/Message';



function CartContainer(props) {

    var { cart,onDeleteProductInCart,onUpdateProductInCart } = props;

    const showCartItem = (cart) => {
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onUpdateProductInCart={onUpdateProductInCart}
                        onChangeMessage={props.onChangeMessage}
                    />
                );
            })
        }
        return result;
    }

    return (
        <Cart>
            {showCartItem(cart)}
            {showTotalAmount(cart)}
        </Cart>
    );

}



const showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
        result = <CartResult cart={cart} />
    }
    return result;
}


CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart:PropTypes.func.isRequired,
    onUpdateProductInCart:PropTypes.func.isRequired,
    onChangeMessage:PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        onDeleteProductInCart:(product)=>{
            dispatch(actDeleteProductInCart(product))
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(actUpdateProductInCart(product,quantity))
        },
        onChangeMessage:(message) => {
            dispatch(actChangeMessage(message))
        },
    }
}



export default connect(mapStateToProps, mapDispatchtoProps)(CartContainer);
