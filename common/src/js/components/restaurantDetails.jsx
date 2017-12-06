import React from 'react';
// import { addShoppingCart } from './actions/restaurantDetailsActions';

export default class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
this.addCart = this.addCart.bind(this);
  }

  addCart(e){
    console.log('hello');
    // const { dispatch } = this.props;
    // const index = menuItem.map(item => item.id).indexOf(e.target.id);
    // dispatch(addShoppingCart(menuItem[index]));
  }

  render() {
  //pull in props here
    return(
      <div className='container'>
        <h1 className='text-center'>Esmeralda's Tortilleria</h1>
        <div className='row mb-2'>
          <div className='col-6'>
            <img src="http://cdn.partyearth.com/photos/4e9d1dc9a23a99187f9e39230082010e/tortilla-republic_s345x230.jpg?1375196583" className="img-fluid rounded" alt="Responsive image" />
          </div>
          <div className='text-center col-6'>
            <p>145 Market st.</p>
            <p>San Diego, CA 92109</p>
            <p>6197530972</p>
            <p>Asian</p>
          </div>
        </div>
        <div className='mt-2'>
          <h4>Breakfast</h4>
          <hr/>
        </div>
        <div className='row'>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <h4>Lunch</h4>
          <hr/>
        </div>
        <div className='row'>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <h4>Dinner</h4>
          <hr/>
        </div>
        <div className='row'>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm'>Add to Cart</button>
            </div>
          </div>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <h4>Snacks</h4>
          <hr/>
        </div>
        <div className='row'>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <h4>Drinks</h4>
          <hr/>
        </div>
        <div className='row'>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
          <div className='col-6 px-2 d-flex'>
            <span className='mr-auto pt-2'><p><strong>Carne Asada Burrito</strong>   $7.99</p></span>
            <div className='py-2 ml-auto'>
              <button className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}