/**
 * Library: modernAlert
 * Version: 1.00
 * Author: Mohamed Yousef <engineer.mohamed.yossef@gmail.com>
 * License: GPL
 */

function modernAlert(content = '', buttons = '', values = [])
{
    // Close any other modernAlert
    
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
    
    // Add style to modernAlert .. Render
    Object.assign(modernAlertBody.style, modernAlertProperties.style);
    document.body.appendChild(modernAlertBody).className = '_modernAlert';

    let modernAlertElement = document.getElementsByClassName('_modernAlert');

    // Adjust horizontal margin
    modernAlertElement[0].style.margin = `-207px 0 0 -${modernAlertElement[0].offsetWidth / 2}px`;

}