const axios = require('axios');

axios.get('https://ivanapibootcamp.herokuapp.com/users')
  .then((response)=> {
    console.log(response.data);
  })
  .catch((error)=> {
    console.log(error);
  });
 ///// CREAR////

/*   axios({
    method: 'post',
    url: 'https://ivanapibootcamp.herokuapp.com/user/create',
    data: {
      name: 'Fred',
      email: 'Flintstone',
      alias: 'chino22',
      password: '123'
    }
  }).then(function (response) {
    console.log(response.data);
  }); */

  ///// EDITAR////

/*     axios({
    method: 'put',
    url: 'https://ivanapibootcamp.herokuapp.com/user/edit/lisa/ivan'
  }).then(function (response) {
    console.log(response.data);
  }); */

  ////ELIMINAR////
/*     axios({
    method: 'delete',
    url: 'https://ivanapibootcamp.herokuapp.com/user/delete/123'
  }).then(function (response) {
    console.log(response.data);
  });
 */