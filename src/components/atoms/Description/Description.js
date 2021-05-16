import React from 'react';
import PropTypes from 'prop-types'


/**
- Use this component for providing description.
**/

const Description =(props) => {
    return(
        <p className="text-justify" style={{fontSize: '14px'}}>
            {props.description}
        </p>
    );
}

Description.propTypes= {
    /**
    Use the loading state to indicate that the data Avatar needs is still loading.
    */
    description: PropTypes.string,
}
export default Description;