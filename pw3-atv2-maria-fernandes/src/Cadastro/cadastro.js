import { useState } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, TextField, Paper, Box, Typography, CssBaseline } from '@mui/material';

const theme = createTheme({
    palette: {
        background: {
            default: '#f3e5f5' // cor fundo
        },
        primary: {
            main: '#5E35B1', // cor fonte
        },
        secondary: {
            main: '#ffc107',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h5: {
            fontWeight: 600,
        },
    },
});

function Cadastro() {
    const [nome, setNome] = useState('');
    const [rg, setRG] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [data, setData] = useState('');
    const [numeroResp, setNumeroResp] = useState('');

    function cadastro(event) {
        event.preventDefault();
        const user = {
            nome,
            rg,
            cpf,
            email,
            numero,
            data,
            numeroResp
        };
        console.log(user);
        axios.post('https://reqres.in/api/users', user)
            .then(response => {

                alert(JSON.stringify(user, null, 2));
                console.log(response);
            })
            .catch(error => {
                console.error('Erro no cadastro:', error);
            });
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        maxWidth: 400,
                        my: 4,
                        mx: 2,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    }}
                >
                    <Typography component="h1" variant="h5" color="primary" gutterBottom>
                        Cadastro
                    </Typography>
                    <Box component="form" onSubmit={cadastro} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Seu Nome"
                            name="name"
                            autoComplete="name"
                            onChange={(event) => setNome(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="rg"
                            label="RG"
                            name="rg"
                            autoComplete="rg"
                            onChange={(event) => setRG(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="cpf"
                            label="CPF"
                            name="cpf"
                            autoComplete="cpf"
                            onChange={(event) => setCPF(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="E-Mail"
                            id="email"
                            autoComplete="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="smartphone-number"
                            label="Numero do Celular"
                            id="smartphone-number"
                            onChange={(event) => setNumero(event.target.value)}
                        />
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            required
                            fullWidth
                            name="data-nascimento"
                            label="Data de nascimento"
                            id="data-nascimento"
                            type="date"
                            onChange={(event) => setData(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="telefone-responsavel"
                            label="Telefone do Responsavel"
                            id="telefone-responsavel"
                            onChange={(event) => setNumeroResp(event.target.value)}
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                            Cadastrar
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}

export default Cadastro;


