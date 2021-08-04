using sistema_de_gerenciamento_webApi.Contexts;
using sistema_de_gerenciamento_webApi.Domains;
using sistema_de_gerenciamento_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Repositories
{
    public class TipoEquipamentoRepository : ITipoEquipamentoRepository
    {
        SistemaContext ctx = new SistemaContext();
        public void Atualizar(int idTipoEquipamento, TipoEquipamento tipoEquipamentoAtualizado)
        {
            TipoEquipamento tipoEquipamentoBuscado = BuscarPorId(idTipoEquipamento);

            if (tipoEquipamentoAtualizado.TipoEquipamento1 != null)
            {
                tipoEquipamentoBuscado.TipoEquipamento1 = tipoEquipamentoAtualizado.TipoEquipamento1;
            }

            ctx.TipoEquipamentos.Update(tipoEquipamentoBuscado);

            ctx.SaveChanges();
        }

        public TipoEquipamento BuscarPorId(int idTipoEquipamento)
        {
            return ctx.TipoEquipamentos.Find(idTipoEquipamento);
        }

        public void Cadastrar(TipoEquipamento novoTipoEquipamento)
        {
            ctx.TipoEquipamentos.Add(novoTipoEquipamento);

            ctx.SaveChanges();
        }

        public void Deletar(int idTipoEquipamento)
        {
            ctx.TipoEquipamentos.Remove(BuscarPorId(idTipoEquipamento));

            ctx.SaveChanges();
        }

        public List<TipoEquipamento> ListarTodos()
        {
            return ctx.TipoEquipamentos.ToList();
        }
    }
}
