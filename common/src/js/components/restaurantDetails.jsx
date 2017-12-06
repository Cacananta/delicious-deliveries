import React from 'react';
import { addShoppingCart } from '../actions/restaurantDetailsActions';
const menuList = [
  {
    category: "Dinner",
    price: 14.95,
    description: "A delicious Cantonese dish of stir-fried veggies and chicken",
    name: "Moo Goo Gai Pan",
    id: "5a2852a55d45520014574d72",
    menuId: "5a2730b89f1b16003e75eac4"
  }
];
export default class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
  //bind functions here
this.addCart = this.addCart.bind(this);
  }

  addCart(e){
    console.log(e.target.id);
    const { dispatch } = this.props;
    const index = menuList.map(item => item.id).indexOf(e.target.id);
    const cartItem = {
      quantity: 1,
      menuItem: menuList[index].name,
      price: menuList[index].price
    };
    console.log(cartItem);
    dispatch(addShoppingCart(cartItem));
  }

  render() {
  //pull in props here
  const breakfastList = menuList.filter(item => item.category === 'Breakfast');
  const lunchList = menuList.filter(item => item.category === 'Lunch');
  const dinnerList = menuList.filter(item => item.category === 'Dinner');
  const snackList = menuList.filter(item => item.category === 'Snack');
  const drinkList = menuList.filter(item => item.category === 'Drink');
  console.log(1, breakfastList);
  console.log(2, lunchList);
  console.log(3, dinnerList);
  console.log(4, snackList);
  console.log(5, drinkList);
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
        { breakfastList.length > 0 ?
        <div>
          <div className='mt-2'>
            <h4>Breakfast</h4>
            <hr/>
          </div>
          <div className='row'>
          {breakfastList.map(item => 
            <div className='col-6 px-2 d-flex'>
              <span className='mr-auto pt-2'><p><strong>{ item.name }</strong>   ${item.price}</p></span>
              <div className='py-2 ml-auto'>
                <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
              </div>
            </div>
            )}
          </div>
        </div>
        : <div />}
        { lunchList.length > 0 ?
        <div>
          <div className='mt-2'>
            <h4>Lunch</h4>
            <hr/>
          </div>
          <div className='row'>
          { lunchList.map(item => 
            <div className='col-6 px-2 d-flex'>
              <span className='mr-auto pt-2'><p><strong>{ item.name }</strong>   ${item.price}</p></span>
              <div className='py-2 ml-auto'>
                <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
              </div>
            </div>
            )}
          </div>
        </div>
        : <div />}
        { dinnerList.length > 0 ?
          <div>
            <div className='mt-2'>
              <h4>Dinner</h4>
              <hr/>
            </div>
            <div className='row'>
            { dinnerList.map(item => 
              <div className='col-6 px-2 d-flex'>
                <span className='mr-auto pt-2'><p><strong>{ item.name }</strong>   ${item.price}</p></span>
                <div className='py-2 ml-auto'>
                  <button id={ item.id } className='btn btn-primary btn-sm' onClick={ this.addCart }>Add to Cart</button>
                </div>
              </div>
              )}
            </div>
          </div>
          : <div />}
        { snackList.length > 0 ?
          <div>
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
          </div>
          : <div />}
        { drinkList.length > 0 ?
          <div>
            <div className='mt-2'>
              <h4>Drink</h4>
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
          : <div />}
      </div>
    )
  }
}