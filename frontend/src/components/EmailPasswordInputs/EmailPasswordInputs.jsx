import './EmailPasswordInputs.css'

function EmailPasswordInputs({ user, editable, userForm, userFormHandler }) {
    
    return(
        <div hidden={editable && "hidden"} className='userLogin'>
          <div className='userLogin'>
            <input 
              name='email'
              value={userForm.email}
              onChange={userFormHandler} 
              className='email inputData' 
              type="email" 
              placeholder="Correo"
            />
            <input 
              name='password'
              value={userForm.password}
              onChange={userFormHandler} 
              className='inputData' 
              type="password" 
              placeholder="Contraseña" 
            />
            <button type="submit" className='inputData'>Save</button>
          </div>
        </div>
    );
}

export default EmailPasswordInputs;