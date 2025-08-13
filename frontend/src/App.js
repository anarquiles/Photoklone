import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./components";

const { Header, Hero, Features, EditorPreview, ProfessionalEditor, Footer, Editor } = Components;

const Home = () => {
  const [showEditor, setShowEditor] = useState(false);

  if (showEditor) {
    return <Editor onBack={() => setShowEditor(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero onStartClick={() => setShowEditor(true)} />
      <Features />
      <EditorPreview />
      <ProfessionalEditor onStartClick={() => setShowEditor(true)} />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;