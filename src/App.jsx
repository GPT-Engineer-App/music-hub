import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BrowseMusic from "./pages/BrowseMusic.jsx";
import Search from "./pages/Search.jsx";
import Playlists from "./pages/Playlists.jsx";
import Artists from "./pages/Artists.jsx";
import Albums from "./pages/Albums.jsx";
import Events from "./pages/Events.jsx";
import Community from "./pages/Community.jsx";
import MusicTheory from "./pages/MusicTheory.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/browse" element={<BrowseMusic />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
        <Route path="/theory" element={<MusicTheory />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
