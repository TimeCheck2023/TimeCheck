import React, { useState, useRef, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { NavbarMobile } from "../../components/Layout/NavbarMobile/NavbarMobile";
import { FormUser } from "../../components/Layout/FormUser/FormUser";
import { FormOrg } from "../../components/Layout/FormOrg/FormOrg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SingUp = () => {
  const [valueSelect, setValueSelect] = useState("personal");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL;
  // console.log(url);

  // Estado para controlar los input
  const [values_us, setValues_us] = useState({
    documentType: "Cédula de ciudadania",
    documentNumber: "",
    fullName: "",
    emailAddress: "",
    password: "",
  });

  const [values_org, setValues_org] = useState({
    fullName: "",
    address: "",
    numero_telefono: 0,
    emailAddress: "",
    password: "",
  });

  const selectRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("values_us", JSON.stringify(1));
  }, [values_us]);

  useEffect(() => {
    localStorage.setItem("values_org", JSON.stringify(values_org));
  }, [values_org]);

  const [errors, setErrors] = useState({
    fullName: "",
    documentNumber: "",
    emailAddress: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errorsOrg, setErrorsOrg] = useState({
    fullName: "",
    address: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues_us({ ...values_us, [name]: value });
  };

  const handleInputChangeOrg = (e) => {
    const { name, value } = e.target;
    setValues_org({ ...values_org, [name]: value });
  };

  //Función para validar los campos del formulario de org
  function validateFormOrg(values) {
    const errorsO = {};

    if (!values.fullName) {
      errorsO.fullName = "Debe de ingresar el nombre de la organización";
    }

    if (!values.address) {
      errorsO.address = "Debe de ingresar una dirección de residencia";
    }

    if (!values.emailAddress) {
      errorsO.emailAddress = "Debe de ingresar un correo electrónico!";
    } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
      errorsO.emailAddress = "El correo electrónico no es valido!";
    }

    if (!values.phone) {
      errorsO.phone = "Debe ingresar su número de teléfono";
    } else if (!/^[0-9]+$/.test(values.phone)) {
      errorsO.phone = "El número de teléfono debe contener solo números";
    }

    if (!values.password) {
      errorsO.password = "Debe ingresar una contraseña";
    } else if (values.password.length < 6) {
      errorsO.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (!values.confirmPassword) {
      errorsO.confirmPassword = "Debe confirmar la contraseña";
    } else if (values.password !== values.confirmPassword) {
      errorsO.confirmPassword = "Las contraseñas no coinciden";
    }

    return errorsO;
  }

  //Función para validar los campos del formulario de usuario
  function validateFormUser(values) {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Debe ingresar su nombre completo";
    }

    if (!values.documentNumber) {
      errors.documentNumber = "Debe ingresar un número de documento!";
    } else if (!/^[0-9]+$/.test(values.documentNumber)) {
      errors.documentNumber = "Debe de ingresar un número de documento valido!";
    }

    if (!values.emailAddress) {
      errors.emailAddress = "Debe ingresar su correo electrónico";
    } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
      errors.emailAddress = "El correo electrónico no es válido";
    }

    if (!values.phone) {
      errors.phone = "Debe ingresar su número de teléfono";
    } else if (!/^[0-9]+$/.test(values.phone)) {
      errors.phone = "El número de teléfono debe contener solo números";
    }

    if (!values.password) {
      errors.password = "Debe ingresar una contraseña";
    } else if (values.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Debe confirmar la contraseña";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    return errors;
  }

  //Función que se ejecuta al enviar el formulario usuario/organización
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Mostrar loader al enviar el formulario

    // Verificar si el checkbox está seleccionado
    if (!acceptedTerms) {
      toast.warn(
        "Debes aceptar los términos y condiciones y la política de seguridad",
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      setLoading(false);
      return;
    }

    // Validaciones
    if (valueSelect == "personal") {
      const errorsUser = validateFormUser(values_us);
      setErrors(errorsUser);

      if (Object.keys(errorsUser).length > 0) {
        console.log(errorsUser);
      } else {
        console.log(values_us);

        // Muestra una notificación mientras se carga el formulario
        toast.info("Cargando...", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // Aquí puedes enviar el formulario a través de una solicitud HTTP o hacer cualquier otra cosa que necesites hacer con los datos del formulario
        fetch("https://timecheck.up.railway.app/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documentNumber: values_us.documentNumber,
            documentType: values_us.documentType,
            fullName: values_us.fullName,
            emailAddress: values_us.emailAddress,
            password: values_us.password,
            device: "pc",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.error) {
              toast.error(`Error: ${data.error}`, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            } else {
              toast.success(
                "¡Bienvenido! tu cuenta ha sido creada con éxito.",
                {
                  position: "top-center",
                  theme: "dark",
                  hideProgressBar: false,
                  progress: false,
                  onClose: () => {
                    setTimeout(() => {
                      navigate("/SignIn");
                    }, 5000); // Redireccionar después de 2 segundos (2000 milisegundos)
                  },
                }
              );
              localStorage.removeItem("values_us");
              localStorage.removeItem("values_org");
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      }
    } else if (valueSelect == "organizacion") {
      const errorOrg = validateFormOrg(values_org);
      setErrorsOrg(errorOrg);
      if (Object.keys(errorOrg).length > 0) {
        console.log(errorOrg);
      } else {
        // console.log(values_org);
        // Aquí puedes enviar el formulario a través de una solicitud HTTP o hacer cualquier otra cosa que necesites hacer con los datos del formulario
        // Muestra una notificación mientras se carga el formulario
        toast.info("Cargando...", {
          position: "top-right",
          autoClose: 1300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // Aquí puedes enviar el formulario a través de una solicitud HTTP o hacer cualquier otra cosa que necesites hacer con los datos del formulario
        fetch("https://timecheck.up.railway.app/Org/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            organization_name: values_org.fullName,
            address_organization: values_org.address,
            email_organization: values_org.emailAddress,
            organization_password: values_org.password,
            numero_telefono: values_org.numero_telefono,
            device: "pc",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.error) {
              toast.error(`Error: ${data.error}`, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            } else {
              toast.success(
                "¡Bienvenido! tu organización ha sido creada con éxito.",
                {
                  position: "top-center",
                  theme: "dark",
                  hideProgressBar: false,
                  progress: false,
                  onClose: () => {
                    setTimeout(() => {
                      navigate("/SignIn");
                    }, 5000); // Redireccionar después de 2 segundos (2000 milisegundos)
                  },
                }
              );
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      }
    } else {
      console.log("error");
    }
  };

  const handleSelectChange = (event) => {
    const selectedValue = selectRef.current.value;
    setValueSelect(selectedValue);
  };

  return (
    <div className="w-screen h-screen flex flex-row">
      <NavbarMobile />
      <div className="hidden lg:block w-1/2 h-full bg-violet-700">
        <div>
          <div className="relative left-24 top-20">
            <h1 className="text-white font-bold text-6xl leading-66 tracking-wider font-sans">
              ¡Registrate en <br></br>nuestra plataforma!
            </h1>
          </div>
          <div className="relative left-24 top-28 w-3/4">
            <p className="text-white font-sans text-justify text-xl">
              Si eres un usuario que va a asistir a eventos, podrás ver todos
              los eventos a los que estás registrado y confirmar tu asistencia.
              Si eres un usuario que va a crear eventos, podrás agregar nuevos
              eventos, gestionar la información del evento, enviar invitaciones
              y hacer un seguimiento de la asistencia de tus invitados.
            </p>
          </div>
        </div>
        <div className="relative left-24 top-40">
          <img
            src="/image1.webp"
            alt="img"
            className="w-4/5 lg:h-80 object-cover xl:h-96"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full ">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-bold text-center lg:text-left text-5xl lg:text-4xl xl:text-6xl tracking-tight font-sans text-base-02 mt-8 lg:mt-2">
              ¡Crear una cuenta {valueSelect}!
            </h2>
            <p className="font-normal text-lg leading-1.67 font-sans text-gray-500 relative mt-5 lg:mt-1 px-5 lg:px-0">
              ¡Únete a nuestra comunidad de organizadores y asistentes de
              eventos hoy mismo!
            </p>
          </div>
          <div className="px-10 lg:px-0">
            <div className="flex flex-col my-10 mx-0 lg:my-3 lg:mx-20 2xl:my-5">
              <label htmlFor="type_user" className="font-bold">
                Tipo de cuenta <strong className="text-red-600">*</strong>
              </label>

              <select
                ref={selectRef}
                onChange={handleSelectChange}
                id="type_user"
                name="type_user"
                className="bg-gray-100 shadow-md rounded-md lg:w-2/5 h-11 px-2 border border-gray-400 text-gray-500">
                <option value="personal">Personal</option>
                <option value="organizacion">Organización</option>
              </select>
            </div>
            {valueSelect == "personal" ? (
              <FormUser handleInputChange={handleInputChange} errors={errors} />
            ) : (
              <FormOrg
                handleInputChange={handleInputChangeOrg}
                errors={errorsOrg}
              />
            )}
            <div className="footer mt-10 lg:mt-0 xl:mt-0 2xl:mt-3 lg:my-20 mx-20 flex flex-col justify-center items-center ">
              <div className="flex items-center gap-2 justify-center my-3">
                <input
                  type="checkbox"
                  name="tp"
                  id="tp"
                  checked={acceptedTerms}
                  onChange={(event) => setAcceptedTerms(event.target.checked)}
                />
                <label htmlFor="tp">
                  He leido y acepto los{" "}
                  <Link
                    to={"/Terminos y Condiciones"}
                    className="font-bold text-purple-800 hover:underline">
                    Términos y Condiciones
                  </Link>{" "}
                  y la
                  <Link
                    to={"/Politicas de Privacidad"}
                    className="ml-1 font-bold text-purple-800 hover:underline">
                    Politíca de privacidad
                  </Link>
                </label>
              </div>
              <div className="flex flex-col md:flex-row gap-5 lg:gap-10 xl:gap-40">
                <button className=" p-4 w-72 md:w-40 lg:w-72 h-55  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold">
                  Registrarse
                </button>
                {/* <button className=" p-4 w-72 lg:w-72 h-55  bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex  gap-5 lg:gap-4">
                  <p className="text-2xl pl-7">
                    <FcGoogle />
                  </p>
                  <p>Registrate con Google</p>
                </button> */}
              </div>
              <div className="mt-8 xl:mt-16 2xl:mt-5 gap-5 flex justify-center items-center flex-col ">
                <div className="flex flex-row">
                  {" "}
                  <p className="font-sans font-normal text-xl leading-6 flex items-center text-gray-500">
                    ¿Ya tienes cuenta?{" "}
                  </p>
                  <strong className="text-purple-600 ml-3">
                    <Link className="hover:underline text-xl" to="/SignIn">
                      ¡Inicia sesión!
                    </Link>
                  </strong>
                </div>
                <Link
                  className=" w-40 h-14 my-5 2xl:mt-5 mb-28 lg:my-0 lg:mt-0 xl:mt-10 bg-purple-700 hover:bg-purple-900 rounded-lg text-white font-bold flex gap-9 text-center justify-center items-center"
                  to="/">
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
