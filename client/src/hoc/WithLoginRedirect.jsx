import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isLogged: state.profileManager.isLogged
});

export const withLoginRedirect = (Component) => {
    const RedirectComponent = (props) => {
        
        return (
            <>
            {props.isLogged
                ? <Component {...props} />
                : <Redirect to='/login' />}
            </>
        )
    }

    let ConnectedLoginRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedLoginRedirectComponent;
}