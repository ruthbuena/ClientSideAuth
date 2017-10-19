

export function signinUser ({ email, password }) {
//return function because this is how we access the dispatch (makes sure action gets sent to reducers)
  return function(dispatch) {
    // dispatch({ type: ... })-can essentially pass any logic in here


    //Submit email/pw to the server

    //If request is good then update state to indicate user has been auth'd
    //Save JWT token so that users can make follow up requests
    //Redirect to the route '/feature' - this is for users that are now logged in

    //If request is bad then show an error to users

  }

}
