using sistema_de_gerenciamento_webApi.Contexts;
using sistema_de_gerenciamento_webApi.Domains;
using sistema_de_gerenciamento_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        SistemaContext ctx = new SistemaContext();
        public void Atualizar(int idUsuario, Usuario usuarioAtualizado)
        {
            throw new NotImplementedException();
        }

        public Usuario BuscarPorId(int idUsuario)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idUsuario)
        {
            throw new NotImplementedException();
        }

        public List<Usuario> ListarTodos()
        {
            return ctx.Usuarios.ToList();
        }

        public Usuario BuscarPorNomeCpfSenha(string nome, string cpf, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(i => i.Nome == nome && i.Cpf == cpf && i.Senha == senha);
        }
    }
}
