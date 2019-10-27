import React  from 'react';

const RightSidebar = (props) => {

    return (
        <React.Fragment>
            <div className="right-sidebar d-none d-xl-block">
                <div className="slimscroll-menu">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}

export default RightSidebar;