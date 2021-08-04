using System;
using System.Collections.Generic;

#nullable disable

namespace sistema_de_gerenciamento_webApi.Domains
{
    public partial class Equipamento
    {
        public int IdEquipamento { get; set; }
        public int? IdTipoEquipamento { get; set; }
        public string NomeEquipamento { get; set; }
        public string Marca { get; set; }
        public string NumeroSerie { get; set; }
        public string Descricao { get; set; }
        public string NumeroPatrimonio { get; set; }
        public string Situacao { get; set; }

        public virtual TipoEquipamento IdTipoEquipamentoNavigation { get; set; }
    }
}
