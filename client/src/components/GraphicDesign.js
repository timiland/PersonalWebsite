import React, { Fragment } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import ModalPic from './ModalPic'
import 'pure-react-carousel/dist/react-carousel.es.css';

const slides = "z-0 h-80 w-full p-8";

const logos = ['3tamplogo','CurlyKidLogo', 'MosaicLogo'];

const illustrations = ['AfghanHound','Ankylosaurus', 'CloudedLeopard' , 'Dalmatian' , 'Footballers', 'HarpyEagle', 'Husky', 'Jaguar', 'Octupus'];

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
    <Slider className="rounded-md w-full h-80">
    { props.children }
    </Slider>
    {/* <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext> */}
  </CarouselProvider>
    )
}

export default function GraphicDesign(props) {

    return (
      <Fragment>
    <h1 className="text-5xl py-10 w-full text-center">Graphic Design</h1>
    <p className="mt-14 mb-8 mx-auto max-w-prose text-center text-lg">Hopefully you took the time to look at some of my Web Projects shown above. You'll notice that most of my Web Projects make use of my illustrations. I have been involved in some logo design and graphic projects, and my eye for graphics and aesthetics always works its way into my other projects.</p>

    <div className="flex flex-wrap justify-center mx-8 mb-8 py-8 border-b border-black">
    </div>

    <h2 className="text-4xl my-4 w-full text-center">Logos</h2>

    <div className="sm:hidden block">
    <ImgCarousel 
      visibleSlides={1}
      totalSlides={3}>
        {logoSlides}
    </ImgCarousel>
    </div>

    <div className="hidden sm:grid grid-cols-3">
        {logoPics}
    </div>

    <h2 className="text-4xl my-4 w-full text-center">Illustrations</h2>
    <p className="mt-4 mx-auto max-w-prose text-center text-lg">Hopefully you took the time to look at some of my Web Projects shown above. If so, you'll notice that most of my Web Projects make use of my illustrations. I have been involved in some logo design and graphic projects shown below, and whilst I am not pursuing a career in Graphic Design, my eye for graphics and aesthetics always works its way into my other projects. I've also served as an emergency Graphic Designer in past roles - my previous employer now uses a logo I designed for them!</p>

    <div className="sm:hidden block">
    <ImgCarousel 
      visibleSlides={1}
      totalSlides={9}>
        {illSlides}
    </ImgCarousel>
    </div>

    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3">
        {illPics}
    </div>
    </Fragment>
    )
}
