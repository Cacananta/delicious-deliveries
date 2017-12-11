import { connect } from 'react-redux';
import UpdateOwnerInfo from '../components/updateOwnerInfo';

function mapStoreToProps(store) {
  return {
    username: store.UpdateOwnerInfo.username,
    password: store.UpdateOwnerInfo.password,
    name: store.UpdateOwnerInfo.name,
    phonenumber: store.UpdateOwnerInfo.phonenumber,
    currentOwnerId: store.login.currentOwnerId,
    shoppingCart: store.restaurantDetails.shoppingCart,
  };
}

export default connect(mapStoreToProps)(UpdateOwnerInfo);