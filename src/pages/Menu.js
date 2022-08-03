import React from 'react';
import '../styles/Menu.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

//import '../pages/image2.png';



const Menu = () => {
    return (

        <>

            <div class="container-fluid">

                <header className='menu-header'>
                    <h1 className='Tittle' >View Our <br /> New Menu</h1>
                    <p className='paragraph' >The freshest ingredien for you every day</p>
                </header>
                <section className='section2'>

                    <div class="row">

                        <div class="col-6">

                            Première colonne
                            <img src="{}" alt='' />
                        </div>

                        <div class="col-6">

                            Deuxième colonne

                        </div>


                    </div>


                </section>

                <section className='section3 '>
                    <p className='section3-tittle1'>Make a reservation</p>
                    <h6 className='section3-tittle2'>Get in touch with restaurant</h6>
                    <div id='box-section' class="row">

                        <div class="col"><TextField id="outlined-basic" label="16/22/2021" variant="outlined" /></div>

                        <div class="col"> <TextField
                            id="outlined-select-currency"
                            select
                            label="6:00 pm"
                            helperText="Please select your currency"
                        ></TextField></div>

                        <div class="col"><TextField
                            id="outlined-select-currency"
                            select
                            label="6:00 pm"
                            helperText="Please select your currency"
                        ></TextField></div>
                    </div>

                    <button className="button">Book Now</button>

                </section>




                <footer>
                    <div >

                        <div className="row align-items-start">

                            <div id='left-footer' className="col">food <br />zero.</div>

                            <div id='left2-footer' className="col">Contact<br/>+36145545555<br/>foodzer@mail.fr<br/>melville.rue valence<br/>BP:1226 np,sharll</div>

                            <div id='left4-footer' className="col"><Button variant="outlined">Subcribe</Button></div>

                        </div>
                        <div className="row align-items-left">

                            <div class="col"></div>

                            <div id='left3-footer' class="col">Never miss a recipe<br/><TextField id="outlined-basic" label=" E-mail adress " variant="outlined" /></div>

                        </div>

                        <div className="row align-items-center">


                            <div className="col"></div>

                            <div className="col"></div>

                        </div>

                        <div className="row align-items-end">

                            <div className="col"></div>

                            <div className="col"></div>

                        </div>

                    </div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------<br/>
                    <p>Zero Inc,All rigths Reserved</p>
                </footer>
            </div>
        </>

    );
}


export default Menu;
