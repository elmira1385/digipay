const Search = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-4xl py-2.5 px-6 flex flex-row space-x-1 w-full mx-5">
        <svg
          fill="#757575"
          width="24px"
          height="24px"
          viewBox="0 0 0.72 0.72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.651 0.609 0.54 0.498A0.27 0.27 0 1 0 0.498 0.54l0.11 0.11a0.03 0.03 0 0 0 0.043 0 0.03 0.03 0 0 0 0 -0.042M0.33 0.54a0.21 0.21 0 1 1 0.21 -0.21 0.21 0.21 0 0 1 -0.21 0.21" />
        </svg>
        <input
          className="w-full border-none outline-none  text-[12px]"
          placeholder="جست‌وجو در خدمات، فروشگاه‌ها، محصولات"
          type="text"
        />
      </div>
    </div>
  );
};

export default Search;
