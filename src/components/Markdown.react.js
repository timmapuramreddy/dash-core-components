import React, {PropTypes} from 'react';
import Markdown from 'react-markdown';

/**
 * A component that renders Markdown text as specified by the
 * CommonMark spec.
 */
function DashMarkdown (props) {
    return (
        <Markdown
            source={props.children}
            escapeHtml={true}
            {...props}
        />
    )
}

DashMarkdown.propTypes = {
    id: PropTypes.string,
    /**
     * Class name of the container element
     */
    className: PropTypes.string,

    /**
     * An object containing custom element props to put on the container
     * element such as id or style
     */
    containerProps: PropTypes.object,

    /**
     * A markdown string that adhreres to the CommonMark spec
     */
    children: PropTypes.string
}

export default DashMarkdown;
