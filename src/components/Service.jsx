import React from "react";
import Cardweb from "./Cardweb";
import Servicedata from "./Servicedata";
import web from "./images/bg1.png";
import Commen from "./Commen";

const Service = () => {
  return (
    <>
      <div>
        <Commen
          name="Our passion is your "
          imgsrc={web}
          visit="/"
          btname="Contact Now"
          lifename=" Success Life "
        />
      </div>
      <div className="my-5">
        <h1 className="text-center">Our Service!</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Servicedata.map((value, index) => {
                return (
                  <Cardweb
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                  />
                );
              })}

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
