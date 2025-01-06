import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import './style.css';
import { Button } from "react-bootstrap";
const Error = () => {
    return (
        <section className="error-page-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-page-inn text-center">
                            <h2>
                                4
                                <span>
                                    <FontAwesomeIcon icon={faFrown} size="10x" />
                                </span>
                                4
                            </h2>
                            <h3>Sorry, We can’t find anything.</h3>
                            <p>But don’t be afraid. Just click on go home btn.</p>
                            <div className="btn-primary">
                                <Link to="/">
                                    Go To Home
                                </Link>
                            </div>
                            {/* <Button variant="primary">Primary</Button>{' '} */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error;
