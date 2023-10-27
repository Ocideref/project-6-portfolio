import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="https://res.cloudinary.com/dn6shhlok/image/upload/v1698374286/postcard_lscar1.webp"
      width={800}
      height={600}
      alt="Picture of the author"
    />
    
  )
}