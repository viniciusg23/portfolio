import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";



function CodeBlock(props: any) {

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    console.log(props)

    const {children, className} = props;

    return ( 
        <code className={className}>
            {children}
        </code>

        // <CopyBlock
        //     text={children}
        //     language={className}
        //     theme={dracula}
        //     codeBlock
        //     wrapLongLines
        // />
    );
}

export default CodeBlock;