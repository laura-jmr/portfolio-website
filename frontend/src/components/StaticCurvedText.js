import React from 'react';
import ReactCurvedText from 'react-curved-text';

export default function StaticCurvedText( {text, fontSize} ) {
    return (
        <ReactCurvedText
            width={600}
            height={500}
            cx={250}
            cy={260}
            rx={250}
            ry={220}
            startOffset={360}
            reversed={true}
            text={text}
            textProps={{ style: { fontSize: 32 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
        />
    )
}
