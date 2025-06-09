import "./App.css";

function App() {
  // year tracker logic
  const now = new Date(); // gets current date
  const currentYear = now.getFullYear();
  const startOfYear = new Date(currentYear, 0, 1); // Jan 1st of the current year
  const endOfYear = new Date(currentYear + 1, 0, 1); // Jan 1st of the next year

  const total = endOfYear - startOfYear;
  const elapsed = now - startOfYear;
  const percent = ((elapsed / total) * 100).toFixed(1);



  return (
    <div className="min-h-screen bg-gray-950 text-neutral-200 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-cyan-400">Life-Grid</h1>
        <p className="text-sm text-neutral-400">My personal dashboard</p>
      </header>

      <main className="grid grid-cols-2 gap-6 w-full max-w-screen-xl mx-auto px-4">
        <section className="bg-gray-800 shadow-md rounded-xl p-6 font-mono hover:bg-slate-700 transition-colors">
          <h2 className="text-lg font-semibold tracking-wide mb-2">Current Year Progress</h2>
          <p className="text-sm">{currentYear} is <span className="text-blue-400">{percent}%</span> complete</p>
          <div className="w-full h-2 bg-gray-700 rounded mt-4">
          <div
            className="h-full bg-cyan-500 rounded"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        </section>
        <section className="bg-gray-800 shadow-md rounded-xl p-6 font-mono hover:bg-slate-700 transition-colors">
          <h2 className="text-xl font-semibold mb-2 ">Placeholder Module 2</h2>
          <p className="text-sm ">This will be your second module.</p>
          
        </section>
        
      </main>
    </div>
  );
}

export default App;
