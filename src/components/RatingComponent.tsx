type RatingProps = {
  setRating: (rating: string) => void;
  handleSubMit: () => void;
};

const btnTitle: string[] = ["1", "2", "3", "4", "5"];
function RatingComponent({ setRating, handleSubMit }: RatingProps) {
  return (
    <div className="flex justify-center items-center bg-veryDarkBlue w-screen h-screen">
      <div className="bg-darkBlue w-[400px] h-[400px] rounded-[20px] relative p-9 m-5">
        <div className="w-[40px] h-[40px] bg-mediumGrey opacity-4 rounded-full"></div>
        <div className="absolute top-[3rem] left-[3rem]">
          <img src="../static/images/icon-star.svg" alt="icon-star" />
        </div>
        <div className="mt-6">
          <h1 className="text-[1.8rem] font-bold text-white">How did we do?</h1>
          <p className="text-lightGrey mt-2 text-[16px]">
            Please let us know how we did with your support request. All feedback is appreciated to
            help us improve our offering!
          </p>
        </div>
        <div className="flex justify-between mt-5">
          {btnTitle.map((title, index) => {
            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(title)}
                className="w-[50px] h-[50px] bg-mediumGrey rounded-full text-[18px] pt-1 font-bold text-lightGrey hover:bg-orange hover:text-white focus:bg-lightGrey focus:text-white"
              >
                {title}
              </button>
            );
          })}
        </div>
        <div className="mt-6">
          <button
            type="button"
            onClick={handleSubMit}
            className="uppercase bg-orange w-full p-2 rounded-full text-white hover:bg-white hover:text-orange text-center"
          >
            <p className="tracking-[.2em]">Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingComponent;
