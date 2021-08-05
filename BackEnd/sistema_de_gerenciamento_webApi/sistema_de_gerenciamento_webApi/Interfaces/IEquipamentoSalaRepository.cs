using sistema_de_gerenciamento_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Interfaces
{
    interface IEquipamentoSalaRepository
    {

        List<EquipamentoSala> ListarTodos();

        EquipamentoSala BuscarPorId(int idEquipamentoSala);

        void Cadastrar(EquipamentoSala novoEquipamentoSala);

        void Atualizar(int idSala, EquipamentoSala equipamentoSalaAtualizado);

        void Deletar(int idEquipamentoSala);

    }
}
