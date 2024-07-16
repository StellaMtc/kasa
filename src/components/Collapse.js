import React, { useState, useRef, useEffect } from "react";
import "../styles/Collapse.scss";
import collapseArrow from "../assets/details-arrow.png";

function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [contentHeight, setContentHeight] = useState("0px");
    const contentRef = useRef(null);

    useEffect(() => {
        // Function to recalculate content height
        const updateContentHeight = () => {
            if (contentRef.current) {
                setContentHeight(`${contentRef.current.scrollHeight + 40}px`);
            }
        };

        // Initial calculation
        updateContentHeight();

        // Event listener for window resize
        window.addEventListener('resize', updateContentHeight);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', updateContentHeight);
        };
    }, []);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="collapse-container">
            <button className="collapse" onClick={toggleCollapse}>
                <p>{props.title}</p>
                <img src={collapseArrow} alt="Flèche du menu déroulant" className={isCollapsed ? "" : "rotate"} />
            </button>
            <div className={`collapse-content-container ${isCollapsed ? 'collapsed' : ''}`} style={{ maxHeight: isCollapsed ? "0px" : contentHeight }}>
                <div className="collapse-content" ref={contentRef}>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Collapse;