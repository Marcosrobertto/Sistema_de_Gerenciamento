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
    public class TipoEquipamentoController : ControllerBase
    {

        private ITipoEquipamentoRepository _tipoEquipamentoRepository { get; set; }

        public TipoEquipamentoController()
        {
            _tipoEquipamentoRepository = new TipoEquipamentoRepository();
        }

        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_tipoEquipamentoRepository.ListarTodos());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpGet("{idTipoEquipamento}")]
        public IActionResult BuscarPorId(int idTipoEquipamento)
        {
            try
            {
                return Ok(_tipoEquipamentoRepository.BuscarPorId(idTipoEquipamento));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(TipoEquipamento novoTipoEquipamento)
        {
            try
            {
                _tipoEquipamentoRepository.Cadastrar(novoTipoEquipamento);

                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }


        [HttpPut("{idTipoEquipamento}")]
        public IActionResult Atualizar(int idTipoEquipamento, TipoEquipamento novoTipoEquipamento)
        {
            try
            {
                _tipoEquipamentoRepository.Atualizar(idTipoEquipamento, novoTipoEquipamento);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpDelete("{idTipoEquipamento}")]
        public IActionResult Deletar(int idTipoEquipamento)
        {
            try
            {
                _tipoEquipamentoRepository.Deletar(idTipoEquipamento);

                return StatusCode(204);
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

    }
}
