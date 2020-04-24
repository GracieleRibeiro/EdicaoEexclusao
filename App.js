import React,{useState} from 'react';
import { View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaCadastro from './telas/TelaCadastro';
import TelaUsuario from './telas/TelaUsuario';

export default function App() {
  
  const[idUsuario, setIdUsuario] = useState();
  const[nomeUsuario, setNomeUsuario] = useState();
  const[telefoneUsuario, setTelefoneUsuario] = useState();
  const[telaInicial, setTelaInicial] = useState(true)
  const[telaUsuario, setTelaUsuario] = useState(false)

  const selecionaUsuarioId = (idUsuario) => {
    setIdUsuario(idUsuario);
  }

  const selecionaUsuarioNome = (nomeUsuario) => {
    setNomeUsuario(nomeUsuario);
  }

  const selecionaUsuarioTelefone = (telefoneUsuario) => {
    setTelefoneUsuario(telefoneUsuario);
  }

  const editarUsuario = (id, nome, telefone) => {
    setIdUsuario(id);
    setNomeUsuario(nome);
    setTelefoneUsuario(telefone);
  }

  const editarTelaUsuario = () => {
    setTelaUsuario(true);
    setTelaInicial(false);
  }

  const editarTelaInicio = () => {
    setTelaInicial(true);
    setTelaUsuario(false);
  }

  let conteudo;
  

  if(telaInicial === true){
    conteudo = <TelaCadastro 
              onSelecionaUsuarioId={selecionaUsuarioId}
              onSelecionaUsuarioNome={selecionaUsuarioNome}  
              onSelecionaUsuarioTelefone={selecionaUsuarioTelefone}
              onEditarTelaUsuario={editarTelaUsuario}
            />
  }
  
  if(telaUsuario === true){
    conteudo = <TelaUsuario 
                  id={idUsuario} 
                  nome={nomeUsuario} 
                  telefone={telefoneUsuario}
                  onEditarTelaInicio={editarTelaInicio}
                  onEditarUsuario={editarUsuario}
                />
  }

/*    if(telaUsuario === true){
    conteudo = <TelaUsuario 
                  id={idUsuario} 
                  nome={nomeUsuario} 
                  telefone={telefoneUsuario}
                  onEditarTelaEditarUsuario={editarTelaEditarUsuario}
                />  
  }*/

  return (
    
    <View>
      <Cabecalho titulo={'Cadastro de usuario'}/>
      {conteudo}
    </View>
   
  );
}
