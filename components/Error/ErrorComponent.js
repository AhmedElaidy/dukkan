import React from 'react'
import Container from '../Container/Container';

const ErrorComponent = () => {
  return (
    <Container styles={{ justifyContent: "center" }}>
    <h2 className='text-red-600 font-extrabold text-lg'>
    An Error Occured While Trying to fetch data
    </h2>
    </Container>
  );
}

export default ErrorComponent