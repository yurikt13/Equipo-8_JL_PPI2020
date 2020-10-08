import React from 'react';
import planta from '../pantallas/images/planta.jpg';

const Main5 = () => {

    return (
        <div className="container mt-3">
            <div class="card border-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title">Alfred</h5>
                    <p class="card-text">He tenido un buen progreso con mi planta!</p>
                    <p class="card-text"><small class="text-muted">Hace 2h</small></p>
                </div>
                <img src={planta} class="card-img-bottom" alt=""></img>
            </div>
        </div>
    )

};

export default Main5;