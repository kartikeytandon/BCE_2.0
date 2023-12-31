import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import Editor from '../Editor'
import Header from '../Header'
import './EditorComp.css'
import { useLocation } from 'react-router'

const EditorComp = () => {
  const location = useLocation();
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  // const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
    useEffect(() => {
        const timeout = setTimeout(() => {
          setSrcDoc(
            `<html><body>${html}</body><style>${css}</style></html>`
          );
        }, 250);
      
        return () => clearTimeout(timeout);
      }, [html, css]);

      const [pageReloaded, setPageReloaded] = useState(false);

      // useEffect(() => {
      //   if (location.pathname === '/blockverse' && !pageReloaded) {
      //     setPageReloaded(true);
      //     window.location.reload();
      //   }
      // }, [location.pathname, pageReloaded]);

      useEffect(() => {
        localStorage.setItem('selectedSchema', 'true')
      }, [location])

      // console.log(html);
      // console.log(css);
  return (
    <>
    <Header html={html} css={css} />
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
          className='bg-white'
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