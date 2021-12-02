var initialState = {
    correo: "",
    nombre: "",
    edad: "",
  };
  
  //defino el funcionamiento del store
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "CREAR_PERFIL":
        let { nombre, correo, edad } = action.payload;
        return { ...state, correo, nombre, edad };
      case "MODIFICAR_NOMBRE":
        return { ...state, nombre: action.payload.nombre };
  
      case "ELIMINAR_EDAD":
        return { correo: state.correo, nombre: state.nombre };
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
    document.getElementById("respuesta").innerHTML = JSON.stringify(
      store.getState()
    );
  }
  
  //se registra el elemento/component/dom de escucha
  store.subscribe(component);
  
  //se emite la accion
  document.getElementById("crear").addEventListener("click", () => {
    store.dispatch(accionCrearPerfil());
  });
  
  document.getElementById("modificar_nombre").addEventListener("click", () => {
    store.dispatch(accionModificarNombre());
  });
  
  document.getElementById("eliminar_edad").addEventListener("click", () => {
    store.dispatch(accionEliminarEdad());
  });
  
  let elCorreo = document.getElementById("correo");
  let elNombre = document.getElementById("nombre");
  let elEdad = document.getElementById("edad");
  
  //acciones
  function accionCrearPerfil() {
    return {
      type: "CREAR_PERFIL",
      payload: {
        correo: elCorreo.value,
        nombre: elNombre.value,
        edad: elEdad.value,
      },
    };
  }
  
  function accionModificarNombre() {
    return {
      type: "MODIFICAR_NOMBRE",
      payload: {
        nombre: elNombre.value,
      },
    };
  }
  
  function accionEliminarEdad() {
    return {
      type: "ELIMINAR_EDAD",
    };
  }
  