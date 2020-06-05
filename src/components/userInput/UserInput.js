import React from 'react';

export function UserInput({ lines, onSetDelemiter, onSetNoOfLines, onFileSelect }) {
    const onClickSetDelimiter = () => {
        let el = document.querySelector('#input-delimiter');
        if(!el) return;
        onSetDelemiter(el.value || ',');
      }
    
      const onClickSetLines = () => {
        let el = document.querySelector('#input-set-lines');
        if(!el) return;
        onSetNoOfLines(parseInt(el.value) || 2);
      }
    
    return (
        <div className='input-container'>
        <span>
        <input type="file" name="file" id="file" onChange={(event) => onFileSelect(event)}/>
        </span>
        <span>
        <div>
            <input id='input-delimiter' type="text" name="text" />
            <button disabled={!lines.length > 0} onClick={onClickSetDelimiter}>Set delimiter</button>
        </div>
        <div>
            <input id='input-set-lines' type="number" />
            <button disabled={!lines.length > 0} onClick={onClickSetLines}>Set lines</button>
        </div>
        </span>
    </div>
  )
}