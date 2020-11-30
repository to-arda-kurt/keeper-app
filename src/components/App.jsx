import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const createNote = (noteItem) => (
  <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
);

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
