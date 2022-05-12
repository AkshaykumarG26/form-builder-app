import { Navbar } from "./components/Navbar/Navbar";
import { Element } from "./components/Element";
import { Routes, Route } from "react-router-dom";
import { CreateForms } from "./components/Pages/CreateForms";
import { EditForm } from "./components/Pages/EditForm";
import "./App.css"

function App() {
  // console.log(fields)
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Element />} />
        <Route path="/createforms" element={<CreateForms />} />
        <Route path="/:id/edit" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default App;
