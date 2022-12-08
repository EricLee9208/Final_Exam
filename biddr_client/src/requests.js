const baseURL = "http://localhost:3000/api/v1"

export const Auction = {
    index(){
        return fetch(`${baseURL}/auctions`)
        .then(response => {
            console.log(response);
            return response.json()
        })
    },
    create(params){
        return fetch(`${baseURL}/auctions`, {
            method: 'POST',
            credentials: 'include', //need this for cookies
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res=> res.json())
    },
    show(id){
        return fetch(`${baseURL}/auctions/${id}`).then(res=> res.json())
    }
    
}

export const Session = {
    create(params) {
      return fetch(`${baseURL}/session`, {
        method: 'POST',
        credentials: 'include', // need for cookies to be sent cross origin
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => res.json())
    },
    destroy(){
        return fetch(`${baseURL}/session`, {
            method: 'DELETE',
            credentials: 'include' // need for cookies to be sent cross origin
          }).then(res => res.json())
    }
  }

  export const User = {
    current() {
      return fetch(`${baseURL}/users/current`, {
        credentials: "include", // need for cookies to be allowed to be sent cross-origin
      }).then((res) => res.json());
    },
    create(params) {
        return fetch(`${baseURL}/users`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user: params })
        }).then(res => res.json())
      }
  };

  export const Bid = {
    create(id,params) {
        return fetch(`${baseURL}/auctions/${id}/bids`, {
          method: 'POST',
          credentials: 'include', // need for cookies to be sent cross origin
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json())
      },
  }