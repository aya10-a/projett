  import React from 'react';
  import { Button, Card, CardBody, CardHeader, Container } from 'reactstrap';
  import BreadCrumb from '../../../Components/Common/BreadCrumb';
  import img4 from "../../../assets/images/small/img-4.jpg";

  function Starter() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <BreadCrumb title="Swiper Slider" pageTitle="Advance UI" />
            <div className="row justify-content-center">
              <div className="col">
                <Card>
                  <div className="row g-0">
                    <div className="col-md-8">
                      <img className="rounded-start img-fluid h-100 object-cover" src={img4} alt="Card" />
                    </div>
                    <div className="col-md-4">
                      <CardHeader className="m-0 mt-0">
                        <h5 className="card-title mb-0">Michael Kors</h5>
                      </CardHeader>
                      <CardBody className="m-0">
                        <p className="card-text mb-2">Montre pour femme Pyper mouvement à trois aiguilles, boîtier en alliage doré de 38 mm avec bracelet en alliage, MK4593.</p>
                        <p className="card-text"><small className="text-muted">TAILLES DISPONIBLES</small></p>
                        <Button color="dark" outline className="btn btn-ghost-dark">S</Button>
                        <Button color="dark" outline className="btn btn-ghost-dark">M</Button>
                        <Button color="dark" outline className="btn btn-ghost-dark">L</Button><br></br>
                        <Button color="primary" className="rounded-pill w-100">Acheter</Button>

                      </CardBody>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }

  export default Starter;
