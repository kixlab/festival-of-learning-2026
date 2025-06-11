export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">About the Event</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Event Overview</h2>
        <p className="text-gray-600">
          The Festival of Learning 2026 brings together leading researchers, educators, and practitioners
          from around the world to share knowledge and innovations in education and learning.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">General Chair</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Prof. John Smith</h3>
          <p className="text-gray-600">University of Technology</p>
          <p className="mt-2">
            Professor Smith is a renowned expert in educational technology with over 20 years of
            experience in research and teaching.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Event Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Foster international collaboration in education research</li>
          <li>Share innovative teaching and learning methodologies</li>
          <li>Explore emerging technologies in education</li>
          <li>Build a global network of educators and researchers</li>
        </ul>
      </section>
    </div>
  );
} 