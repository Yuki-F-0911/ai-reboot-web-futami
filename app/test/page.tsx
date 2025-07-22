export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 p-8">
      <h1 className="text-4xl font-bold text-white">Tailwind CSS Test</h1>
      <p className="text-white mt-4">If you see this with blue background and white text, Tailwind is working!</p>
      <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
        <p className="text-gray-800">This is a white card with shadow</p>
      </div>
    </div>
  );
}