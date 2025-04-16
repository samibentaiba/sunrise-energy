import type React from "react"
import BlogPost from "./BlogPost"

interface BlogListProps {
  posts: {
    title: string
    imageUrl: string
    category: string
    link: string
    filter: string[]
  }[]
  activeFilter: string
}

const BlogList: React.FC<BlogListProps> = ({ posts, activeFilter }) => {
  const filteredPosts =
    activeFilter === "*"
      ? posts
      : posts.filter((post) => post.filter.includes(activeFilter)); // updated filtering logic

  return (
    <ul className="flex flex-wrap -mx-6">
      {filteredPosts.map((post) => (
        <BlogPost
          key={post.title}
          title={post.title}
          imageUrl={post.imageUrl}
          category={post.category}
          link={post.link}
        />
      ))}
    </ul>
  );
};

export default BlogList;