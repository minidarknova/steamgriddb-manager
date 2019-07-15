import React from "react";

class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.zoom = this.props.zoom;
    }

    render () {
        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(' + (300 * this.zoom + 20) + 'px, 1fr))',
                gridAutoRows: (160 * this.zoom + 10) + 'px',
                justifyItems: 'center',
                width: '100%',
                maxHeight: 'calc(100vh - 50px)',
                overflowX: 'hidden',
                overflowY: 'auto',
                fontFamily: 'Roboto, sans-serif',
            }}>
                {this.props.children}
            </div>
        )
    }
}

export default Grid;