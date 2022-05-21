import { useRef } from "react";

const Form = ({ searchUsers }) => {
  const input__Ref = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const value = input__Ref.current.value;
    searchUsers(value);
    
    input__Ref.current.value = '';
  };
  
  return (
    <form className="form__user" onSubmit={submitHandler}>
      <div className="form-control">
        <input type="text" placeholder="Enter Name User..." ref={input__Ref} />
      </div>
      <button className="btn btn-primary">Search</button>
    </form>
  );
};

export default Form;
