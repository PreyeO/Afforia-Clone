import { useState, useRef } from "react";
import { reviews } from "../../../data";
import ProductHuntBtn from "../Buttons/ProductHuntBtn";

const ReviewCard = ({ setMarqueePosition, marqueePosition }) => {
  
  // State and Ref initialization
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Event handler for mouse down
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
  };

  // Event handler for mouse move
  const handleMouseMove = (e) => {
    if (isMouseDown) {
       // calculates the change in the x-coordinate between the current mouse position 
      const deltaX = (e.clientX - startX) * 0.1; 
      setMarqueePosition((prevPosition) => prevPosition + deltaX);
    }
  };
 

  // Event handler for mouse up
  const handleMouseUp = () => {
    setIsMouseDown(false);
    setStartX(0);
  };

  // Combine the reviews to create a scrolling effect
  const allReviews = reviews.concat(reviews);

  // Event handler for transition end
  const handleTransitionEnd = () => {
    // Check if we've reached the end and reset position
    if (marqueePosition <= -containerRef.current.offsetWidth) {
      setMarqueePosition(0);
    } else if (marqueePosition >= containerRef.current.offsetWidth) {
      setMarqueePosition(0);
    }
  };

  // JSX structure for ReviewCard component
  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTransitionEnd={handleTransitionEnd}
      className="flex overflow-x-hidden" 
      style={{
        transform: `translateX(${marqueePosition}px)`,
        transition: isMouseDown ? "none" : "transform 0.1s",
        cursor: isMouseDown ? "pointing" : "auto",
        userSelect: "none",
      }}
    >
         {/* Mapping through the data from my data file */}
      {allReviews.map((review, index) => (
        <div
          key={index}
          className="md:w-[600px] w-[350px] h-[280px] p-[32px] border border-solid border-gray-300 rounded-md"
          style={{ marginLeft: "20px" }}
        >
          <p className="text-[#222222] max-w-[533px] md:h-[144px] h-[190px]">
            {review.content}
          </p>

          <div className="w-full p-[0.5px] bg-gray-200"></div>
          <div className="flex justify-between h-[56px] items-center md:mt-4 mt-0">
            <div className="flex gap-4">
              <img
                src={review.image}
                alt="reviewers photo"
                className="w-[32px] h-[32px]"
                loading="lazy"
              />
              <h3 className="text-[#525252] text-sm">{review.author}</h3>
            </div>

            <div className="hidden md:block">
              <ProductHuntBtn />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
