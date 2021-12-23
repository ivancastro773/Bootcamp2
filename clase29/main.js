const initialState = {
  usuarios: [{ correo, nombre, pais }],
  productos: [],
  precioTotal: 0,
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
      return crearProducto(state, action);
    case "ELIMINAR_PRODUCTO":
      return eliminarProducto(state, action);
    default:
      return state;
  }
}

//creo el store
let store = Redux.createStore(reducer);

function crearProducto(state, action) {
  let sum = Number(state.precioTotal);
  let { nombre, precio, id } = action.payload;
  let pre = Number(precio);
  return {
    ...state,
    productos: [...state.productos, { nombre, precio, id }],
    precioTotal: sum + pre,
  };
}

function eliminarProducto(state, action) {
  console.log("ID:" + action.payload.id);
  let val = Number(state.precioTotal);
  let pre = Number(action.payload.precio);
  return {
    ...state,
    productos: [
      ...state.productos.filter((element) => element.id != action.payload.id),
    ],
    precioTotal: val - pre,
  };
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
    store.getState().usuarios[0]
  );
}
const plist = [
  {
    nombre: "Televisor",
    precio: 200,
    id: 30,
  },
  {
    nombre: "pc",
    precio: 200,
    id: 30,
  },
  {
    nombre: "Televisor",
    precio: 200,
    id: 30,
  },
];


  console.log(NombreProducto,nombre,id);
/*   store.dispatch(accionCrearProducto(NombreProducto,precio,id)); */
var listp = plist.map((item, i) => {
  return `<div key=${i}>${JSON.stringify(item)}</div>
   <button onClick="hola(${item.nombre},${item.precio},${item.id})">Agregar</button>`;
});
function productos() {
  document.getElementById("productos").innerHTML = JSON.stringify(
    store.getState().productos
  );
}
document.getElementById("list").innerHTML = listp;
function total() {
  document.getElementById("total").innerHTML = store.getState().precioTotal;
}

//se registra el elemento/component/dom de escucha
store.subscribe(component);
store.subscribe(productos);
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

/* document.getElementById("add").addEventListener("click", () => {
  store.dispatch(accionCrearProducto());
}); */
document.getElementById("eliminarProducto").addEventListener("click", () => {
  store.dispatch(accionEliminarProducto());
});

let elCorreo = document.getElementById("correo");
let elNombre = document.getElementById("nombre");
let elPais = document.getElementById("pais");
let NombreProducto = document.getElementById("nombreProducto");
let Precio = document.getElementById("precio");
let idProducto = document.getElementById("id");
let cantidadProducto = document.getElementById("cantidad");
/* let total = document.getElementById("total"); */

//acciones
function accionCrearProducto(NombreProducto,precio,cantidadProducto,id) {
  return {
    type: "CREAR_PRODUCTO",
    payload: {
      nombre: NombreProducto,
      precio: precio,
      id: id,
    },
  };
}
function accionEliminarProducto() {
  return {
    type: "ELIMINAR_PRODUCTO",
    payload: {
      precio: cantidadProducto.value * precio.value,
      id: id.value,
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
