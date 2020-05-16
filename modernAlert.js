/**
 * Library: modernAlert
 * Version: 1.00
 * Author: Mohamed Yousef <engineer.mohamed.yossef@gmail.com>
 * License: GPL
 */

function modernAlert(content = '', buttons = '', values = [])
{
    // Close any other modernAlert
    let oldModernAlertElement = document.getElementById('_modernAlert');
    if (oldModernAlertElement && oldModernAlertElement.length != 0) {
        oldModernAlertElement.remove();
    }

    // Initial Properties
    const modernAlertProperties = {
        el: 'div',
        style: {
            minHeight: '100px',
            minWidth: '100px',
            maxHeight: '500px',
            maxWidth: '500px',
            margin: '-207px 0 0 -57px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            borderRadius: '5px',
            boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.4), -1px -1px 2px 1px rgba(0, 0, 0, 0.4)',
            fontFamily: 'Tahoma',
            fontSize: '12pt',
            textAlign: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
        },
    };

    const modernAlertButtonProperties = {
        el: 'button',
        style: {
            height: '30px',
            width: '60px',
            padding: '5px',
            fontFamily: 'Tahoma',
            fontSize: '12pt',
            textAlign: 'center',
        },
    };

    // Define modernAlert
    let modernAlertBody = document.createElement(modernAlertProperties.el);

    // Add content to modernAlert
    modernAlertBody.innerHTML = `<p>${content}</p>`;
    
    // Add style to modernAlert .. Render
    Object.assign(modernAlertBody.style, modernAlertProperties.style);
    document.body.appendChild(modernAlertBody).id = '_modernAlert';

    let modernAlertElement = document.getElementById('_modernAlert');

    // Adjust horizontal margin
    modernAlertElement.style.margin = `-207px 0 0 -${modernAlertElement.offsetWidth / 2}px`;

    // Add the buttons
    let modernAlertButton = document.createElement(modernAlertButtonProperties.el);
    let modernAlertButton2 = document.createElement(modernAlertButtonProperties.el);
    Object.assign(modernAlertButton.style, modernAlertButtonProperties.style);
    Object.assign(modernAlertButton2.style, modernAlertButtonProperties.style);
    modernAlertButton.innerHTML = 'Accept';
    modernAlertButton2.innerHTML = 'Get Back';
    modernAlertElement.appendChild(modernAlertButton);
    modernAlertElement.appendChild(modernAlertButton2);
}