import React from "react";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import {BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { RiMailDownloadFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {

  
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact via ph# <FiPhoneCall style={{marginRight: "8px"}}/> (+92)347-7900230
                        
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <h6>
                      <button className="button" style={{width: "100%"}}
                        onClick={() => window.location.href = "https://www.linkedin.com/in/sanwal-mumtaz-b12047272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                        Contact through Linkedin<BsLinkedin color="white" size={30} className="ms-4"/>
                      </button>
                      </h6>
                    </div>
                    <div className="row px-3">
                      <h6>
                       <button className="button" style={{width: "100%"}}
                        onClick={() => window.location.href = "https://api.whatsapp.com/send?phone=03477900230"}>
                        Contact via Whatsapp <BsWhatsapp color="white" size={30} className="ms-4" />
                      </button>
                      </h6>
                    </div>
                    <div className="row px-3">
                      <h6>
                       <button className="button" style={{width: "100%"}}
                        onClick={() => window.location.href = "mailto:sanwalmumtaz536@gmail.com"}>
                        Contact through Email <RiMailDownloadFill color="white" size={30} className="ms-4" />
                      </button>
                      </h6>
                    </div>
                    
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
