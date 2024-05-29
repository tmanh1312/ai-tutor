export default function Progress() {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-3 text-center p-3">
          <div className="h-1/2 text-center"><h3 className="text-xl font-bold text-center items-center">Kudos Given</h3></div>
          <div className="h-1/2 font-bold text-xl mb-2 text-center items-center">
            <p className="text-lulu-100 text-5xl">5</p>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-3 h-28 text-center p-3">
          <div className="h-1/2 text-center"><h3 className="text-xl font-bold text-center items-center">Kudos Received</h3></div>
          <div className="h-1/2 font-bold text-xl mb-2 text-center items-center">
            <p className="text-lulu-100 text-5xl">10</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="general-header mb-2">Modules Completion Stats</h2>
        <div>
          <div className="mb-3">
            <h3>Module 1 | 90%</h3>
            <div className="w-11/12 bg-lulu-100 rounded-lg h-10"></div>
          </div>
          <div className="mb-3">
            <h3>Module 2 | 5%</h3>
            <div className="w-1/12 bg-lulu-100 rounded-lg h-10"></div>
          </div>
          <div className="mb-3">
            <h3>Module 3 | 100%</h3>
            <div className="w-100 bg-lulu-100 rounded-lg h-10"></div>
          </div>
          <div className="mb-3">
            <h3>Module 4 | 0%</h3>
            <div className="w-100 rounded-lg h-10"></div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="general-header">Module Progress Summary</h2>
        <div className="grid grid-cols-2">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black m-4 text-center p-3">
          <div className="h-1/2 text-center"><h3 className="text-xl font-bold text-center items-center text-white">COMPLETED</h3></div>
          <div className="h-1/2 font-bold text-xl mb-2 text-center items-center">
            <p className="text-white text-4xl">1</p>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-lulu-100 m-4 h-24 text-center p-3">
          <div className="h-1/2 text-center"><h3 className="text-xl font-bold text-center items-center text-white">REMAINING</h3></div>
          <div className="h-1/2 font-bold text-xl mb-2 text-center items-center">
            <p className="text-white text-4xl">2</p>
          </div>
        </div>
      </div>
      </div>
      {/* <h2>Quizzes</h2>
      <div>Quiz Block</div> */}
    </div>
  );
}