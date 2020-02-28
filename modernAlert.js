/**
 * Library: modernAlert
 * Version: 1.00
 * Author: Mohamed Yousef <engineer.mohamed.yossef@gmail.com>
 * License: GPL
 */

function modernAlert(content = '', options = {})
{
    // Validate parameters

    // Initial Properties
    const modernAlertProperties = {
        el: 'div',
        style: {
            minHeight: '100px',
            minWidth: '100px',
            height: '100px',
            width: '100px',
            margin: '-109px 0 0 -57px',
            padding: '5px',
            backgroundColor: '#f7f7f7',
            border: '2px solid #959595',
            borderRadius: '10px',
            textAlign: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
        },
    };

    // Define modernAlert
    let modernAlertBody = document.createElement(modernAlertProperties.el);

    // Add content to modernAlert
    modernAlertBody.innerHTML = content;


    // Apply options

    // 1. height & width
    modernAlertProperties.style.height = `${options.height}px`;
    modernAlertProperties.style.width = `${options.width}px`;
    options.height = parseInt(options.height) + 9;
    options.width = (parseInt(options.width) / 2) + 7;
    modernAlertProperties.style.margin = `-${options.height}px 0 0 -${options.width}px`;
    
    // Add style to modernAlert .. Render
    Object.assign(modernAlertBody.style, modernAlertProperties.style);
    document.body.appendChild(modernAlertBody);
}