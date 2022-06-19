import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from '../../components/NavBar';
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"

const Post = ({blog}) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

        <title>{blog.title}</title>

        <meta property="og:title" content="How to become a frontend developer | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

        <link as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

        <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />

        <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css" />



      </Head>
      <div>
        <NavBar/>
        <div>
          <div className="container py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div className>
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                {blog.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img src="/assets/img/blog-author.jpg" className="h-20 w-20 rounded-full border-2 border-grey-70 shadow" alt="author image" />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">By</span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">{blog._createdAt}</span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <h2 id="lorem-ipsum-dolor-sit-amet">Lorem ipsum dolor sit amet</h2>
                <PortableText
                  //Pass in block content straight from Sanity.io
                  content={blog.content}
                  projectId="ix06avf0"
                  dataset="production"
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    li: ({ children }) => <li className="special-list-item">{children}</li>
                  }}
                />
              </div>
              <div className="mt-10 flex justify-between border-t border-lila py-12">
                <a href="/" className="flex items-center">
                  <i className="bx bx-left-arrow-alt text-2xl text-primary" />
                  <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous Post</span>
                </a>
                <a href="/" className="flex items-center">
                  <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next Post</span>
                  <i className="bx bx-right-arrow-alt text-2xl text-primary" />
                </a>
              </div>
              <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <img src="/assets/img/blog-author.jpg" className="rounded-full shadow" alt="author image" />
                </div>
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    Christy Smith
                  </h3>
                  <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                  <div className="flex items-center justify-center pt-5 md:justify-start">
                    <a href="/">
                      <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow" />
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow" />
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow" />
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow" />
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, ATOM.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href="/">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow" />
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow" />
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow" />
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow" />
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  
  const client = createClient({
    projectId: "ix06avf0",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;
  const blog = await client.fetch(query);
  return {
     props: 
     { 
      blog
    } 
  }

}
