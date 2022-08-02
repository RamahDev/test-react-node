import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
    return (
       /* <div className='container-fluid'>
          
        </header> 
            </div>
        

        <div className='row'>
            <div>
                <h1 className='tittle' >starter</h1>
                <p className='paragraph2' >This is section of your menu,Give your section a breaf description</p>
                <img src='.../assets/menu assets/blueberry.png' alt=""/>
            </div>
            <div className='row'>
                <div className='col'>

                </div>
                <div className='col'>

                </div>
                <div className='col'>

                </div>
            </div>
            
            <div className='row'>
            <footer>
                    <div className='.col-6 .md-4'>
                        <p className='left_footer'>food <br/>zero</p>

                    </div>   
                <div className='.col-6 .md-4'>
                     <p id='contact'>contact</p>
                </div>
                
                    
                </footer>
                
            </div>
            
        </div>
        
        
        
        </div>*/
        <>
        <div class="container-fluid">

            <header className='menu-header'>
                <h1 className='Tittle' >View Our <br/> New Menu</h1>
                <p  className='paragraph' >The freshest ingredien for you every day</p>
            </header>
            <section>

            </section>
            
        
        <button className="button">Book Now</button>

        <footer>
             <div >

                <div className="row align-items-start">

                <div id='left-footer' className="col">food <br/>zero</div>

                <div className="col">Deuxième1 colonne</div>

                <div className="col">Troisième1 colonne</div>

            </div>
                <div className="row align-items-left">

<div class="col">Deuxième colonne</div>

<div class="col">Troisième colonne</div>

            </div>

                <div className="row align-items-center">


                <div className="col">Deuxième2 colonne</div>

                <div className="col">Troisième 2colonne</div>

            </div>

                <div className="row align-items-end">

                <div className="col">Deuxième3 colonne</div>

                <div className="col">Troisième 3colonne</div>

            </div>

            </div>
        </footer>
        </div>
        </>
       
    );
}


export default Menu;
