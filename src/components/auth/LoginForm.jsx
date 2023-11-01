import { useState } from "react"

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  const inputClass = 'block outline-none focus:border-neutral-400 border w-9/12 border-neutral-200 bg-neutral-100 p-2 text-xs rounded mx-auto mb-2'

  function submitForm(e) {
    e.preventDefault()
    setErrorMessage('')
    setLoading(true)

    setTimeout(() => {
      if(loading) setLoading(false)
      setErrorMessage('Sorry, your password was incorrect. Please double-check your password.')
    }, 1500);

  }

  return (
   <>
    <div className="bg-[url('/img/form-logo.png')] h-[51px] w-[175px] mx-auto mt-9 mb-4 bg-[length:175.32px]"></div>

    <form onSubmit={submitForm} className="w-full text-xs mt-4">
      <input className={inputClass} value={username} onInput={(e) => setUsername(e.target.value) }
      type="text" name="username" id="username" placeholder="Phone number, username, or email" />

      <input className={inputClass} value={password} onInput={(e) => setPassword(e.target.value)}
      type="password" name="password" id="password" placeholder="Password" />

      <input className="block my-3 mx-auto bg-[#0095f6] py-2 w-9/12 rounded border-[#0095f6] text-white font-bold disabled:opacity-75" 
      type="submit" value="Log in" name="loginBtn" id="loginBtn" disabled={!username || password.length < 6} />
    </form>

    {/* divider */}
    <div className="w-60 mx-auto flex justify-center items-center">
      <div className="border-neutral-300 basis-full border-t  flex-shrink-1 h-0"></div>
      <div className="font-semibold text-neutral-400 mx-3">OR</div>
      <div className="border-neutral-300 basis-full border-t flex-shrink-1 h-0"></div>
    </div>

    <div className="w-full text-center mt-5">
      <button className="text-[#385185] font-semibold mx-auto text-sm">Log in with Facebook</button>
      <br />
      {!!errorMessage && <div className="text-sm text-red-600 mx-10 my-2 font-medium">{errorMessage}</div>}
      <button className="text-[#385185] font-normal mt-2 mb-3 mx-auto text-xs">Forget Password</button>
    </div>
   </>
  )
}

export default LoginForm