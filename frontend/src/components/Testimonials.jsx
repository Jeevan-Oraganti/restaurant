import React from "react";
import { data } from "../restApi.json";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h1
            style={{ textAlign: "center", marginTop: "50px" }}
            className="heading"
          >
            Testimonials
          </h1>

          <div className="cards">
            {data[0].testimonials.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <p className="title">{element.title}</p>
                <p className="description">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
