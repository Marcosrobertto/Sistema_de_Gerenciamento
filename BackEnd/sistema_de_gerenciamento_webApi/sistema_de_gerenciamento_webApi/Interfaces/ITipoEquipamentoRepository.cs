using sistema_de_gerenciamento_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Interfaces
{
    interface ITipoEquipamentoRepository
    {
        List<TipoEquipamento> ListarTodos();

        TipoEquipamento BuscarPorId(int idTipoEquipamento);

        void Cadastrar(TipoEquipamento novoTipoEquipamento);

        void Atualizar(int idTipoEquipamento, TipoEquipamento tipoEquipamentoAtualizado);

        void Deletar(int idTipoEquipamento);
    }
}
