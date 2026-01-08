function Button({ children }) {
  return (
    <button className="bg-black text-white px-8 py-3 rounded-full 
                       font-medium hover:bg-gray-900 
                       transition duration-300 shadow-md hover:shadow-lg">
      {children}
    </button>
  );
}

export default Button;
