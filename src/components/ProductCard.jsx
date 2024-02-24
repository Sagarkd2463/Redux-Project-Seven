import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

function ProductCard() {

    const products = useSelector((state) => state.allCart.item);

    const dispatch = useDispatch();

    return (
        <div className='m-2'>
            <MDBContainer>
                <MDBRow className='mb-2'>
                    {products.map((product) => {
                        return (
                            <MDBCol size='md' key={product.id}>
                                <MDBCard>
                                    <MDBCardImage src={product.img} position='top' alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle>{product.title}</MDBCardTitle>
                                        <MDBCardText>{product.price}</MDBCardText>
                                        <MDBBtn onClick={() => {dispatch(addToCart(product))}}>Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        )
                    })
                    };
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default ProductCard;