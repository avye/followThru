import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { reset } from 'redux-form';
import { ListView } from 'react-native';

// addNewListItem
// This should add a new item to a specific list
export const addNewListItem = (fields) => {
  // return (dispatch, getState) => {
  //   // parse form data for submission
  //   let newProductListing = {
  //     ...fields,
  //     author: getState().user.username,
  //     locationInfo: {
  //       address: fields.locationInfo,
  //       marker: {
  //         lat: getState().ui.location.marker.lat,
  //         lng: getState().ui.location.marker.lng
  //       }
  //     }
  //   };
  //
  //   dispatch(addListingRequest());
  //   let url = '/products';
  //   helper.postHelper(url, newProductListing)
  //   .then(resp => {
  //     let newItem = resp.data;
  //     dispatch(addListingSuccess(newItem));
  //     dispatch(toggleViewAddNewListingForm());
  //     dispatch(push('/listings'));
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     dispatch(addListingFailure());
  //     dispatch(push('/listings'));
  //   });
  // };
};

// addListItemRequest
export const addListItemRequest = () => {
  return {
    type: types.ADDLISTITEM_REQUEST
  }
}

// addListItemSuccess
// This should trigger the actionConfirmation page to show up and display what list the item was added to

// addListItemFailure


// listItemEdited
// This should update the list item in the user's list (can be done from the actionConfirmation page or on the singleListScreen)

// deleteListItem
// This should remove an item from a specific list

// fetchUserLists
// This should get a user's lists (Movies, Books, Meals to Cook) just the names of them will be displayed in the allListsScreen
export const fetchUserLists = () => {
  return function (dispatch) {
    // console.log('made it the actions!');
    // var updatedState = [{title: 'fun'}, {title: 'awesome'}]
    // const lists = getState().lists.lists;
    let dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    });
    dataSource = dataSource.cloneWithRows([{listTitle: "Movies"}, {listTitle: "Music"}, {listTitle: "Books"}])
    console.log("dataSource from the actions: ", dataSource)

    dispatch(updateListsState(dataSource))


    // const url = '/products/' + id;
    // helper.getHelper(url)
    // .then(resp => {
    //   var updatedState = resp.data;
    //   if (resp.status == 200) {
    //     Array.isArray(updatedState) ? dispatch(updateProductsState(updatedState)) : dispatch(updateProductDetail(updatedState));
    //   }
    // })
    // .catch(err => {
    //   console.error(err);
    // });
  };
};
const updateListsState = (updatedState) => {
  return {
    type: types.UPDATE_LISTS_STATE,
    dataSource: updatedState,
    isLoading: false
  }
}

// fetchUserSingleList
// This should get all of the items inside of a user's specific list (Movies for example) and bring back with it
export const fetchUserSingleList = (id = '') => {
  // return dispatch => {
  //   const url = '/products/' + id;
  //   helper.getHelper(url)
  //   .then(resp => {
  //     var updatedState = resp.data;
  //     if (resp.status == 200) {
  //       Array.isArray(updatedState) ? dispatch(updateProductsState(updatedState)) : dispatch(updateProductDetail(updatedState));
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // };
};



// ******* LOGIN SECTION ******
// We'll obviously need a login section and all of the actions that go with that

// makeLoginRequest

// loginSuccess

// loginFailure

// makeSignupRequest

// signupSuccess

// signupFailure

// logOut

// verifyUser

// verifySuccess

// verifyFailure







export const setMarkerCenter = (pos) => {
  return {
    type: types.SETMARKERCENTER,
    payload: pos
  };
};

export const toggleViewAddNewListingForm = () => {
  return {
    type: types.UI_TOGGLE_VIEW_ADDNEWLISTINGFORM
  };
};
