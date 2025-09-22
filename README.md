# 🔐 Login App Firabase

Aplicación web desarrollada en **Angular 16** que implementa un sistema de autenticación con **Firebase Authentication** usando **Identity Toolkit API**.

Permite a los usuarios **registrarse, iniciar sesión y cerrar sesión**, manteniendo la sesión activa mediante almacenamiento en **localStorage**.

Este proyecto se desarrolló con el objetivo de reforzar conceptos clave como:

- Autenticación con **Firebase Identity Toolkit**
- Manejo de **HTTPClient y Observables**
- Uso de **Guards para rutas protegidas**
- Persistencia de sesión con **localStorage**
- Programación reactiva con **RxJS**
- Estilización con plantillas personalizadas y librerías CSS

## 📸 Demo

🔗 **Visita la demo en línea:** [Login App Firebase en Netlify](https://astounding-kitsune-2f7d13.netlify.app)

- **Inicio – Crear Usuario**  
  ![Login App Firebase Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-Firebase/refs/heads/main/media/Screenshot_1.png)

- **Registro de Usuario**  
  _(Incluye opciones de recordar usuario e ingreso si ya existe)_  
  ![Login App Firebase Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-Firebase/refs/heads/main/media/Screenshot_2.png)

- **SweetAlert2 – Pantalla de Cargando / Loading**
  ![Login App Firebase Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-Firebase/refs/heads/main/media/Screenshot_3.png)

- **Acceso a Página Autorizada**
  ![Login App Firebase Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-Firebase/refs/heads/main/media/Screenshot_4.png)

- **Firebase Authentication**
  ![Login App Firebase Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-Firebase/refs/heads/main/media/Screenshot_5.png)

- **Inicio de Sesion** _LocalStorage_
  ![Login App Firebase Screenshot](https://raw.githubusercontent.com/david99cartagena/Auth-Firebase/refs/heads/main/media/Screenshot_6.png)

## 🚀 Tecnologías Utilizadas

- **Angular 16**
- **RxJS**
- **TypeScript**
- **SweetAlert2** (alertas interactivas)
- **Bootstrap / CSS personalizado**
- **Firebase Identity Toolkit API**
- **HTML5 / CSS3**

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── guards/
│   │   └── auth.guard.ts        # Protege rutas si no hay token válido
│   ├── models/
│   │   ├── auth-response.model.ts # Interfaz para la respuesta de login/signup
│   │   └── usuario.model.ts       # Modelo de usuario (email, password)
│   ├── pages/
│   │   ├── home/                 # Vista protegida para usuarios logueados
│   │   ├── login/                # Formulario de inicio de sesión
│   │   └── registro/             # Formulario de creación de usuario
│   ├── services/
│   │   └── auth.service.ts       # Servicio para login, logout y registro
│   ├── app-routing.module.ts     # Configuración de rutas y guards
│   └── app.module.ts             # Módulo raíz de la aplicación
├── assets/                       # Recursos (CSS, imágenes, fuentes, vendor)
└── index.html                    # Archivo principal
```

## 🔑 Funcionalidades

✅ Registro de nuevos usuarios
✅ Inicio de sesión con email y contraseña
✅ Cierre de sesión manual
✅ Persistencia de sesión con **localStorage**
✅ Expiración automática del token
✅ Protección de rutas con **AuthGuard**
✅ Notificaciones amigables con **SweetAlert2**

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/Auth-Firebase.git
```

```bash
cd Auth-Firebase
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm start
```

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200/`

## ⚙️ Configuración de API

Este proyecto utiliza **Firebase Identity Toolkit.**
Debes reemplazar tu **API Key** en el archivo `auth.service.ts.`

```ts
private apikey = "TU_API_KEY_AQUI";
```

1. Ingresa a [Firebase Console](https://console.firebase.google.com/)
2. Crea un proyecto y habilita **Authentication → Email/Password**
3. Copia tu **API Key** de `Project Settings → General → Web API Key`
4. Sustituye el valor en el servicio de autenticación

Basado en el curso de **Fernando Herrera** – [Angular: De Cero a Experto (Edición 2018)](https://www.udemy.com/course/angular-2-fernando-herrera/)
