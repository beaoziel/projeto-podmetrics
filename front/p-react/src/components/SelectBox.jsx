import React from 'react'
import '../css/SearchBox.css'



function SelectBox() {
  return (
    <div id='select-line'> 
            
                <div id='select-area'>
                    <label for="select-pais"> País </label>
                        <select id='select-pais'>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                        </select>
                </div> 
                
                <div id='select-area'>
                    <label for="select-categoria"> Categoria </label>
                        <select id='select-categoria'>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                        </select>
                </div>
            
                <div id='input-data-area'>
                  <div id='input-data-area-label'>
                    <label for="select-periodo"> Período </label>
                  </div>
                  <div id='input-data-area-box'>
                    <span></span>
                    <input type="date" name='data-from' id='data-from' ></input>
                    <input type="date" name='dato-to' id='data-to'></input>
                  </div>
                 
                </div>  
            
    </div>
  );
}

export default SelectBox;