type ThankyouRatingProps = {
  rating: string;
};

function ThankYouComponent({ rating }: ThankyouRatingProps) {
  return (
    <div className="flex justify-center items-center bg-veryDarkBlue w-screen h-screen">
      <div className="bg-darkBlue w-[400px] h-[400px] rounded-[20px] flex flex-col justify-center items-center">
        <div>
          <img
            src="../static/images/illustration-thank-you.svg"
            alt="icon-star"
            width={150}
            height={150}
          />
        </div>
        <div className="bg-mediumGrey px-3 py-1 rounded-full mt-7">
          <p className="text-orange text-[14px] tracking-[.1em]">You selected out {rating} of 5</p>
        </div>
        <div className="text-center p-6">
          <h1 className="text-[1.8rem] font-bold text-white">Thank you!</h1>
          <p className="text-lightGrey mt-2 text-[16px]">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t
            hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYouComponent;
