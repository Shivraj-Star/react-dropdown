import React, { useState } from 'react';
import './index.scss';

function Dropdown({ placeholder, list, multiSelect = false, isLabel = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {
    debugger;
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    return (selection.some(current => current.id === item.id)) ? true : false;
  }

  return (
    <div className="dropdown-wrap">
      {/* <small className="message">You have selected {selection.length} items</small> */}

      <div tabIndex={0} className="header" role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}  >
        <div>
          <p className="bold text-info">
          {placeholder} <i className="fa fa-hand-o-right"></i> {!isLabel ? <span> Selected : {selection.length}</span> :
           <span>{selection.map(item => (<span className="tags" key={item.id} onClick={() => handleOnClick(item)}>{item.value} <i className="fa fa-times"></i></span>))}</span>}
          </p>
        </div>
        <div>
          <p>{open ? <span><i className="fa fa-caret-square-o-up fa-fw"></i> Close</span> : <span> <i className="fa fa-caret-square-o-down fa-fw"></i>Open</span>}</p>
        </div>
      </div>
      {open && (
        <ul className="list animated fadeDown">
          {list.map(item => (
            <li key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) ? <div><i className="fa fa-check-circle text-info fa-fw"> </i>Selected</div> : null}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}


export default Dropdown;