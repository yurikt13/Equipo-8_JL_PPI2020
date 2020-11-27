import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

class Main35 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAddplant: [],
            formInsertar: false,
            form: {
                id_planta: '',
                estado: '',
                cuidado: '',
                clima: '',
                tamaño: '',
                categoria: '',
                id_usuario: '',
                nomplanta: ''
            }
        }
    }

    peticionGet = () => {
        axios.get('https://backpachamama.herokuapp.com/api/planta')
            .then(res => {
                this.setState({
                    dataAddplant: res.data
                })
            }).catch(err => {
                console.log(err.message)
            })
    }

    peticionPost = async (e) => {
        delete this.state.form.id
        await
        axios.post('https://backpachamama.herokuapp.com/api/planta', this.state.form)
         .then(res => {
             //this.formularioInsertarPlanta();
             this.peticionGet();
         }).catch(err => {
            console.log(err.message)
         })
    }

    /*formularioInsertarPlanta = () => {
        this.setState({
            formInsertar: !this.state.formInsertar
        })
    }*/

    handleChange = async (e) => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })

        console.log(this.setState.form)
    }

    componentDidMount() {
        this.peticionGet()
    }

    render() {
        console.log(this.state.dataAddplant);
        const daticos = this.state.dataAddplant
        return (
            <>

                {daticos.map((plantass) => {
                    return (

                        <form>
                            <div className='cando mt-3'>
                                <div className="form-group sasi">
                                    <label for="exampleInputText"></label>
                                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" name="nomplanta" onChange={this.handleChange}value={this.state.form.nomplanta} placeholder="Nombre de la planta" />
                                    <small id="textlHelp" className="form-text text-muted"></small>
                                </div>

                                <div className="labelsForm">
                                    <div className="form-group">
                                        <select className="estadoForm mt-2" name="estado" onChange={this.handleChange}value={this.state.form.estado}>
                                            <option> Estado </option>
                                            <option>Germinando</option>
                                            <option>Enferma</option>
                                            <option>Debil</option>
                                            <option>Floración</option>
                                            <option>Sana</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <select className="cuidadoForm mt-2" name="cuidado" onChange={this.handleChange}value={this.state.form.cuidado}>
                                            <option> Cuidado </option>
                                            <option>Desbrozar</option>
                                            <option>Deshojar</option>
                                            <option>Fertilizar</option>
                                            <option>Fumigar</option>
                                            <option>Pesticida</option>
                                            <option>Plantar</option>
                                            <option>Podar</option>
                                            <option>Pulverizar</option>
                                            <option>Regar</option>
                                            <option>Sembrar</option>
                                            <option>Transplantar</option>
                                        </select>
                                    </div>

                                </div>




                                <div className="labelsForm">
                                    <div className="form-group">
                                        <select className="climaForm mt-2" name="clima" onChange={this.handleChange}value={this.state.form.clima}>
                                            <option>Clima</option>
                                            <option>Soleado</option>
                                            <option>Parcialmente nubloso</option>
                                            <option>Nuboso</option>
                                            <option>Nublado</option>
                                            <option>Lluvioso</option>
                                            <option>Con chubascos</option>
                                            <option>Truenos</option>
                                            <option>Agua nieve</option>
                                            <option>Nevando</option>
                                            <option>Vintiscos</option>
                                            <option>Con nieve</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="tamañolabel mt-">
                                    <input type="text" className="form-control lg-sm" id="exampleInputText1" aria-describedby="textHelp" name="tamaño" onChange={this.handleChange}value={this.state.form.tamaño} placeholder="Tamaño" />
                                </div>
                                <br />

                                <div className="categorialabel mt-">
                                    <input type="text" className="form-control lg-sm" id="exampleInputText1" aria-describedby="textHelp" name="categoria" onChange={this.handleChange}value={this.state.form.categoria} placeholder="Categoria" />
                                </div>

                                <br />
                                
                                <Link to="/recordatorios" className="text-decoration-none">
                                    <button type="submit" className="btn btn-success cando" onClick={()=>this.peticionPost()}>Agregar</button>
                                </Link>

                            </div>

                        </form>

                    )
                })}



            </>

        );
    }

}

export default Main35;