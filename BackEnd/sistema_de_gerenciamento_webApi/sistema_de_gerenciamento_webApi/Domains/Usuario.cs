using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace sistema_de_gerenciamento_webApi.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        [Required(ErrorMessage = "Informe o Nome")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Informe o CPF")]
        public string Cpf { get; set; }
        [StringLength(100, MinimumLength = 5, ErrorMessage = "A senha deve conter no mínimo 5 caracteres")]
        public string Senha { get; set; }
    }
}
