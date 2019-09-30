import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import './App.scss';

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <div>
            <button type="button" onClick={darkMode.disable}>
            Toggle for 
            </button>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            <button type="button" onClick={darkMode.enable}>
            Dark Mode ☾
            </button>
        </div>
    );
};

export default DarkModeToggle;