const Login = ()=>{
    return (
        <div id="right-box">
             <div id="rb-top">
               <p>Sign in</p>
           </div>
            <div id="box">
               <p >Sign in to your account</p><br />
               <label for="">Email Id</label><br />
              <input type="text" placeholder="xxxxxxxxx" /> <br />
               <label for="">Password</label><br />
               <input type="text" placeholder="xxxxxxxxx" /><br />
               <p class="forget_pass">Forgot Password</p><br />
               <button>Sign in</button><br />
            </div>
            <div class="box-last">
            <p style={{color: "#7A7A7A"}}>New to vajra? <span style={{color: "#F78117"}}>Sign UP Now</span></p>  
          </div>
       </div>
    )
    }
    
    export default Login