import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const nameChange = event => {
        setName(event.target.value);
    }

    const mailChange = event => {
        setMail(event.target.value);
    }

    const passwordChange = event => {
        setPassword(event.target.value);
    }
    const password2Change = event => {
        setPassword2(event.target.value);
    }

    const navigate = useNavigate();
    function handleClick(){
        navigate("/home");
    }

    return (
        <div className='App min-vh-100 d-flex justify-content-center align-items-center'>
            <Card style={{ width: '22rem' }}>
                <Form className='p-3'>
                    <div className='p-2'>
                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Control type='name' placeholder='İsim Soyisim' onChange={nameChange} value={userName} />
                        </Form.Group>
                    </div>
                    <div className='p-2'>
                        <Form.Group className='mb-3' controlId='formBasicMail' onChange={mailChange} value={mail}>
                            <Form.Control type='mail' placeholder='Email' />
                        </Form.Group>
                    </div>
                    <div className='p-2'>
                        <Form.Group className='mb-3' controlId='formBasicPassword' onChange={passwordChange} value={password}>
                            <Form.Control type='password' placeholder='Şifre' />
                        </Form.Group>
                    </div>
                    <div className='p-2'>
                        <Form.Group className='mb-3' controlId='formBasicPassword2'>
                            <Form.Control type='password' placeholder='Şifre Tekrar' onChange={password2Change} value={password2} />
                        </Form.Group>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Button variant='outline-success' onClick={handleClick}>Login</Button>
                    </div>
                </Form>
            </Card>
        </div>
    )
}
export default Login;