import Preview from './markdown.jsx'
export default function Editor (){
    return(
        <div id="container">
        <div className="editorContainer">
            <h3 className="titleEditor">Editor</h3>
            <textarea id="editor"></textarea>
        </div>
        <Preview />
        </div>
    )
}