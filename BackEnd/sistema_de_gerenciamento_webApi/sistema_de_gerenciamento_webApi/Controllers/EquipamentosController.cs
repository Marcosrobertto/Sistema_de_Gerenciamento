using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sistema_de_gerenciamento_webApi.Domains;
using sistema_de_gerenciamento_webApi.Interfaces;
using sistema_de_gerenciamento_webApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EquipamentosController : ControllerBase
    {

        private IEquipamentoRepository _equipamentoRepository { get; set; }

        public EquipamentosController()
        {
            _equipamentoRepository = new EquipamentoRepository();
        }

        [HttpGet]
        public IActionResult Listrtodos()
        {
            try
            {
                return Ok(_equipamentoRepository.ListarTodos());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpGet("{idEquipamento}")]
        public IActionResult BuscarPorId(int idEquipamento)
        {
            try
            {
                return Ok(_equipamentoRepository.BuscarPorId(idEquipamento));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Equipamento novoEquipamento)
        {
            try
            {
                _equipamentoRepository.Cadastrar(novoEquipamento);

                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpPut("{idEquipamento}")]
        public IActionResult Atualizar(int idEquipamento, Equipamento equipamentoAtualizado)
        {
            try
            {
                _equipamentoRepository.Atualizar(idEquipamento, equipamentoAtualizado);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpDelete("{idEquipamento}")]
        public IActionResult Deletar(int idEquipamento)
        {
            try
            {
                _equipamentoRepository.Deletar(idEquipamento);

                return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

    }
}
