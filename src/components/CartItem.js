import * as Message from './../constants/Message';
// import { useState } from 'react'


function CartItem(props) {


  // const [quantityState, setQuantity] = useState(1);



  const onDelete = (product) => {
    props.onDeleteProductInCart(product)
    props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)

  }

  const onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      // setQuantity(quantity)
      props.onUpdateProductInCart(product, quantity)
      props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
    }
  }


  var { item } = props;
  var quantity = item.quantity > 0 ? item.quantity :item.quantity
  return (
    <tr>
      <th scope="row">
        <img src={item.product.image}
          alt={item.product.name} className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{quantity}</span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
            onClick={() => onUpdateQuantity(item.product, item.quantity - 1)}

          >
            <a href='#/'>—</a>
          </label>
          <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
            onClick={() => onUpdateQuantity(item.product, item.quantity + 1)}
          >
            <a href='#/'>+</a>
          </label>
        </div>
      </td>
      <td>{showSubTotal(item.product.price, item.quantity)}$</td>
      <td>
        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
          title="" data-original-title="Remove item"
          onClick={() => onDelete(item.product)}
        >
          X
        </button>
      </td>
    </tr>

  );
}



const showSubTotal = (price, quantity) => {
  return price * quantity;
}

export default CartItem;
