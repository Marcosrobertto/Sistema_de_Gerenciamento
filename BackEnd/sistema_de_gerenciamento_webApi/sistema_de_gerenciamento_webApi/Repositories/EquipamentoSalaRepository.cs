using sistema_de_gerenciamento_webApi.Contexts;
using sistema_de_gerenciamento_webApi.Domains;
using sistema_de_gerenciamento_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Repositories
{
    public class EquipamentoSalaRepository : IEquipamentoSalaRepository
    {
        SistemaContext ctx = new SistemaContext();

        public void Atualizar(int idSala, EquipamentoSala equipamentoSalaAtualizado)
        {
            EquipamentoSala equipamentoSalaBuscado = BuscarPorId(idSala);

            if (equipamentoSalaAtualizado.IdEquipamento > 0)
            {
                equipamentoSalaBuscado.IdEquipamento = equipamentoSalaAtualizado.IdEquipamento;
            }

            if (equipamentoSalaAtualizado.IdSala > 0)
            {
                equipamentoSalaBuscado.IdSala = equipamentoSalaAtualizado.IdSala;
            }

            if (equipamentoSalaAtualizado.DataEntrada >= DateTime.Now)
            {
                equipamentoSalaBuscado.DataEntrada = equipamentoSalaBuscado.DataEntrada;
            }

            if (equipamentoSalaAtualizado.DataSaida >= DateTime.Now)
            {
                equipamentoSalaBuscado.DataSaida = equipamentoSalaBuscado.DataSaida;
            }

            ctx.EquipamentoSalas.Update(equipamentoSalaBuscado);

            ctx.SaveChanges();
        }

        public EquipamentoSala BuscarPorId(int id)
        {
            return ctx.EquipamentoSalas.FirstOrDefault(c => c.IdEquipamento == id);
        }

        public void Cadastrar(EquipamentoSala novoEquipamentoSala)
        {
            ctx.EquipamentoSalas.Add(novoEquipamentoSala);

            ctx.SaveChanges();
        }

        public void Deletar(int idEquipamentoSala)
        {
            ctx.EquipamentoSalas.Remove(BuscarPorId(idEquipamentoSala));

            ctx.SaveChanges();
        }


        public List<EquipamentoSala> ListarTodos()
        {
            return ctx.EquipamentoSalas.ToList();
        }
    }
}
