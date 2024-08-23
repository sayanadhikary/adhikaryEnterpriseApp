import Image from "next/image"

export default function CardFour({image, name}){
return (
    <div className="my-3 w-20 mx-0.5 p-2 h-28 shadow-sm shadow-gray-700 text-center">
        <div className="relative h-16"><Image src={image} alt="Product_Image" fill /></div>
        <p className="text-xs py-1">{name.substr(0, 17)}</p>
      </div>
)
};