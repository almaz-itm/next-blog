import { Post } from "@/types/blog";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  // Если постов нет
  if (!posts.length)
    return (
      <div className="empty-state">
        <h2>Записей пока нет</h2>
        <p>Когда появятся публикации, они будут показаны здесь</p>
      </div>
    );

  // Вывод постов
  return (
    <div className="post-list">
      {posts.map((post) => (
        <article className="post-list__item" key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
};

export default PostList;
