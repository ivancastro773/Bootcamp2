const initialState = {
  usuarios: [{}],
  productos: [{}],
  precioTotal:0
};

//defino el funcionamiento del store
function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREAR_PERFIL":
      return crearPerfil(state, action);
    case "MODIFICAR_PERFIL_POR_CORREO":
      return editarPerfil(state, action);

    case "ELIMINAR_CORREO":
      return editarBorrar(state, action);
    case "CREAR_PRODUCTO":
        return crearProducto(state,action);
    case "ELIMINAR_PRODUCTO":
      return eliminarProducto(state,action);
    default:
      return state;
  }
}

//creo el store
let store = Redux.createStore(reducer);

function crearProducto(state,action){
  let sum = Number(state.precioTotal);
  let { nombre, precio, id } = action.payload;
  return {
    ...state,
    productos: [...state.productos,{ nombre, precio, id }],
    precioTotal:(sum+Number(precio))
  };
  
}

function eliminarProducto(state,action){
  console.log("ID:"+action.payload.id);
  let val = Number(state.precioTotal);
  return{
    ...state,
    productos:[...state.productos.filter((element)=>element.id!=action.payload.id)],
    precioTotal:(val-action.payload.precio)
  }
}



function crearPerfil(state, action) {
  let { nombre, correo, pais } = action.payload;
  return {
    ...state,
    usuarios: [{ correo, nombre, pais }],
  };
}

function editarPerfil(state, action) {
  return {
    ...state,
    usuarios: [
      ...state.usuarios.map((element) => {
        if (element.correo === action.payload.correo) {
          element.nombre = action.payload.nombre;
          element.edad = action.payload.edad;
        }
        return element;
      }),
    ],
  };
}

function editarBorrar(state, action) {
  return {
    ...state,
    usuarios: [
      ...state.usuarios.filter(
        (element) => element.correo !== action.payload.correo
      ),
    ],
  };
}

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
function total() {
  document.getElementById("total").innerHTML = store.getState().precioTotal;
}

//se registra el elemento/component/dom de escucha
store.subscribe(component);
store.subscribe(total);

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

document.getElementById("crearProducto").addEventListener("click", () => {
  store.dispatch(accionCrearProducto());
});
document.getElementById("eliminarProducto").addEventListener("click", () => {
  store.dispatch(accionEliminarProducto());
});

let elCorreo = document.getElementById("correo");
let elNombre = document.getElementById("nombre");
let elPais = document.getElementById("pais");
let NombreProducto = document.getElementById("nombreProducto");
let Precio = document.getElementById("precio");
let idProducto = document.getElementById("id");
/* let total = document.getElementById("total"); */

//acciones
function accionCrearProducto() {
  return {
    type: "CREAR_PRODUCTO",
    payload: {
      nombre: NombreProducto.value,
      precio: precio.value,
      id: id.value
    },
  };
}
function accionEliminarProducto() {
  return {
    type: "ELIMINAR_PRODUCTO",
    payload: {
      precio: precio.value,
      id: id.value
    },
  };
}

function accionCrearPerfil() {
  return {
    type: "CREAR_PERFIL",
    payload: {
      correo: elCorreo.value,
      nombre: elNombre.value,
      pais: elPais.value,
    },
  };
}

function accionEditarPerfil() {
  return {
    type: "MODIFICAR_PERFIL_POR_CORREO",
    payload: {
      correo: elCorreo.value,
      nombre: elNombre.value,
      pais: elPais.value,
    },
  };
}

function accionBorrarPerfil() {
  return {
    type: "ELIMINAR_CORREO",
    payload: {
      correo: elCorreo.value,
      nombre: elNombre.value,
    },
  };
}

