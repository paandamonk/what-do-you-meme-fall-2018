const api_root = "http://localhost:80/game";

export function GetState(){
    return fetch(api_root + "/")
            .then(function(response) {
                return response.json();
            });
}
export function FlipPicture(){
    return postData(api_root + "/picture", {})
            
}





  function postData(url = ``, data = null) {
    // Default options are marked with *
      return fetch(url, {
          method:  "POST", // *GET, POST, PUT, DELETE, etc.
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response =>{
        return response.json()

      }
        ); // parses response to JSON
  }