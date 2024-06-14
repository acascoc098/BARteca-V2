# IMPLEMENTACIÓN

Aquí ponemos ejemplos de código:

## BACKEND

Aquí vemos la clase donde tenemos la configuración para el backend:

```java
    @Bean
    SecurityFilterChain filter(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/barteca/**", "/usuario/**", "/bar/**", "/reserva/**", "/login/**").permitAll()
                )
                .exceptionHandling((exception) -> exception
                        .accessDeniedPage("/denegado"))
                .formLogin((formLogin) -> formLogin
                        .permitAll())
                .rememberMe(Customizer.withDefaults())
                .logout((logout) -> logout
                        .invalidateHttpSession(true)
                        .logoutSuccessUrl("/")
                        .permitAll())
                .csrf((csrf) -> csrf.disable())
                .cors(Customizer.withDefaults())
                .build();
    }

    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery("select username, password from usuario where username = ?")
                .authoritiesByUsernameQuery("select username "
                                                + "from usuario "
                                                + "where username = ?");

    }
```

## FRONTEND

En la parte del frontend tenemos una clase para acceder a la api, para obtener los bares o reservas, por ejemplo:

```js
    const URL = 'http://localhost:8080/barteca';

    const getBares = async (state) => {
    const token = localStorage.getItem('token'); // Obtener el token
    if (!token) {
        console.error('No token found, redirecting to login');
        window.location.href = "/";
        return;
    }

    try {
        const req = await axios.get(URL + '/bar', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        withCredentials: true
        });
        console.log(req);
        state(req.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && error.response.status === 401) {
        window.location.href = "/";
        }
    }
    };
```

En esta clase implementamos además *axios*.

Además nos encontramos con un ***AuthProvider***, donde vemos como se implementa el logout:

```js
const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        dispatch({ type: 'LOGOUT' });
    };
```

Para la parte del registro tenemos un componente donde llamamos a la siguiente función enviando los datos necesarios para registrar un usuario:

```js
const registerUser = async (data) => {
  try {
      const response = await axios.post(`${URL}/usuario`, data);
      console.log('Registro exitoso:', response.data);
  } catch (error) {
      console.error('Error registrando usuario:', error);
  }
};
```

Para la parte de un nuevo bar vemos lo siguiente:

```js
const nuevoBar = async (data) => {
  try {
      const response = await axios.post(`${URL}/bar`, data);
      console.log('Registro exitoso:', response.data);
  } catch (error) {
      console.error('Error registrando usuario:', error);
  }
};
```

Y la misma estructura de la función la podemos encontrar para las reservas.

Por último, podemos ver la implementación de Email JS en el componente de la creación de reservas:

```js
const sendEmail = (form) => {
    
        emailjs
          .sendForm('service_xxoz70p', 'template_tcjyzo6', form, {
            publicKey: 'cOCPBrPWdhn-blN8F',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
```

Donde los datos de *.sendForm* los encontramos en la página, menos *form*.

Además, vemos algunos componentes utilizados de la librería de *PrimeReact*, como son los *Speed Dial* para el menú flotante o el *ScrollTop*
que vemos en cada página par al darle nos mueve al principio de esta:

```js
<Route path="/about" element={<div style={{ position: 'relative'}}>
                                          <About/>
                                          <Tooltip target=".speeddial-top-rigth .p-speeddial-action" />
                                      ->  <SpeedDial model={items2} direction="down" style={{ right: 0, bottom: 0 }} className="speeddial-top-rigth rigth-0 top-0" 
                                                     buttonClassName="p-button-help" />
                                      ->  <ScrollTop threshold={100} behavior="smooth" />
                                        </div>} />
```
