export const CardInfo = () => {
  return (
    <div className="w-[256px] shadow-xl rounded-2xl">
      <div className=" bg-red-500 rounded-t-2xl items-center justify-center flex py-3">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 27H19V19H17M19 11H19.02M37 19C37 21.3638 36.5344 23.7044 35.6298 25.8883C34.7252 28.0722 33.3994 30.0565 31.7279 31.7279C30.0565 33.3994 28.0722 34.7252 25.8883 35.6298C23.7044 36.5344 21.3638 37 19 37C16.6362 37 14.2956 36.5344 12.1117 35.6298C9.92784 34.7252 7.94353 33.3994 6.27208 31.7279C4.60062 30.0565 3.27475 28.0722 2.37017 25.8883C1.46558 23.7044 1 21.3638 1 19C1 14.2261 2.89642 9.64773 6.27208 6.27208C9.64773 2.89642 14.2261 1 19 1C23.7739 1 28.3523 2.89642 31.7279 6.27208C35.1036 9.64773 37 14.2261 37 19Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="text-center font-normal text-base py-2">
        Нажаль, меню пусте
      </div>
    </div>
  );
};
