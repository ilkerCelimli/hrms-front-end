export default function emailValidate(email,password) {

  const sleep = ms =>new Promise(resolve => setTimeout(resolve,ms))
  const validate = (values,props) => {
      return sleep(2000).then(() => {
          const errors = {};
          if(['admin', 'null','god'].includes(values.email)){
              errors.email = "Email Yanlış"
          }
          return errors
      })
  }

}