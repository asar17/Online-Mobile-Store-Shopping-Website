import React from 'react'
class Default extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 text-title text-uppercase mx-auto text-center pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h3>page not found</h3>
                        <h3>
                            the request url
                            <span className="text-danger">{window.location.pathname}</span>
                            was not found

                        </h3>
                        

                    </div>
                </div>
            </div>

        )
    }
}
  
export default Default;