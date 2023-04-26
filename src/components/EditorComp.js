import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Editor from './Editor'

const EditorComp = () => {
    const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  // const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
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
  return (
    <>
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
      </>
  )
}

export default EditorComp