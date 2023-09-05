import React from 'react';
import './Button.scss';

const Button = ({backgroundColor, text, onClick}) => {
return (
<button className="custom-button" style={{backgroundColor}} onClick={onClick}>
{text}
</button>
);

};

export default Button;