
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Prompotia is an open-source AI prompting tool for modern word to discover, create and share modren prompts
      </p>

      <Feed />
    </section>
  )
}

export default Home