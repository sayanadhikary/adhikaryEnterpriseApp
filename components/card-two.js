import Image from "next/image"

export default function CardTwo({image, name, price}){
return (
    <div className="my-3 mx-2 w-36 h-56 shadow-md shadow-gray-700 text-center">
        <Image className="mx-auto h-36" src={image} alt="Product_Image" width={300} height={300} quality={100} />
        <p className="px-1 py-2 h-10 text-xs">{name.substr(0,37)}</p>
        <p className="p-1 h-10 font-bold">₹ {price}</p>
      </div>
)
}