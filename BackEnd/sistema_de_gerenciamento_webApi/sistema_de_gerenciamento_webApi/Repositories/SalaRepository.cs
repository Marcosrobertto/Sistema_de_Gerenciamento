using sistema_de_gerenciamento_webApi.Contexts;
using sistema_de_gerenciamento_webApi.Domains;
using sistema_de_gerenciamento_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Repositories
{
    public class SalaRepository : ISalaRepository
    {
        SistemaContext ctx = new SistemaContext();

        public void Atualizar(int idSala, Sala salaAtualizada)
        {
            Sala salaBuscada = BuscarPorId(idSala);

            if (salaAtualizada.Andar != null)
            {
                salaBuscada.Andar = salaAtualizada.Andar;
            }

            if (salaAtualizada.Nome != null)
            {
                salaBuscada.Nome = salaAtualizada.Nome;
            }

            if (salaAtualizada.Metragem != null)
            {
                salaBuscada.Metragem = salaAtualizada.Metragem;
            }

            ctx.Salas.Update(salaBuscada);

            ctx.SaveChanges();

        }

        public Sala BuscarPorId(int idSala)
        {
            return ctx.Salas.Find(idSala);
        }

        public void Cadastrar(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);

            ctx.SaveChanges();
        }

        public void Deletar(int idSala)
        {
            ctx.Salas.Remove(BuscarPorId(idSala));

            ctx.SaveChanges();
        }

        public List<Sala> ListarTodos()
        {
            return ctx.Salas.ToList();
        }
    }
}
