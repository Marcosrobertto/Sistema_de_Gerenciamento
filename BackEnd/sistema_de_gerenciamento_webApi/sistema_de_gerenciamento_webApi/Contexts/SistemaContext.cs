using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using sistema_de_gerenciamento_webApi.Domains;

#nullable disable

namespace sistema_de_gerenciamento_webApi.Contexts
{
    public partial class SistemaContext : DbContext
    {
        public SistemaContext()
        {
        }

        public SistemaContext(DbContextOptions<SistemaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Equipamento> Equipamentos { get; set; }
        public virtual DbSet<EquipamentoSala> EquipamentoSalas { get; set; }
        public virtual DbSet<Sala> Salas { get; set; }
        public virtual DbSet<TipoEquipamento> TipoEquipamentos { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                //optionsBuilder.UseSqlServer("Data Source=DESKTOP-SU3F0Q2\\SQLEXPRESS; initial catalog=Sistema_de_Gerenciamento; user Id=sa; pwd=Senai@132;");
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-5IAR0TCC; initial catalog=Sistema_de_Gerenciamento; user Id=sa; pwd=senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Equipamento>(entity =>
            {
                entity.HasKey(e => e.IdEquipamento)
                    .HasName("PK__Equipame__E309D87F53B0C62E");

                entity.HasIndex(e => e.NumeroPatrimonio, "UQ__Equipame__3BC8B35D6A58E387")
                    .IsUnique();

                entity.HasIndex(e => e.NumeroSerie, "UQ__Equipame__C54551772BF70A92")
                    .IsUnique();

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Marca)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NomeEquipamento)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NumeroPatrimonio)
                    .IsRequired()
                    .HasMaxLength(110)
                    .IsUnicode(false);

                entity.Property(e => e.NumeroSerie)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Situacao)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoEquipamentoNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdTipoEquipamento)
                    .HasConstraintName("FK__Equipamen__IdTip__3D5E1FD2");
            });

            modelBuilder.Entity<EquipamentoSala>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("EquipamentoSala");

                entity.Property(e => e.DataEntrada).HasColumnType("date");

                entity.Property(e => e.DataSaida).HasColumnType("date");

                entity.HasOne(d => d.IdEquipamentoNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdEquipamento)
                    .HasConstraintName("FK__Equipamen__IdEqu__4222D4EF");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__Equipamen__IdSal__4316F928");
            });

            modelBuilder.Entity<Sala>(entity =>
            {
                entity.HasKey(e => e.IdSala)
                    .HasName("PK__Sala__A04F9B3B931BA66E");

                entity.ToTable("Sala");

                entity.HasIndex(e => e.Nome, "UQ__Sala__7D8FE3B27724B503")
                    .IsUnique();

                entity.Property(e => e.Andar)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Metragem)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoEquipamento>(entity =>
            {
                entity.HasKey(e => e.IdTipoEquipamento)
                    .HasName("PK__TipoEqui__0191D191421402B8");

                entity.Property(e => e.TipoEquipamento1)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("TipoEquipamento");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97A8074110");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.Cpf, "UQ__Usuario__C1F89731004B7250")
                    .IsUnique();

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("CPF");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
