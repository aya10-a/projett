import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper";

//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';

// Import Images
import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";

import img4 from "../../../assets/images/small/img-4.jpg";
import img5 from "../../../assets/images/small/img-5.jpg";
import img6 from "../../../assets/images/small/img-6.jpg";
import img7 from "../../../assets/images/small/img-7.jpg";
import img8 from "../../../assets/images/small/img-8.jpg";
import img9 from "../../../assets/images/small/img-9.jpg";
import img10 from "../../../assets/images/small/img-10.jpg";
import img11 from "../../../assets/images/small/img-11.jpg";
import img12 from "../../../assets/images/small/img-12.jpg";
import img13 from "../../../assets/images/small/img-13.jpg";
import img14 from "../../../assets/images/small/img-14.jpg";
import img15 from "../../../assets/images/small/img-15.jpg";
import img16 from "../../../assets/images/small/img-16.jpg";
import img17 from "../../../assets/images/small/img-17.jpg";
import img18 from "../../../assets/images/small/img-18.jpg";
import img19 from "../../../assets/images/small/img-19.jpg";
import img20 from "../../../assets/images/small/img-20.jpg";
import img21 from "../../../assets/images/small/img-21.jpg";
import img22 from "../../../assets/images/small/img-22.jpg";

const UiSwiperSlider = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span className="' + className + '">' + (index + 1) + "</span>";
        },
    };

    document.title="Accueil";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Swiper Slider" pageTitle="Advance UI" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Swiper effect={"coverflow"} grabCursor={true} centeredSlides={true} slidesPerView={"4"} loop={true} autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                        coverflowEffect={{
                                            rotate: 50,
                                            stretch: 0,
                                            depth: 100,
                                            modifier: 1,
                                            slideShadows: true,
                                        }}
                                        pagination={{
                                            el: '.swiper-pagination',
                                            clickable: true,
                                            dynamicBullets: true,
                                        }}
                                        modules={[EffectCoverflow, Pagination, Autoplay]} className="mySwiper swiper effect-coverflow-swiper rounded pb-5"
                                    >
                                        <div className="swiper-wrapper">
                                            <SwiperSlide> <img src={img1} alt="" className="img-fluid" /> </SwiperSlide>
                                            <SwiperSlide> <img src={img10} alt="" className="img-fluid" /> </SwiperSlide>
                                            <SwiperSlide> <Link to='/pages-starter'> <img src={img4} alt="" className="img-fluid" /> </Link></SwiperSlide>
                                            <SwiperSlide> <Link to='/pages-starter'><img src={img5} alt="" className="img-fluid" /> </Link></SwiperSlide>
                                            <SwiperSlide> <img src={img21} alt="" className="img-fluid" /> </SwiperSlide>
                                            <SwiperSlide> <img src={img17} alt="" className="img-fluid" /> </SwiperSlide>
                                            <SwiperSlide> <img src={img8} alt="" className="img-fluid" /> </SwiperSlide>
                                            <SwiperSlide> <img src={img15} alt="" className="img-fluid" /> </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination swiper-pagination-dark"></div>
                                    </Swiper>

                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Nos meilleurs  offres</h4>
                                </CardHeader>
                                <CardBody>
                                
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={10}
                                        pagination={{
                                            el: '.swiper-pagination',
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            640: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 50,
                                            },
                                        }}
                                        loop={true}
                                        modules={[Pagination]}
                                        className="mySwiper swiper responsive-swiper rounded gallery-light pb-4" >
                                        <div className="swiper-wrapper">

                                            <SwiperSlide>
                                                <div className="gallery-box card">
                                                    <div className="gallery-container">
                                                        <Link className="image-popup" to={img1} title="">
                                                            <img className="gallery-img img-fluid mx-auto" src={img1} alt="" />
                                                            
                                                        </Link>
                                                    </div>
                                                    <div className="box-content">
                                                        <div className="d-flex align-items-center mt-1">
                                                            <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Ron Mackie</Link></div>
                                                            <div className="flex-shrink-0">
                                                                <div className="d-flex gap-3">
                                                                    <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 2.2K
                                                                    </button>
                                                                    <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                        <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.3K
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide><div className="gallery-box card">
                                                <div className="gallery-container">
                                                    <Link className="image-popup" to={img12} title="">
                                                        <img className="gallery-img img-fluid mx-auto" src={img2} alt="" />
                                                       
                                                    </Link>
                                                </div>
                                                <div className="box-content">
                                                    <div className="d-flex align-items-center mt-1">
                                                        <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Nancy Martino</Link></div>
                                                        <div className="flex-shrink-0">
                                                            <div className="d-flex gap-3">
                                                                <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                    <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.2K
                                                                </button>
                                                                <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                    <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.1K
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                            <SwiperSlide><div className="gallery-box card mb-0">
                                                <div className="gallery-container">
                                                    <Link className="image-popup" to={img10} title="">
                                                        <img className="gallery-img img-fluid mx-auto" src={img1} alt="" />
                                                       
                                                    </Link>
                                                </div>
                                                <div className="box-content">
                                                    <div className="d-flex align-items-center mt-1">
                                                        <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Henry Baird</Link></div>
                                                        <div className="flex-shrink-0">
                                                            <div className="d-flex gap-3">
                                                                <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                    <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 632
                                                                </button>
                                                                <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                    <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 95
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                            <SwiperSlide><div className="gallery-box card">
                                                <div className="gallery-container">
                                                    <Link className="image-popup" to={img4} title="">
                                                        <img className="gallery-img img-fluid mx-auto" src={img4} alt="" />
                                                     
                                                    </Link>
                                                </div>
                                                <div className="box-content">
                                                    <div className="d-flex align-items-center mt-1">
                                                        <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Jason McQuaid</Link></div>
                                                        <div className="flex-shrink-0">
                                                            <div className="d-flex gap-3">
                                                                <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                    <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 825
                                                                </button>
                                                                <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                    <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 101
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                            <SwiperSlide><div className="gallery-box card">
                                                <div className="gallery-container">
                                                    <Link className="image-popup" to={img6} title="">
                                                        <img className="gallery-img img-fluid mx-auto" src={img6} alt="" />
                                                        
                                                    </Link>
                                                </div>
                                                <div className="box-content">
                                                    <div className="d-flex align-items-center mt-1">
                                                        <div className="flex-grow-1 text-muted">by <Link to="" className="text-body text-truncate">Erica Kernan</Link></div>
                                                        <div className="flex-shrink-0">
                                                            <div className="d-flex gap-3">
                                                                <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                    <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> 3.4K
                                                                </button>
                                                                <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                                                    <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> 1.3k
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination swiper-pagination-dark"></div>
                                    </Swiper>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={4} lg={6}>
                            <Card>
                                <CardHeader>
                                <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper navigation-swiper rounded">
                                        <div className="swiper-wrapper">
                                        
                                                <SwiperSlide> <Link to='/pages-starter'><img src={img4} alt="" className="img-fluid" /></Link> </SwiperSlide>
                                                <SwiperSlide><Link to='/pages-starter'><img src={img5} alt="" className="img-fluid" /></Link></SwiperSlide>
                                                <SwiperSlide><Link to='/pages-starter'><img src={img14} alt="" className="img-fluid" /></Link></SwiperSlide>
                                            
                                        </div>
                                    </Swiper>   
                                </CardHeader>

                                    <CardBody>
                                        <h4 className="card-title mb-0 text-center mx-auto" style={{ fontWeight: 'bold' }}>Michael Kors</h4>
                                        <p className="text-muted text-center"><code>Montre pour femme Pyper</code>  mouvement à trois aiguilles, boîtier en alliage doré de 38 mm avec bracelet en alliage, MK4593.</p>
                                        <h5 className="card-title mb-0 text-center" style={{ fontWeight: 'bold' }}>200$</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div></div> {/* Cet élément est optionnel, il peut être utilisé pour ajuster l'espacement */}
                                            <div>
                                                <Link to='/GererPanier'>
                                                    <FeatherIcon icon="shopping-cart" size={25} />
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>   
                            </Card>

                        </Col>
                        <Col xl={4} lg={6}>
                            <Card>
                                <CardHeader>
                                <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper navigation-swiper rounded">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide><Link to='/pages-starter'><img src={img13} alt="" className="img-fluid" /></Link></SwiperSlide>
                                            <SwiperSlide><Link to='/pages-starter'><img src={img8} alt="" className="img-fluid" /></Link></SwiperSlide>
                                            <SwiperSlide><Link to='/pages-starter'><img src={img1} alt="" className="img-fluid" /></Link></SwiperSlide>
                                            
                                        </div>
                                    </Swiper>
                                    
                                </CardHeader>
                                  <CardBody>
                                        <h4 className="card-title mb-0 text-center mx-auto" style={{ fontWeight: 'bold' }}> Basket Adidas</h4>
                                        <p className="text-muted text-center"><code> Basket pour femme </code>  trés comfortable et à la mode avec un design extraordinaire de marque adidas OG Campus 00S Men ID2049.</p>
                                        <h5 className="card-title mb-0 text-center" style={{ fontWeight: 'bold' }}>100$</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div></div> {/* Cet élément est optionnel, il peut être utilisé pour ajuster l'espacement */}
                                            <div>
                                                <Link to='/GererPanier'>
                                                   <FeatherIcon icon="shopping-cart" size={25} />
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                            </Card>
                        </Col>
                        <Col xl={4} lg={6}>
                            <Card>
                                <CardHeader>
                                <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper navigation-swiper rounded">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide><img src={img15} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><img src={img16} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><img src={img17} alt="" className="img-fluid" /></SwiperSlide>
                                        </div>
                                    </Swiper>
                                    
                                </CardHeader>
                                <CardBody>
                                        <h4 className="card-title mb-0 text-center mx-auto" style={{ fontWeight: 'bold' }}>Gamme SVR</h4>
                                        <p className="text-muted text-center"><code> Routine SVR  Sebiaclear Acné et Éclat</code> idéal pour les personnes qui ont une peau grasse à tendance acnéique .</p>
                                        <h5 className="card-title mb-0 text-center" style={{ fontWeight: 'bold' }}>100$</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div></div> 
                                            <div>
                                                <Link  to='/GererPanier'>
                                                  <FeatherIcon icon="shopping-cart" size={25} />
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                            </Card>
                        </Col>
                        <Col xl={4} lg={6}>
                            <Card>
                                <CardHeader>
                                <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper navigation-swiper rounded">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide><img src={img18} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><img src={img19} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><img src={img20} alt="" className="img-fluid" /></SwiperSlide>
                                        </div>
                                    </Swiper>
                                    
                                </CardHeader>
                                <CardBody>
                                        <h4 className="card-title mb-0 text-center mx-auto" style={{ fontWeight: 'bold' }}>Apple</h4>
                                        <p className="text-muted text-center"><code>Apple iPhone 15 Pro Max (256 Go)</code> </p>
                                        <h5 className="card-title mb-0 text-center" style={{ fontWeight: 'bold' }}>200$</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div></div> {/* Cet élément est optionnel, il peut être utilisé pour ajuster l'espacement */}
                                            <div>
                                                 <Link  to='/GererPanier'>
                                                       <FeatherIcon icon="shopping-cart" size={25} />
                                                 </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                            </Card>
                        </Col>
                        <Col xl={4} lg={6}>
                            <Card>
                                <CardHeader>
                                <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper navigation-swiper rounded">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide><img src={img21} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><img src={img22} alt="" className="img-fluid" /></SwiperSlide>
                                            
                                        </div>
                                    </Swiper>
                                    
                                </CardHeader>
                                <CardBody>
                                        <h4 className="card-title mb-0 text-center mx-auto" style={{ fontWeight: 'bold' }}>Aspirateur</h4>
                                        <p className="text-muted text-center"><code>Aspirateur</code> robot Vacuum and Mop with Wi-Fi/App, Automatic Self-Charging Robotic Vacuum Cleaner, 2800Pa Suction, Slim, Good for Hard Floors Carpets,Black160.</p>
                                        <h5 className="card-title mb-0 text-center" style={{ fontWeight: 'bold' }}>500$</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                        <div></div> {/* Cet élément est optionnel, il peut être utilisé pour ajuster l'espacement */}
                                        <div>
                                                <Link  to='/GererPanier'>
                                                    <FeatherIcon icon="shopping-cart" size={25} />
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                            </Card>
                        </Col>
                        <Col xl={4} lg={6}>
                            <Card>
                                <CardHeader>
                                <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper navigation-swiper rounded">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide><img src={img2} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><img src={img9} alt="" className="img-fluid" /></SwiperSlide>
                                            <SwiperSlide><img src={img7} alt="" className="img-fluid" /></SwiperSlide>
                                        </div>
                                    </Swiper>
                                    
                                </CardHeader>
                                <CardBody>
                                        <h4 className="card-title mb-0 text-center mx-auto" style={{ fontWeight: 'bold' }}> NINJA</h4>
                                        <p className="text-muted text-center"><code>Friteuse sans huile Ninja MAX PRO</code>  , 6,2 L, grand tiroir, Roast, Bake, Air Fry, Familial, Numérique, Cuisson surgelés, Panier et plaque de cuisson antiadhésifs compatibles lave-vaisselle, Gris, AF180EUmouvement à trois aiguilles, boîtier en alliage doré de 38 mm avec bracelet en alliage, MK4593.</p>
                                        <h5 className="card-title mb-0 text-center" style={{ fontWeight: 'bold' }}>200$</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div></div> {/* Cet élément est optionnel, il peut être utilisé pour ajuster l'espacement */}
                                            <div>
                                                <Link  to='/GererPanier'>
                                                    <FeatherIcon icon="shopping-cart" size={25} />
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default UiSwiperSlider;
