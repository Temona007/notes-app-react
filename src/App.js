import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [ notes, setNotes ] = useState([
    {
      id: nanoid(),
      text: "Create a Weather App in react.js",
      date: "12/10/2022",
    },
    {
      id: nanoid(),
      text: "Run a marathon in Kyiv",
      date: "13/11/2022",
    },
    {
      id: nanoid(),
      text: "Visit Alex birthday + buy a present",
      date: "14/12/2022",
    },

  ]);

  const [ searchText, setSearchText ] = useState('');

  const [ darkMode, setDarkMode ] = useState(false);

  useEffect(() => {
    const saveNotes = JSON.parse(
      localStorage.getItem('react-app-notes-data')
    );

    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-app-notes-data',
      JSON.stringify(notes)
    )
  }, [notes]);

  const addNote = (text) => {
    // my new note text:
    console.log(text);
  
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${ darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToodgeDarkMode={setDarkMode} darkMode={darkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
