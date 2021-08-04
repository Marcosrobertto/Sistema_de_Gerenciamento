using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace sistema_de_gerenciamento_webApi.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o Nome do Usuário")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Informe o CPF do Usuário")]
        public string Cpf { get; set; }
        [Required(ErrorMessage = "Informe a Senha do Usuário")]
        public string Senha { get; set; }
    }
}
