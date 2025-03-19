function SwitchButton({ isActive, onClick }) {
  return (
    <div
      className={`flex w-10 h-5 rounded-full cursor-pointer shadow-lg transition-all duration-500 ${isActive ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      onClick={onClick}
    >
      <span
        className={`h-5 w-5 rounded-full transition-all duration-500 border border-gray-300 ${isActive ? 'ml-5 bg-white' : 'm-0 bg-gray-100'
          }`}
      ></span>
    </div>
  )
}

export default SwitchButton