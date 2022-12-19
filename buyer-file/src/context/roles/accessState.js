import accessContext from "./accessContext";

const AccessState = (props) => {
  const LoginRequest = async(item)=>{
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
      };
      const response = await fetch(
        `http://localhost:3001/api/user/login`,
        requestOptions
      );
      return response;
  };
  const SignUpRequest= async(item)=>{
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
      };
      const response = await fetch(
        `http://localhost:3001/api/user/signup`,
        requestOptions
      );
      return response;
  };

  return (
    <accessContext.Provider value={{LoginRequest,SignUpRequest}}>
      {props.children}
    </accessContext.Provider>
  );
};

export default AccessState;