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
    public class SalasController : ControllerBase
    {

        private ISalaRepository _salaRepository { get; set; }

        public SalasController()
        {
            _salaRepository = new SalaRepository();
        }

        [Authorize]
        [HttpGet]

        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_salaRepository.ListarTodos());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize]
        [HttpGet("{idSala}")]
        public IActionResult BuscarPorId(int idSala)
        {
            try
            {
                return Ok(_salaRepository.BuscarPorId(idSala));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize]
        [HttpPost]
        public IActionResult Cadastrar(Sala novaSala)
        {
            try
            {
                _salaRepository.Cadastrar(novaSala);

                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize]
        [HttpPut("{idSala}")]
        public IActionResult Atualizar(int idSala, Sala novaSala)
        {
            try
            {
                _salaRepository.Atualizar(idSala, novaSala);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [Authorize]
        [HttpDelete("{idSala}")]
        public IActionResult Deletar(int idSala)
        {
            try
            {
                _salaRepository.Deletar(idSala);

                return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

    }
}
