import React from 'react'
import './portfolio.css'


import IMG1 from '../../assets/BloomP5.jpg'
import IMG2 from '../../assets/FoodjP2.jpg'
import IMG3 from '../../assets/DatabaseP2.jpg'
import IMG4 from '../../assets/PortfolioP1.jpg'

import GIF1 from '../../assets/BloomGif2.gif'
import GIF2 from '../../assets/FoodjGIF.gif'
import GIF3 from '../../assets/PortfolioGIF3.gif'
import GIF4 from '../../assets/PortfolioSiteGif.gif'

const data = [
  {
    id: 1,
    image: IMG1,
    gif: GIF1,
    title: 'BLOOM - Interactive progress visualization and tracking website',
    tech: 'JS - MySQL - P5.JS - Handlebars.JS - Express.JS - JWT and Bcrypt',
    github: 'https://github.com',
    demo: 'https://full-bloom.in',
    demo_type: 'Live Demo'
  },
  {
    id: 2,
    image: IMG2,
    gif: GIF2,
    title: 'FoodJunkies - Android / IOS application - From Design to full Implementaion',
    tech: 'AndroidStudio - Java - PHP - MySQL - AWS; RDS & EC2 - Yelp API',
    github: 'https://github.com/ShhmonDai/FoodJunkies',
    demo: 'https://github.com/ShhmonDai/FoodJunkies/blob/main/FoodJunkiesReadme.pdf',
    demo_type: 'Presentation'
  },
  {
    id: 3,
    image: IMG4,
    gif: GIF4,
    title: 'Personal Portfolio',
    tech: 'React.JS - Node.JS - EmailJS',
    github: 'https://github.com',
    demo: 'https://shhmon.com',
    demo_type: 'Home'
  },
  {
    id: 4,
    image: IMG3,
    gif: GIF3,
    title: 'Healthcare Centers Database System Design - Complete Mysql Implementation, ER, UML & Relational Schemas',
    tech: 'MySQL - SQL Plus',
    github: 'https://github.com/ShhmonDai/Healthcare-Centers-MySQL',
    demo: 'https://github.com/ShhmonDai/Healthcare-Centers-MySQL/blob/main/ProjectPresentation.pdf',
    demo_type: 'Presentation'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <div className="divider">

      </div>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>  

      <div className="container portfolio__container">
        {
          data.map(({ id, image, gif, title, tech, github, demo, demo_type }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">

                  <img src={image} alt={title} onMouseOver={e => e.currentTarget.src = gif} onMouseOut={e => e.currentTarget.src = image} />
                </div>
                <h3>{title}</h3>
                <h4>{tech}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">{demo_type}</a>
                </div>
              </article>
            )
          })
        }
      </div>

      <div className="divider"> </div>

    </section>
  )
}

export default Portfolio