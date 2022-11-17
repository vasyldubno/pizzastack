export const CardLoading = () => {
  return (
    <div className="w-96 h-full shadow-xl rounded-[16px]">
      <div className="bg-gray-300 rounded-t-[16px] flex items-center justify-center h-[240px]">
        <svg
          width="60"
          height="48"
          viewBox="0 0 60 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.9174 7.5C44.9174 3.35812 48.2675 0 52.4037 0C56.5398 0 59.8899 3.35812 59.8899 7.5C59.8899 11.6438 56.5398 15 52.4037 15C48.2675 15 44.9174 11.6438 44.9174 7.5ZM0 42.7594C0 41.775 0.277365 40.8094 0.800185 39.975L21.0831 7.59469C21.7007 6.60188 22.7862 6 23.956 6C25.1257 6 26.2112 6.60188 26.8382 7.59469L38.6196 26.4094L43.1301 19.0031C43.4295 18.3844 44.1875 18 44.9174 18C45.6473 18 46.3211 18.3844 46.7048 19.0031L59.0571 39.2906C59.5998 40.1813 59.8899 41.2219 59.8899 42.2719C59.8899 45.4312 57.3259 48 54.1723 48H5.23195C2.34226 48 5.61468e-05 45.5719 5.61468e-05 42.7594H0Z"
            fill="#E5E7EB"
          />
        </svg>
      </div>
      <div className="h-[204px]">
        <div className="w-[144px] h-[24px] bg-gray-200 rounded-full mt-8 ml-8"></div>
        <div className="w-[320px] h-[12px] bg-gray-200 rounded-full mt-6 ml-8"></div>
        <div className="w-[320px] h-[12px] bg-gray-200 rounded-full mt-2 ml-8"></div>
        <div className="w-[80px] h-[24px] bg-gray-200 rounded-full mt-9 ml-8 mb-8"></div>
      </div>
    </div>
  );
};
