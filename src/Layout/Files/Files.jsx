import React, { useState } from 'react';
import './Files.css'; // Make sure to create a CSS file with the styles provided below

import filelogo from '../../media/file.png'; 

const Files = ({ files }) => {


    return (
        <div className="files-container">
            {files.map((file, index) => (
                <div key={index} className="file-item">
                    <a href={`${process.env.REACT_APP_API_URL}${file.url}`} className="file-link" download>
                        <img src={filelogo} className="file-icon" alt="" />
                        {file.name}
                    </a>
                </div>
            ))}

        </div>
    );
};

export default Files;
