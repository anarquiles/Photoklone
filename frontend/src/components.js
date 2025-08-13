import { useState } from 'react';

// Header Component
const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white text-xl font-semibold">Photopea</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Learn</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Tutorials</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Templates</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">API</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = ({ onStartClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1698807390276-725f3a7e41cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwYXJ0fGVufDB8fHxibGFja3wxNzU1MTE0OTcwfDA&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Free Online Photo Editor
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Unlock your creativity with the best free photo editor.
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Transform your photos with professional-grade tools in a free online photo editor that works right in your browser. No downloads, no hassle.
        </p>
        <button 
          onClick={onStartClick}
          className="bg-transparent border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Start using Photopea
        </button>
      </div>
    </section>
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      title: "Fully Local",
      description: "There are no uploads. Photopea runs on your device, using your CPU and your GPU. All files open instantly, and never leave your device.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Cost-Effective",
      description: "Enjoy all the premium features without spending a dime.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Convenient Editor",
      description: "No need to install heavy software on your device. Just open your browser and start editing.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Runs Everywhere",
      description: "Our photo editor runs on any device. The better hardware you have, the better it runs.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1461151150871-ca0a4bff5307?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NTUxMTQ5NjJ8MA&ixlib=rb-4.1.0&q=85"
              alt="Photo editing workspace"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
          
          {/* Features */}
          <div className="order-1 lg:order-2 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Editor Preview Component
const EditorPreview = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white mb-6">Professional Editor</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Photopea offers a full suite of editing tools, from basic features like cropping and resizing to advanced features such as layering, masking, and blending.
            </p>
            <button className="bg-transparent border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Start using Photopea
            </button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1599252441131-5aafffcf7740?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0fGVufDB8fHxibGFja3wxNzU1MTE0OTcwfDA&ixlib=rb-4.1.0&q=85"
              alt="Person using photo editor"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Professional Editor Component
const ProfessionalEditor = ({ onStartClick }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Full PSD support</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Photopea fully supports a popular PSD format, both opening and saving files. It supports many other formats too, such as XCF, Sketch, XD, CDR and many more.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-8 inline-block">
              <div className="w-32 h-32 bg-gray-700 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-white text-sm">Mobile App Interface</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={onStartClick}
            className="bg-transparent border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Start using Photopea
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer 
      className="relative py-16 bg-gray-900"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1652246446122-c2221c654aa7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NTUxMTQ5NjJ8MA&ixlib=rb-4.1.0&q=85')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white text-xl font-semibold">Photopea</span>
            </div>
            <p className="text-gray-400 mb-4">
              The best free online photo editor that works right in your browser. No downloads required.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Photopea Clone. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Learn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Mock Editor Component
const Editor = ({ onBack }) => {
  const [selectedTool, setSelectedTool] = useState('select');
  
  const tools = [
    { id: 'select', name: 'Select', icon: '⬚' },
    { id: 'brush', name: 'Brush', icon: '🖌️' },
    { id: 'eraser', name: 'Eraser', icon: '🧽' },
    { id: 'text', name: 'Text', icon: 'T' },
    { id: 'crop', name: 'Crop', icon: '✂️' },
    { id: 'heal', name: 'Heal', icon: '🩹' },
    { id: 'clone', name: 'Clone', icon: '📋' },
    { id: 'fill', name: 'Fill', icon: '🪣' },
  ];

  const layers = [
    { id: 1, name: 'Background', visible: true, locked: false },
    { id: 2, name: 'Layer 1', visible: true, locked: false },
    { id: 3, name: 'Text Layer', visible: false, locked: false },
  ];

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Top Menu Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="text-gray-300 hover:text-white transition-colors"
            >
              ← Back to Home
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-semibold">Photopea</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">Untitled-1</div>
            <div className="flex space-x-1">
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">File</button>
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">Edit</button>
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">Image</button>
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">Layer</button>
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">Select</button>
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">Filter</button>
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">View</button>
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">Window</button>
              <button className="text-gray-300 hover:text-white px-3 py-1 text-sm">Help</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex">
        {/* Left Toolbar */}
        <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-2">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`w-10 h-10 rounded flex items-center justify-center text-sm transition-colors ${
                selectedTool === tool.id
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              title={tool.name}
            >
              {tool.icon}
            </button>
          ))}
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-gray-700 flex items-center justify-center">
          <div className="bg-white w-96 h-64 shadow-2xl rounded border-2 border-gray-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="absolute top-4 left-4 right-4 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sample Canvas</h3>
                <p className="text-gray-600">Start creating your masterpiece!</p>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="w-16 h-16 bg-yellow-300 rounded-full opacity-70"></div>
              </div>
              <div className="absolute top-16 right-8">
                <div className="w-8 h-8 bg-pink-400 rounded opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panels */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* Layers Panel */}
          <div className="border-b border-gray-700 p-4">
            <h3 className="text-white font-semibold mb-3">Layers</h3>
            <div className="space-y-1">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  className="flex items-center justify-between bg-gray-700 px-3 py-2 rounded hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-300 hover:text-white">
                      {layer.visible ? '👁️' : '🚫'}
                    </button>
                    <span className="text-gray-300 text-sm">{layer.name}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    {layer.locked ? '🔒' : '🔓'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Properties Panel */}
          <div className="p-4 flex-1">
            <h3 className="text-white font-semibold mb-3">Properties</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Opacity</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="100"
                  className="w-full accent-teal-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Brush Size</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  defaultValue="20"
                  className="w-full accent-teal-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Color</label>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-black border border-gray-600 rounded cursor-pointer"></div>
                  <div className="w-8 h-8 bg-white border border-gray-600 rounded cursor-pointer"></div>
                  <div className="w-8 h-8 bg-red-500 border border-gray-600 rounded cursor-pointer"></div>
                  <div className="w-8 h-8 bg-blue-500 border border-gray-600 rounded cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigator Panel */}
          <div className="border-t border-gray-700 p-4">
            <h3 className="text-white font-semibold mb-3">Navigator</h3>
            <div className="bg-gray-700 w-full h-20 rounded border border-gray-600 flex items-center justify-center">
              <span className="text-gray-400 text-xs">Mini Preview</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Components = {
  Header,
  Hero,
  Features,
  EditorPreview,
  ProfessionalEditor,
  Footer,
  Editor
};

export default Components;