import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="bg-neutral-800 py-10 px-20 h-full w-full text-white ">
      <Navbar />
      <Mainroutes />
    </div>
  )
}
export default App