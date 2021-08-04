using sistema_de_gerenciamento_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Interfaces
{
    interface IUsuarioRepository
    {

        List<Usuario> ListarTodos();

        Usuario BuscarPorId(int idUsuario);

        void Cadastrar(Usuario novoUsuario);

        void Atualizar(int idUsuario, Usuario usuarioAtualizado);

        void Deletar(int idUsuario);

        Usuario BuscarPorNomeCpfSenha(string nome, string cpf, string senha);

    }
}
