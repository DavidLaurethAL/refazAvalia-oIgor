import Button from "../Button/button";
import Input from "../Input/input"
import './form.css'

const Form = ()=>{
    return(
        <form>
            <Input type="text" placeholder="First name"></Input>
            <Input type="text" placeholder="Last name"></Input>
            <Input type="email" placeholder="Email Adress"></Input>
            <Input type="password" placeholder="Password"></Input>
            <Button buttonName="CLAIM YOUR FREE TRIAL"/>
            <Terms link="#" />
        </form>
    )
}

export default Form;