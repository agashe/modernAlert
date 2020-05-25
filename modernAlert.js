/**
 * Library: modernAlert
 * Version: 1.00
 * Author: Mohamed Yousef <engineer.mohamed.yossef@gmail.com>
 * License: MIT
 */

/** ********************************* ** [Note!!] ** ********************************* **/
/** (modernAlert) released under the terms of the MIT license.                         **/
/**                                                                                    **/
/** You are free to use (modernAlert) in any other project (even commercial projects)  **/
/** as long as the copyright header is left intact.                                    **/
/** ********************************* ** [Note!!] ** ********************************* **/

function modernAlert(message = '', options = {}, callback)
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
            minHeight: '80px',
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
            zIndex: '99999',
        },
    };

    const modernAlertButtonProperties = {
        el: 'button',
        style: {
            minHeight: '30px',
            minWidth: '60px',
            padding: '5px',
            fontFamily: 'Tahoma',
            fontSize: '9pt',
            textAlign: 'center',
        },
    };

    const modernAlertShadowScreenProperties = {
        el: 'div',
        style: {
            height: '100%',
            width: '100%',
            margin: '0',
            padding: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '99998',
        },
    };

    const modernAlertButtonLayouts = ['ok', 'yesNo', 'custom'];
    
    // Add the shadow screen
    let modernAlertShadowScreenBody = document.createElement(modernAlertShadowScreenProperties.el);
    Object.assign(modernAlertShadowScreenBody.style, modernAlertShadowScreenProperties.style);
    document.body.appendChild(modernAlertShadowScreenBody).id = '_modernAlertShadowScreen';
    let modernAlertShadowScreen = document.getElementById('_modernAlertShadowScreen');

    // Add style to modernAlert .. Render
    let modernAlertBody = document.createElement(modernAlertProperties.el);
    modernAlertBody.innerHTML = `<p>${message}</p>`;
    Object.assign(modernAlertBody.style, modernAlertProperties.style);
    document.body.appendChild(modernAlertBody).id = '_modernAlert';
    let modernAlertElement = document.getElementById('_modernAlert');

    // Add the buttons
    let modernAlertButtons = [];
    if (modernAlertButtonLayouts.includes(options.buttonsLayout) || !options.buttonsLayout) {
        switch (options.buttonsLayout) {
            case 'custom':
                options.buttonsStructure.forEach(buttonStructure => {
                    modernAlertButtons.push({label: buttonStructure.label, return: buttonStructure.return});
                });
            break;

            case 'yesNo':
                modernAlertButtons.push({label: 'Yes', return: true});
                modernAlertButtons.push({label: 'No', return: false});
            break;

            case 'ok':
            default:
                modernAlertButtons.push({label: 'Ok', return: null});
        }
    }

    let modernAlertButton = {};
    let modernAlertButtonPromises = [];
    modernAlertButtons.forEach(button => {
        modernAlertButton = document.createElement(modernAlertButtonProperties.el);
        Object.assign(modernAlertButton.style, modernAlertButtonProperties.style);
        modernAlertButton.id = 'x';
        modernAlertButton.innerHTML = button.label;
        modernAlertElement.appendChild(modernAlertButton);
        
        modernAlertButtonPromises.push(new Promise(function(resolve, reject) {
                modernAlertButton.addEventListener('click', function(){
                    modernAlertShadowScreen.remove();
                    modernAlertElement.remove();
                    resolve(button.return);
                });
            })
        );
    });
    
    Promise.race(modernAlertButtonPromises).then(response => {
        callback(response);
    });

    // Adjust horizontal margin
    modernAlertElement.style.margin = `-207px 0 0 -${modernAlertElement.offsetWidth / 2}px`;
}
