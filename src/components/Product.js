import * as Message from "./../constants/Message";

function Product(props) {

  var { product } = props;

  const showRatings = (rating) => {
    var result = [];
    for (let i = 0; i < rating; i++) {
      result.push(<i className="fa fa-star" key={i}></i>)
    }
    for (let i = 0; i < 5 - rating; i++) {
      result.push(<i className="fa fa-star-o" key={rating + i}></i>)
    }
    return result;
  }

  const onAddToCart=(product)=>{
      props.onAddToCart2(product);
      props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
  }

  return (
    <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={product.image}
            className="img-fluid" alt={product.name} />
          <a href='#/'>
            <div className="mask waves-light waves-effect waves-light"></div>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a href='#/'>{product.name}</a>
            </strong>
          </h4>
          <ul className="rating">
            <li>
              {showRatings(product.rating)}
            </li>

          </ul>
          <p className="card-text">
            {product.description}
          </p>
          <div className="card-footer">
            <span className="left">{product.price}</span>
            <span className="right">
              <a href='#/'
                className="btn-floating blue-gradient"
                data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Add to Cart"
                onClick={() =>onAddToCart(product)}
                
                >
                <i className="fa fa-shopping-cart"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>


  );
}



export default Product;
