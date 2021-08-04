using sistema_de_gerenciamento_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Interfaces
{
    interface ISalaRepository
    {

        List<Sala> ListarTodos();

        Sala BuscarPorId(int idSala);

        void Cadastrar(Sala novaSala);

        void Atualizar(int idSala, Sala SalaAtualizada);

        void Deletar(int idSala);


    }
}
