import React from 'react'
import  Card from 'react-bootstrap/Card'
import Navbarfile from '../Navbarfile'
import Footer from '../Footer'
import './style.css'
import class2 from '../images/class2.jpg'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'

function Blog() {

  return (
    <div>Blog
      <Navbarfile />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h1 className='headingggg'  > Blog</h1>
         
          </div>
        </div>
      </div>
<br /> <br /><br/>
           <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
              <Card className='card'>
              <Card.Img variant='top' src={blog1} />
              <Card.Body>
                <Card.Title className='blogtitle'>
                Diam amet eos at no eos
                </Card.Title>
                <Card.Text>
                  <p className='bodytext' >Sed kasd sea sed at elitr sed ipsum justo,
                   sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor 
                   stet lorem. Tempor ipsum justo amet stet...</p>
                </Card.Text>
              </Card.Body>
              <button className='btncard ' style={{margin:"auto"}} >Read More</button>

            </Card>
              </div>
              <div className='col-md-4'>
              <Card className='card'>
              <Card.Img variant='top' src={blog2} />
              <Card.Body>
              <Card.Title className='blogtitle'>
                Diam amet eos at no eos
                </Card.Title>
                <Card.Text>
                <p className='bodytext' >Sed kasd sea sed at elitr sed ipsum justo,
                   sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor 
                   stet lorem. Tempor ipsum justo amet stet...</p>
                </Card.Text>
              </Card.Body>
              <button className='btncard ' style={{margin:"auto"}} >Read More</button>
            </Card>
              </div>
              <div className='col-md-4'>
              <Card className='card'>
              <Card.Img variant='top' src={blog3} />
              <Card.Body>
              <Card.Title className='blogtitle' >
                Diam amet eos at no eos
                </Card.Title>
                <Card.Text>
                <p className='bodytext' >Sed kasd sea sed at elitr sed ipsum justo,
                   sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor 
                   stet lorem. Tempor ipsum justo amet stet...</p>
                </Card.Text>
              </Card.Body>
              <button className='btncard' style={{margin:"auto"}}>Read More</button>
            </Card>
              </div>
            </div>
           </div>
           <br /> <br /><br/>
<div>
<Footer />

</div>

    </div>
  )
}

export default Blog