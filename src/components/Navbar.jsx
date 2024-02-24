import React, { useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

    const { cart, totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    },[cart]);

  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
            <Link to={'/'}>All Products</Link>
            </span>
        <MDBBtn color='dark'>
            <Link to={'/cart'}>Cart ({totalQuantity})</Link>
        </MDBBtn>
      
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Navbar;