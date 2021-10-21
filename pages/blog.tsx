import Head from 'next/head'
import BlogPage from "../components/blogPage/blogPage"

export default function second() {
    return (
        <div>
            <Head>
                <title>Blogs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <BlogPage />
        </div>
    )
}
