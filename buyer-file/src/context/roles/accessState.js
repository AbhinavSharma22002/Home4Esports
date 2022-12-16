import accessContext from "./accessContext";

const AccessState = (props) => {

  const LoggedInStates = async () => {
    const requestOptions = {
      method: "GET"
    };
    const response = await fetch(
      `${process.env.SERVER}/api/user/status`,
      requestOptions
    );
    const data = await response.json();
    return data;
  };

  const LoginRequest = async(item)=>{
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(item)
      };
      const response = await fetch(
        `${process.env.SERVER}/api/user/login`,
        requestOptions
      );
      const data = await response.json();
      return data;
  };
  const SignUpRequest= async(item)=>{
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(item)
      };
      const response = await fetch(
        `${process.env.SERVER}/api/user/signup`,
        requestOptions
      );
      const data = await response.json();
      return data;
  };

  return (
    <accessContext.Provider value={{LoggedInStates,LoginRequest,SignUpRequest}}>
      {props.children}
    </accessContext.Provider>
  );
};

export default AccessState;