import PostList from "@/components/PostList";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <>
        <section className="hero container">
            <p className="eyebrow">
                <span />
                Блог проекта
            </p>
            <h1>
                Последние записи <em>{/*posts.length*/} публикаций</em>
            </h1>
            <p className="hero__description">
                Заметки оработе над проектом: что сделали, что сломалось и из этого вышло.
            </p>
        </section>
        <section className="container">
            <PostList posts={posts} />
        </section>
    </>
  );
}
