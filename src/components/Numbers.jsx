import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber => {
  const renderButton = number => (
    <Button 
        key={number} 
        text={number.toString()} 
        clickHandler={onClickNumber} 
    />
  )
  return numbers.map(renderButton);
}

const Numbers = ({onclickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onclickNumber )
        }
    </section>
)

Numbers.propTypes = {
    onclickNumber: PropTypes.func.isRequired
}

export default Numbers
