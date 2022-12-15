const Note = ({ text,date, id, handleDeleteNote }) => {
    const deleteNoteclickHandler = () => {
        handleDeleteNote(id);
    }

    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <i 
                    className="fas fa-trash delete-icon" 
                    aria-hidden="true"
                    onClick={deleteNoteclickHandler}
                ></i>
            </div>
        </div>
    );
}

export default Note;