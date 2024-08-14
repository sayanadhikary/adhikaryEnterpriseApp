import Image from "next/image"

export default function CardHalf({image, name, price}){
return (
    <div className="my-3 mx-2 w-24 h-40 shadow-md shadow-gray-700 text-center">
        <Image className="mx-auto" src={image} alt="Product_Image" width={300} height={300} quality={100} />
        <p className="p-1 text-xs text-nowrap font-semibold text-ellipsis overflow-hidden">{name}</p>
        <p className="p-1 font-bold">₹{price}</p>
      </div>
)
}