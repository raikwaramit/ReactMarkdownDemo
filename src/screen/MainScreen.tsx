import { Link } from "react-router-dom";

export interface IMainScreenProps {}

/**
 * Function component for the main screen of the app.
 *
 * @param props Properties for the main screen.
 * @returns A ui component representing the main screen.
 */
export default function MainScreen(props: IMainScreenProps) {
  return (
    <div>
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-3xl">Markdown Renderer</h1>
        <p>Turn your Markdown into beautiful, formatted content.</p>
      </header>

      <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded">
        <section>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-4">
            <li>Easy-to-use Markdown rendering</li>
            <li>Real-time preview</li>
            <li>Customizable styling options</li>
            <li>Support for popular Markdown extensions</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="text-gray-700">
            Start rendering your Markdown content with our easy-to-use Markdown
            renderer.
          </p>
          <Link
            to="mdviewer"
            className="bg-blue-500 text-white px-4 py-2 rounded inline-block mt-4 transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
}
