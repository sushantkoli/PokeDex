

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About This Project</h2>
        <p className="text-gray-700 mb-2">
          While building this Pokémon Explorer, I learned a lot about modern web development.
          Here’s a brief summary:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-left md:text-center">
          <li>How to fetch data from <strong>REST APIs</strong> using Axios.</li>
          <li>Managing state in React with <strong>useState</strong> and <strong>useEffect</strong>.</li>
          <li>Creating reusable React components like <strong>SearchBar</strong> and <strong>PokeDex</strong>.</li>
          <li>Handling asynchronous operations and loading states.</li>
          <li>Implementing pagination and search filtering for better UX.</li>
          <li>Styling components with <strong>Tailwind CSS</strong> for responsive design.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Overall, this project helped me practice connecting front-end interfaces to APIs and 
          building interactive user experiences.
        </p>
      </div>
    </section>
  );
};
export default About;