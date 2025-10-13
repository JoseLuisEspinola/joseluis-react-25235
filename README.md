# 📦 Ecommers Store

**Ecommers Store** es una plataforma de e-commerce desarrollada en React, con autenticación de usuarios, gestión de roles, carrito persistente y rutas protegidas. El proyecto está orientado a arquitectura escalable, lógica profesional y experiencia de usuario sólida.


## Instalación

npm install
npm start


# ESTRUCTURA
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── context/
│   ├── UserContext.jsx
│   ├── CartContext.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Carrito.jsx
│   ├── ProductAdmin.jsx
│   ├── Login.jsx
│   └── NoAutorizado.jsx
├── routes/
│   └── PrivateRoute.jsx
├── app.css
└── App.jsx


Roles y PERMISOS
Los roles se definen en MockAPI y controlan el acceso a rutas y funcionalidades:


Rol	ACCESO
admin	Acceso total: CRUD de productos, carrito, gestión
vendedor	Acceso limitado: puede ver productos, pero no editar
client	Solo puede comprar, ver precios y stock, y su propio carrito (si está logueado)



## Login y autenticación
El login se realiza contra MockAPI (/users)

Se valida email y password exactamente como están en la base

Al loguearse, se guarda el id, role y name en el contexto

Las rutas protegidas usan PrivateRoute y redirigen si el rol no coincide



🛒 Carrito
Persistente por usuario logueado

Sincronizado con MockAPI

Modal responsive con paginación interna

Solo accesible para client, vendedor, admin



## MockApi
Endpoint de usuarios: https://68d5b9bae29051d1c0af67db.mockapi.io/users

Los usuarios deben cargarse manualmente desde el panel de MockAPI

El CRUD de usuarios aún no está implementado



## PENDIENTES
CRUD de usuarios (registro, edición, eliminación)

Gestión de sesiones y expiración

Panel de administración completo

Validación de stock en tiempo real



## CRITERIOS TECNICOS
Arquitectura modular y escalable

Código limpio, sin residuos de debugging

Estilo: cada componente cumple una función clara

Pensado para múltiples usuarios, sesiones y roles

