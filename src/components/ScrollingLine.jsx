import React from "react";
import Marquee from "react-fast-marquee";

const ScrollingLine = () => {
  return (
    <div className="container mx-auto my-10">
      <Marquee className="bg-base-300 py-3" pauseOnHover={true} speed={80}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla quidem quae officia ullam quam aspernatur quasi error eius ut vero ab nesciunt voluptate libero impedit ex, natus
          repudiandae eum dolor enim harum cumque at doloribus voluptatem. Nam, amet? Molestiae ipsam sint temporibus obcaecati nobis similique recusandae vitae repellendus minima?
        </p>
      </Marquee>
    </div>
  );
};

export default ScrollingLine;
