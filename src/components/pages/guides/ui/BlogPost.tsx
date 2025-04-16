import type React from "react"
import Image from "next/image"

interface BlogPostProps {
  title: string
  imageUrl: string
  category: string
  link: string
}

const BlogPost: React.FC<BlogPostProps> = ({ title, imageUrl, category, link }) => {
  return (
    <li className="relative flex w-full md:w-1/2 lg:w-1/3 p-6 transition-transform transform hover:translate-y-[-6px]">
      <a href={link} className="block w-full h-full">
        <div className="relative w-full h-64 overflow-hidden rounded-md">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform transform hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">{category}</p>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
      </a>
    </li>
  )
}

export default BlogPost
