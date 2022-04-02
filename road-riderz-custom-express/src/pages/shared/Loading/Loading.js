import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
        <h4 style={{ color: "red",marginTop:"100px" }}>Please wait few second....</h4>
        <Spinner animation="border" variant="danger" />
      </div>
    );
};

export default Loading;