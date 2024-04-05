import React from 'react'
import Services from '../Services'
import Navbarfile from '../Navbarfile'


import Footer from '../Footer'
import './style.css'
export default function Service() {
    
    return (
        <>

            <div>
                <Navbarfile />
            </div>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col'>
                        <h1 className='headingggg'  >Services</h1>
                    </div>
                </div>

               
            </div>
            <br /> <br /><br />
            <div>
                <Services />
            </div>
            <br /><br /> <br />
            <div>
                <Footer />
            </div>
        </>
    )
}
