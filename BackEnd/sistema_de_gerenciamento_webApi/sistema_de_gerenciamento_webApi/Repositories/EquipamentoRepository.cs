using Microsoft.EntityFrameworkCore;
using sistema_de_gerenciamento_webApi.Contexts;
using sistema_de_gerenciamento_webApi.Domains;
using sistema_de_gerenciamento_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Repositories
{
    public class EquipamentoRepository : IEquipamentoRepository
    {
        SistemaContext ctx = new SistemaContext();

        public void Atualizar(int idEquipamento, Equipamento equipamentoAtualizado)
        {
            Equipamento equipamentoBuscado = BuscarPorId(idEquipamento);

            if (equipamentoAtualizado.IdTipoEquipamento > 0)
            {
                equipamentoBuscado.IdTipoEquipamento = equipamentoAtualizado.IdTipoEquipamento;
            }

            if (equipamentoAtualizado.NomeEquipamento != null)
            {
                equipamentoBuscado.NomeEquipamento = equipamentoAtualizado.NomeEquipamento;
            }

            if (equipamentoAtualizado.Marca != null)
            {
                equipamentoBuscado.Marca = equipamentoAtualizado.Marca;
            }

            if (equipamentoAtualizado.NumeroSerie != null)
            {
                equipamentoBuscado.NumeroSerie = equipamentoAtualizado.NumeroSerie;
            }

            if (equipamentoAtualizado.Descricao != null)
            {
                equipamentoBuscado.Descricao = equipamentoAtualizado.Descricao;
            }

            if (equipamentoAtualizado.NumeroPatrimonio != null)
            {
                equipamentoBuscado.NumeroPatrimonio = equipamentoAtualizado.NumeroPatrimonio;
            }

            if (equipamentoAtualizado.Situacao != null)
            {
                equipamentoBuscado.Situacao = equipamentoAtualizado.Situacao;
            }

            ctx.Equipamentos.Update(equipamentoBuscado);

            ctx.SaveChanges();

        }

        public Equipamento BuscarPorId(int idEquipamento)
        {
            return ctx.Equipamentos.Find(idEquipamento);
        }

        public void Cadastrar(Equipamento novoEquipamento)
        {
            ctx.Equipamentos.Add(novoEquipamento);

            ctx.SaveChanges();
        }

        public void Deletar(int idEquipamento)
        {
            ctx.Equipamentos.Remove(BuscarPorId(idEquipamento));

            ctx.SaveChanges();
        }

        public List<Equipamento> ListarTodos()
        {
            return ctx.Equipamentos.ToList();
        }
    }
}
