# React-Dropdown


The Select dropdown control for the [React JS](https://reactjs.com). 

Features include:
- Flexible approach to data, with customisable dropdown
- It supports Single Dropdown, Multi Dropdown and Label Dropdown features
- Customisable dropdown with addtional parameters provided by library.
- Build Dropdown library using React latest hooks features

## Core team
![Balwant Padwal](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqT950F4YYECz1mFpI3sfK-ff63DpC1RlolQiEpE0gg&s) Balwant Padwal

# Installation and usage

The easiest way to use react-dropdown is to install it from npm and build it into your app with Webpack.

```
cd react-dropdown
npm install
npm start
```
Then open http://localhost:3000/ to see your app.


#### Single DropDown Component With React Hooks
```js
import React, { useContext } from 'react'
import Dropdown from '../../lib/dropdown/Dropdown';
import UserContext from '../../context'

export default function SingleDropDownComponent() {
    const { users } = useContext(UserContext);
  
  return (
    <div className="App">
      <Dropdown placeholder="Select User" list={users} />
    </div>
  );
}
```
<p align='center'>
<img src='https://i.ibb.co/ngkPnq5/Screenshot-2020-09-29-at-12-50-17-PM.png'  alt='single dropdown'>
</p>


#### Multi DropDown Component With React Hooks
```js
import React, { useContext } from 'react'
import Dropdown from '../../lib/dropdown/Dropdown';
import UserContext from '../../context'

export default function MultiDropDownComponent() {
    const { users } = useContext(UserContext);
  
  return (
    <div className="App">
      <Dropdown placeholder="Select User" list={users} multiSelect="true" />
    </div>
  );
}
```

<p align='center'>
<img src='https://i.ibb.co/MVDSrQL/Screenshot-2020-09-29-at-12-50-47-PM.png'  alt='Multi dropdown'>
</p>


#### Label DropDown Component With React Hooks
```js
import React, { useContext } from 'react'
import Dropdown from '../../lib/dropdown/Dropdown';
import UserContext from '../../context'

export default function LabelDropDownComponent() {
    const { users } = useContext(UserContext);
  
  return (
    <div className="App">
      <Dropdown placeholder="Select User" list={users} isLabel="true" />
      
      <Dropdown placeholder="Select User" list={users} multiSelect="true" isLabel="true" />
      
    </div>
  );
}
```

<p align='center'>
<img src='https://i.ibb.co/Dr1bhDb/Screenshot-2020-09-29-at-12-51-32-PM.png'  alt='Label dropdown'>
</p>

## Props

Common props you may want to specify include:

- `placeholder` - the text displayed when no option is selected
- `list` - data for the dropdown
- `multiSelect` - true: allow the user to select multiple values
- `isLabel` - true: allow the user to view / close selected items.