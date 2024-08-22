import Image from "next/image"

export default function CardFour({image, name}){
return (
    <div className="my-3 w-20 mx-0.5 p-2 h-28 shadow-sm shadow-gray-700 text-center">
        <Image className="mx-auto h-16" src={image} alt="Product_Image" width={300} height={300} quality={100} />
        <p className="text-xs py-1">{name}</p>
      </div>
)
};