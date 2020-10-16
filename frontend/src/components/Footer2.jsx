import React from 'react'

function Footer2 (){
    return(
        <>
            <input type="radio" name="option1"/>solo fecha de inicio<br/>
<label for="date">Seleccionar Fecha</label>
<input type="date" id="date"/>
<p></p>
<input type="radio" name="option1"/>Periodo exacto<br/>
<label for="date">Fecha de inicio</label>
<input type="date" id="date"/>
<p></p>
<label for="date">Fecha final</label>
<input type="date" id="date"/>
<p></p>
<input type="radio" name="option1"/>Temporada<br/>
<label for="date">Fecha de inicio</label>
<input type="date" id="date"/>
<p></p>
<label for="date">Fecha final</label>
<input type="date" id="date"/>
</>
    )
};
export default Footer2;