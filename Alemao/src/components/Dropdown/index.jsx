import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {

    return (
        <div className="radio-inputs">
            <label className="radio">
                <input type="radio" name="radio" />
                    <span className="name">Portugues</span>
            </label>
            <label className="radio">
                <input type="radio" name="radio" />
                    <span className="name">Ingles</span>
            </label>

            <label className="radio">
                <input type="radio" name="radio" />
                    <span className="name">Alemão</span>
            </label>
        </div>
    );
};

export default Dropdown;
