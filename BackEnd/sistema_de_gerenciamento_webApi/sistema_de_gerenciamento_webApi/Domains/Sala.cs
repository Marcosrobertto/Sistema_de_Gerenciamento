using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace sistema_de_gerenciamento_webApi.Domains
{
    public partial class Sala
    {
        public int IdSala { get; set; }
        [Required(ErrorMessage = "Informe o Andar da Sala")]
        public string Andar { get; set; }
        [Required(ErrorMessage = "Informe o Nome da Sala")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "Informe a Metragem da Sala")]
        public string Metragem { get; set; }
    }
}
