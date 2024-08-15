import Image from "next/image"

export default function CardFour({image, name}){
return (
    <div className="my-3 mx-2 w-16 h-24 shadow-md shadow-gray-700 text-center">
        <Image className="mx-auto" src={image} alt="Product_Image" width={300} height={300} quality={100} />
        <p className="p-0.5 mt-1 text-xs text-nowrap font-semibold text-ellipsis overflow-hidden">{name}</p>
      </div>
)
};