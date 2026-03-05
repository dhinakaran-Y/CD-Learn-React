import TheHero from "../components/TheHero/TheHero";

const MovieBufferApp = () => {
  return (
    <div className="mx-auto bg-zinc-900! dark:bg-zinc-900! text-white! dark:text-white!">
      <header className="text-3xl font-bold py-5 text-orange-600 text-center border-b border-white/50">
        Movie Buffer
      </header>
      <TheHero />
    </div>
  );
};

export default MovieBufferApp;
