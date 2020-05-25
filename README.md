# modernAlert
modernAlert is small plugin (2kb) which gives you the ability to create custom alert message , you can add buttons as much as you need , and return your desired values from them.

## Installation
modernAlert doesn't require any external libraries or frameworks , it was written in Vanilla.js , so all what you need is a modern 
browser which supports ES6 and Promises!

## Documentation

Like normal alert function you can call modernAlert anywhere in your code: events (button click, select change , mouseUp, mouseDown
...etc) , functions (recieve data, send data ....etc) or in any other peace of code.

First: Include the modernAlert-v1.0.0.min.js file inside your base html

```
<script src="modernAlert-v1.0.0.min.js"></script>
```

Second: call the modernAlert in your code

```
modernAlert(message, options, callback);
```
* **message:** - *String* - represents the message that will be shown to the user

* **options:** - *Object* - accept 2 properties and it will be used to prepare your buttons , it's optional so you can leave empty to use the basic 
               layout.
  * buttonsLayout: - *String* - to choose the layout , we have **three** basic layouts for the buttons:
  
      1- 'ok' --> to show basic alert with a single button just to dismiss the message , returns *null*
  
      2- 'yesNo' --> 2 buttons (Yes & No) , which will return *true* for Yes and *false* for No
  
      3- 'custom' --> here's the magic :D , in this type we should use the second option
  
  * buttonsStructure: - *Array* - it takes array of objects , each of these objects represents a button

* **callback:** - *function* - where you will receive the users input

### so the full version will be like:
```
modernAlert('Ask a question to the user?', 
  {
      buttonsLayout: 'custom',
      buttonsStructure: [
          {label: 'button1', return: 'return something #1'},
          {label: 'button2', return: 'return something #2'},
          {label: 'button3', return: 'return something #3'},
      ]
  },
  result => {
      console.log(result); // user choice 
});
```
## Examples
*coming soon

## License
(modernAlert) released under the terms of the MIT license.

You are free to use (modernAlert) in any other project (even commercial projects) as long as the copyright header is left intact. 
