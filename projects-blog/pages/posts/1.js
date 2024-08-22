import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <div className="container">
      <Head>
        <title>Blog Post: 1st Day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Blog Post: 1st Day</h1>
        <h2>Drafting the whole design and features</h2>
        
        <ul>
          <li>Brainstorming to the whole design and features I might want to use</li>
          <li>Using Figma to design
            <ul>
              <li>Front page</li>
              <li>Profile page</li>
              <li>Database</li>
            </ul>
          </li>
          <li>Saving assets on figma</li>
          <li>Deploying first simple blog on vercel</li>
        </ul>

        <h2>Resources and References</h2>
        <ul>
          <li><a href="https://www.fabrikod.com/deploy-your-personal-blog-in-minutes-with-personext-and-vercel" target="_blank" rel="noopener noreferrer">Deploy your personal blog in minutes with Personext and Vercel</a></li>
          <li><a href="https://www.youtube.com/watch?v=JGLfyTDgfDc" target="_blank" rel="noopener noreferrer">Using Figma to design (YouTube)</a></li>
          <li><a href="https://www.cardmarket.com/en/Pokemon" target="_blank" rel="noopener noreferrer">Cardmarket - Pokemon</a></li>
        </ul>

        <h2>Notes</h2>
        <p>My differences from other websites is I want only playable cards instead of for collection:</p>
        <ul>
          <li>Playable cards are usually cheaper options</li>
          <li>Not money oriented, just want to play the cards</li>
          <li>Feature idea: Matching live players</li>
        </ul>

        <Link href="/" className="back-link">
          Back to home
        </Link>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f0f8ff;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          width: 100%;
        }

        h1 {
          color: #4a4a4a;
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        h2 {
          color: #0070f3;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        ul {
          margin-bottom: 1.5rem;
          color: #4a4a4a;
        }

        li {
          margin-bottom: 0.5rem;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .back-link {
          margin-top: 2rem;
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .back-link:hover {
          background-color: #0051a2;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}