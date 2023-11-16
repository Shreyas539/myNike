

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullwidth }) => {
  return (
    <button className={`flex bg-coral-red items-center
     justify-center rounded-full gap-2 px-7 py-2 border 
     font-montserrat text-lg leading-none
     ${
        backgroundColor 
        ? `${backgroundColor} ${textColor} 
        ${borderColor}`
      :"text-white bg-coral-red ${fullwidth && 'w-full'} border-coral-red"
     }`}
      >
        {label}
       { iconURL && <img 
            src={iconURL} 
            alt="arrow right icon" 
            className="ml-2 rounded-full w-5 h-5"
        /> }
    </button>
  )
}

export default Button