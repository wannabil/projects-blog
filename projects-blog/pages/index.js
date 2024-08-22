import Head from 'next/head'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to My Blog</h1>

        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Powered by Next.js
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .posts {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .post {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 100%;
          max-width: 800px;
        }

        .post:hover,
        .post:focus,
        .post:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .post h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .post p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  // In a real application, you would fetch this data from an API or database
  const posts = [
    { id: 1, title: 'First Blog Post', excerpt: 'This is my first blog post.' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is my second blog post.' },
    { id: 3, title: 'Third Blog Post', excerpt: 'This is my third blog post.' },
  ]

  return {
    props: {
      posts,
    },
  }
}