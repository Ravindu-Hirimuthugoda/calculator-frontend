import React, { Fragment, useEffect } from "react";

import MainHeader from "../component/MainHeader";


const Welcome = ()=>{
    return(
      <Fragment>
        <header>
          <MainHeader/>
        </header>
        <div>
            <p>Welcome to the site!</p>
        </div>
      </Fragment>
    )
}

export default Welcome;