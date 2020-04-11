import React from 'react';
import Gallery from 'react-grid-gallery';
import './portfolio.css'
import photo1 from '../../assets/trip.jpg';
import photo2 from '../../assets/baby.jpg';
import photo3 from '../../assets/vela.jpg';


function Portfolio() {
    
    const photos =[
        {
            src: photo1,
            thumbnail: photo1,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Trip (Fulando - fulando.com)"
        },
        {
            src: photo2,
            thumbnail: photo2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Baby (Fulando - fulando.com)"
        },
        {
            src: photo3,
            thumbnail: photo3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Vela (Fulando - fulando.com)"
        },
        {
            src: photo1,
            thumbnail: photo1,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Trip (Fulando - fulando.com)"
        },
        {
            src: photo2,
            thumbnail: photo2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Baby (Fulando - fulando.com)"
        },
        {
            src: photo3,
            thumbnail: photo3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Vela (Fulando - fulando.com)"
        },
        {
            src: photo1,
            thumbnail: photo1,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Trip (Fulando - fulando.com)"
        },
        {
            src: photo2,
            thumbnail: photo2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Baby (Fulando - fulando.com)"
        },
        {
            src: photo3,
            thumbnail: photo3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Vela (Fulando - fulando.com)"
        },
        {
            src: photo1,
            thumbnail: photo1,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Trip (Fulando - fulando.com)"
        },
        {
            src: photo2,
            thumbnail: photo2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Baby (Fulando - fulando.com)"
        },
        {
            src: photo3,
            thumbnail: photo3,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Vela (Fulando - fulando.com)"
        },
        {
            src: photo1,
            thumbnail: photo1,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Trip (Fulando - fulando.com)"
        },
        {
            src: photo2,
            thumbnail: photo2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Baby (Fulando - fulando.com)"
        },
        
    ];
    
    return(
        <div className="PortfolioPage">
            <header className="PortfolioHeader">
                <div className="PageTitle">
                    <h1>Portfolio</h1>
                </div>
                <div className="ListPhotos">
                    <hr/>
                    <Gallery images={photos} 
                             margin={10}
                             maxRows={3}
                             backdropClosesModal={true}
                    />
                    <hr />
                </div>
            </header>
        </div>
    );
}

export default Portfolio;