/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="relative text-base md:text-lg font-semibold text-[#fff] cursor-pointer capitalize shadow-md  px-4 py-1 sm:px-4 sm:py-1 whitespace-nowrap rounded-lg gradient__btn hover:opacity-[.8] hover:shadow-xl">
      {children}
    </button>
  );
}

export default Button;
