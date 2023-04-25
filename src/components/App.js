import React, { useState, useEffect, useRef } from 'react'
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import Header from './Header'
import html2canvas from 'html2canvas';

function App() {
  // const iframeRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  // const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  // const [ expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
        </html>`
      );
    }, 250);
  
    return () => clearTimeout(timeout);
  }, [html, css]);
  
  // const handleScreenshot = () => {
  //   html2canvas(iframeRef.current.contentDocument.body).then(canvas => {
  //     const img = canvas.toDataURL();
  //     setScreenshot(img);
  //   });
  // };

  return (
    <>
      <Header />
      {/* <button onClick={handleScreenshot}>Take Screenshot</button> */}
      {/* <div className="pane top-pane" style={{height : `${expanded ? "50vh" : "900vh"}`}}> */}
      <div className="pane top-pane overflow-auto resize-y max-h-[70vh] h-[50vh]">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        {/* <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        /> */}

      </div>
      {/* <div className="pane" style={{height : `${expanded ? "90vh" : "50vh"}`}}> */}
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          // ref={iframeRef}
          width="100%"
          height="100%"
        />
      </div>
      {/* {screenshot && <img src={screenshot} alt="Screenshot" />} */}
    </>
  )
}

export default App;


  // import React, { useState, useEffect, useRef } from 'react'
  // import Editor from './Editor'
  // import useLocalStorage from '../hooks/useLocalStorage'
  // import Header from './Header'
  // import html2canvas from 'html2canvas';

  // function App() {
  //   const iframeRef = useRef(null);
  //   const [screenshot, setScreenshot] = useState(null);
  //   const [html, setHtml] = useLocalStorage('html', '')
  //   const [css, setCss] = useLocalStorage('css', '')
  //   const [srcDoc, setSrcDoc] = useState('')

  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       setSrcDoc(
  //         `<html>
  //           <body>${html}</body>
  //           <style>${css}</style>
  //         </html>`
  //       );
  //     }, 250);
    
  //     return () => clearTimeout(timeout);
  //   }, [html, css]);
    
  //   const handleScreenshot = () => {
  //     const iframe = iframeRef.current;
  //     if (iframe && iframe.contentDocument) {
  //       html2canvas(iframe.contentDocument).then(canvas => {
  //         const img = canvas.toDataURL();
  //         setScreenshot(img);
    
  //         const link = document.createElement('a');
  //         link.download = 'screenshot.png';
  //         link.href = img;
  //         link.click();
  //       });
  //     }
  //   };    
    

  //   // const handleIframeLoad = () => {
  //   //   handleScreenshot();
  //   // };

  //   return (
  //     <>
  //       <Header />
  //       <button onClick={handleScreenshot}>Take Screenshot</button>
  //       <div className="pane top-pane overflow-auto resize-y max-h-[70vh] h-[50vh]">
  //         <Editor
  //           language="xml"
  //           displayName="HTML"
  //           value={html}
  //           onChange={setHtml}
  //         />
  //         <Editor
  //           language="css"
  //           displayName="CSS"
  //           value={css}
  //           onChange={setCss}
  //         />
  //       </div>
  //       <div className="pane">
  //         <iframe
  //           srcDoc={srcDoc}
  //           title="output"
  //           sandbox="allow-scripts"
  //           frameBorder="0"
  //           ref={iframeRef}
  //           width="100%"
  //           height="100%"
  //           // onLoad={handleIframeLoad}
  //         />
  //       </div>
  //       {screenshot && <img src={screenshot} alt="Screenshot" />}
  //       {/* <a href={screenshot} download="screenshot.png">Download Screenshot</a> */}
  //     </>
  //   )
  // }

  // export default App;
