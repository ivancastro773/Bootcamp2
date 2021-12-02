var initialState = {
    usuarios:[{
        correo: "foo@foo.com",
        nombre: "foo",
        edad: "33"
      },
      {
        correo: "qux@qux.com",
        nombre: "qux",
        edad: "22"
      },
    ]
  };
  
  
  function crearPerfil(state, action){
      let { nombre, correo, edad } = action.payload;
        return {
            ...state,
            usuarios:[...state.usuarios, {correo, nombre, edad}]
        }
  }
  
  function editarPerfil(state, action){
    return {
        ...state,
        usuarios: [...state.usuarios.map(element =>{
            if(element.correo === action.payload.correo){
                element.nombre = action.payload.nombre
                element.edad = action.payload.edad;
            }
            return element;
        })]
  }}

  function editarBorrar(state, action){
    return {
        ...state,
        usuarios:[...state.usuarios.filter(element => element.correo !== action.payload.correo)]
  }}

  //defino el funcionamiento del store
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "CREAR_PERFIL":
        return crearPerfil(state,action);
      case "MODIFICAR_PERFIL_POR_CORREO":
        return editarPerfil(state, action);
  
      case "ELIMINAR_CORREO":
        return editarBorrar(state, action);
      default:
        return state;
    }
  }
  
  //creo el store
  let store = Redux.createStore(reducer);
  /*
   store.suscribe()
   store.getState()
   store.dispatch()
   */
  
  function component() {
    document.getElementById("respuesta").innerHTML = JSON.stringify(store.getState());
  }
  
  //se registra el elemento/component/dom de escucha
  store.subscribe(component);
  
  //se emite la accion
  document.getElementById("crear").addEventListener("click", () => {
    store.dispatch(accionCrearPerfil());
  });
  
  document.getElementById("editar").addEventListener("click", () => {
    store.dispatch(accionEditarPerfil());
  });

  document.getElementById("borrar").addEventListener("click", () => {
    store.dispatch(accionBorrarPerfil());
  });
  
  let elCorreo = document.getElementById("correo");
  let elNombre = document.getElementById("nombre");
  let elEdad = document.getElementById("edad");
  
  
  //acciones
  function accionCrearPerfil() {
    return {
      type: "CREAR_PERFIL",
      payload:{
         correo: elCorreo.value, 
         nombre: elNombre.value,
         edad: elEdad.value
      }
    };
  }

  function accionEditarPerfil() {
    return {
      type: "MODIFICAR_PERFIL_POR_CORREO",
      payload:{
        correo: elCorreo.value, 
        nombre: elNombre.value,
        edad: elEdad.value
      }
    };
  }

  function accionBorrarPerfil() {
    return {
      type: "ELIMINAR_CORREO",
      payload:{
        correo: elCorreo.value, 
        nombre: elNombre.value,
      }
    };
  }