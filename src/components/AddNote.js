import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [ noteText, setNoteText ] = useState('');
    const [ textareaValue, setTextAreaValue ] = useState('');
    
    const characterLimit = 200;
    const remainingCharacters = characterLimit - noteText.length;

    const noteChangeHandler = (e) => {
        const newNote = e.target.value;
        //console.log(newNote);
        if(characterLimit - newNote.length >= 0) {
            setNoteText(newNote);
            setTextAreaValue(newNote);
        }
    }

    const noteClickHandler = () => {
        //console.log(noteText);
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setTextAreaValue('');
        }
    }

    return(
        <div className="note new">
            <textarea 
                rows='8'
                cols='10'
                maxLength="200"
                placeholder='Type to add a note..'
                value={textareaValue}
                onChange={noteChangeHandler}
            ></textarea>
            <div className="note-footer">
                <small>{ remainingCharacters } Remaining</small>
                <button onClick={noteClickHandler} className="save">Save</button>
            </div>
        </div>
    );
}

export default AddNote;