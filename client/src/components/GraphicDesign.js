import React, { Fragment } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import ModalPic from './ModalPic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import 'pure-react-carousel/dist/react-carousel.es.css';

const slides = "z-10 h-80 w-full p-8";

const logos = ['3tamplogo','CurlyKidLogo', 'VentusLogo'];

const illustrations = ['AfghanHound','Octopus','Jaguar'];

const logoSlides = logos.map((logo, i) => (
    <Slide index={i} key={i}><img className={`${slides}`} src={require(`../images/logos/${logo}.svg`)}></img></Slide>
));

const logoPics = logos.map((logo, i) => (
  <ModalPic
    key={i}
    pic={logo}
    category={'logos'}
  />
));

const illSlides = illustrations.map((illustration, i) => (
    <Slide index={i} key={i}><img className={`${slides}`} src={require(`../images/illustrations/${illustration}.svg`)}></img></Slide>
));

const illPics = illustrations.map((illustration, i) => (
    <ModalPic
      key={i}
      pic={illustration}
      category={'illustrations'}
    />
));



function ImgCarousel(props) {
    return(
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={100}
    totalSlides={props.totalSlides}
    visibleSlides={props.visibleSlides}
  >
    <div className="relative">
    <Slider className="rounded-md w-full h-80 z-10">
    { props.children }
    </Slider>
    <ButtonBack className="text-green-900 select-none p-3 outline-none absolute top-32 -left-12 z-50" >
    <FontAwesomeIcon icon={faAngleLeft} size="2x" />
    </ButtonBack>
    <ButtonNext className="text-green-900 select-none outline-none p-3 absolute top-32 -right-12 z-50" >
    <FontAwesomeIcon icon={faAngleRight} size="2x" />
    </ButtonNext>
    <DotGroup/>
    </div>
  </CarouselProvider>
    )
}

export default function GraphicDesign(props) {

    return (
      <Fragment>
    <h1 className="text-5xl py-10 w-full text-center">Graphic Design</h1>
    <p className="mt-14 mb-8 mx-auto max-w-prose text-center text-lg">Hopefully you took the time to look at some of my Web Projects shown above. You'll notice that most of my Web Projects make use of my illustrations. I have been involved in a range of freelance graphic design projects and my eye for graphics and aesthetics usually manages to find its way into my other projects too.</p>

    <div className="flex flex-wrap justify-center mx-8 mb-8 py-8 border-b border-black">
    </div>

    <h2 className="text-4xl py-10 w-full text-center">Logos</h2>

    <div className="sm:hidden block pb-10">
    <ImgCarousel 
      visibleSlides={1}
      totalSlides={3}>
        {logoSlides}
    </ImgCarousel>
    </div>

    <div className="hidden sm:grid grid-cols-3 pb-10">
        {logoPics}
    </div>

    <h2 className="text-4xl py-10 w-full text-center">Illustrations</h2>
    <p className="py-10 mx-auto max-w-prose text-center text-lg">I have spent many years developing my illustration style, which involves just the right amount of realism to look slick and professional, but also playful and easy on the eye. You can find my illustrations on <a className="no-underline text-blue-800" href="https://www.shutterstock.com/g/Timothy+Iland" target="_blank">Shutterstock</a>, and purchase them as fabrics on <a className="no-underline text-blue-800" href="https://www.spoonflower.com/profiles/hornbill_design" target="_blank">Spoonflower</a>.</p>

    <div className="sm:hidden block pb-10">
    <ImgCarousel 
      visibleSlides={1}
      totalSlides={9}>
        {illSlides}
    </ImgCarousel>
    </div>

    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 pb-10">
        {illPics}
    </div>
    </Fragment>
    )
}
