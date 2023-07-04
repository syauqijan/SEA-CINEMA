import React from 'react';
const CustomCarousel = () => {
  return (
    <div>
        <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1" ></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="2" ></li>

            </ol>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    
                    <div className='containerslide'>
                        <h1>example Headline</h1>
                        <p>example description</p>
                        <a href='#' className='btn btn-lg btn-primary'>
                            Readddd
                        </a>
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='containerslide'>
                        <h1>example Headline</h1>
                        <p>example description</p>
                        <a href='#' className='btn btn-lg btn-primary'>
                        Read 
                        </a>
                    </div>
                </div>
                <div className='carousel-item'>
                    <div className='containerslide'>
                        <h1>example Headline</h1>
                        <p>example description</p>
                        <a href='#' className='btn btn-lg btn-primary'>
                        Read 
                        </a>
                    </div>
                </div>
            </div>
            <a href='#myCarousel' className='carousel-control-prev' role='button' data-bs-slide='prev'>
                <span className='visually-hidden'>Previous</span>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            </a>
            <a href='#myCarousel' className='carousel-control-next' role='button' data-bs-slide='next'>
                <span className='visually-hidden'>Next</span>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
            </a>
        </div>
    </div>



  );
}

export default CustomCarousel;
