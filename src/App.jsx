import Api from "./app/features/api/Api"


function App() {
  const url = 'https://api.adviceslip.com/advice'
  return (
    <div className="bg-dark-blue w-screen h-screen flex justify-center items-center">
      <div className="bg-grey-blue w-11/12 flex flex-col items-center text-center justify-center pt-10 px-6 pb-16">
        <Api />
      </div>
    </div>
  )
}

export default App
