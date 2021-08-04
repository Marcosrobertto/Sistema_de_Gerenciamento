using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace sistema_de_gerenciamento_webApi.Domains
{
    public partial class TipoEquipamento
    {
        public TipoEquipamento()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdTipoEquipamento { get; set; }
        [Required(ErrorMessage = "O nome do Tipo Equipamento é Obrigatório!")]
        public string TipoEquipamento1 { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
