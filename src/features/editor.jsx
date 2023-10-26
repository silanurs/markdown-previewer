import Preview from './preview.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { updateText } from './markdownSlicer.jsx';
export default function Editor (){
    const dispatch = useDispatch();
    const text = useSelector((state) => state.text.value);
    const handleInputChange = (e) => {
        dispatch(updateText(e.target.value))
    }
    return(
        <div id="container">
        <div className="editorContainer">
            <h3 className="titleEditor">Editor</h3>
            <textarea id="editor" onChange={handleInputChange} value={text}></textarea>
        </div>
        <Preview />
        </div>
    )
}