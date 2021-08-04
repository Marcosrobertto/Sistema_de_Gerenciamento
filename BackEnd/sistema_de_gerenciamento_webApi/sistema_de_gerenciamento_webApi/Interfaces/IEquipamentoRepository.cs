using sistema_de_gerenciamento_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Interfaces
{
    interface IEquipamentoRepository
    {

        List<Equipamento> ListarTodos();

        Equipamento BuscarPorId(int idEquipamento);

        void Cadastrar(Equipamento novoEquipamento);

        void Atualizar(int idSala, Equipamento equipamentoAtualizado);

        void Deletar(int idEquipamento);

    }
}
