import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttinSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0]

    return (
        <Link to='/works' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                >
                    {children}
            </button>
        </Link>
    )
};
