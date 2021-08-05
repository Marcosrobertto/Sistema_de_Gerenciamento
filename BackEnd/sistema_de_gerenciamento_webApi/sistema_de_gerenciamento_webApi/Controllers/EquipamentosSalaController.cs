using Microsoft.AspNetCore.Authorization;
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
    public class EquipamentosSalaController : ControllerBase
    {

        private IEquipamentoSalaRepository _equipamentoSalaRepository { get; set; }

        public EquipamentosSalaController()
        {
            _equipamentoSalaRepository = new EquipamentoSalaRepository();
        }

        [Authorize]
        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_equipamentoSalaRepository.ListarTodos());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize]
        [HttpGet("{idEquipamento}")]
        public IActionResult BuscarPorId(int idEquipamento)
        {
            try
            {
                return Ok(_equipamentoSalaRepository.BuscarPorId(idEquipamento));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize]
        [HttpPost]
        public IActionResult Cadastrar(EquipamentoSala novoEquipamentoSala)
        {
            try
            {
                _equipamentoSalaRepository.Cadastrar(novoEquipamentoSala);

                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize]
        [HttpPut("{idEquipamento}")]
        public IActionResult Atualizar(int idEquipamentoSala, EquipamentoSala equipamentoSalaAtualizado)
        {
            try
            {
                _equipamentoSalaRepository.Atualizar(idEquipamentoSala, equipamentoSalaAtualizado);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize]
        [HttpDelete("{idAtendimento}")]
        public IActionResult Deletar(int idEquipamentoSala)
        {
            try
            {
                _equipamentoSalaRepository.Deletar(idEquipamentoSala);

                return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

    }
}
