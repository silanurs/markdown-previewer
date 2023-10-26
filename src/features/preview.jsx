import { useSelector } from 'react-redux';
import { marked } from 'marked';

 const Preview =()=> {
    const text = useSelector((state) => state.text.value);
return (
    <div className="preview">
        <h3 className="titlePreview">Previewer</h3>
        <div id="preview" dangerouslySetInnerHTML={{__html:marked(text)}}></div>

    </div>
)
}
export default Preview
