import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="bg-neutral-800 py-10 px-20 font-thin text-white w-screen h-screen">
      <Navbar />
      <Mainroutes />
    </div>
  )
}
export default App