const Button = ({ bgColor, color, buttonText }) => {
    console.log(bgColor, color);

    return (
        <button
            style={{ backgroundColor: bgColor, color: color }}
            className={`  border shadow-2xl shadow-black shadow-inner rounded p-5 border-black w-[200px] hover:scale-125  transition duration-700  h-[250px] hover:bg-black hover:text-white`}
        >
            {buttonText}
        </button>
    );
};

export default Button;
