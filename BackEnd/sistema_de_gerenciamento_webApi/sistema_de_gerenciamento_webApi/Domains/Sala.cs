using System;
using System.Collections.Generic;

#nullable disable

namespace sistema_de_gerenciamento_webApi.Domains
{
    public partial class Sala
    {
        public int IdSala { get; set; }
        public string Andar { get; set; }
        public string Nome { get; set; }
        public string Metragem { get; set; }
    }
}
