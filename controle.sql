-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Ago-2022 às 20:56
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `controle`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `controle`
--

CREATE TABLE `controle` (
  `id_controle` int(11) NOT NULL,
  `id_setor` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `data_entrada` date DEFAULT NULL,
  `data_saida` date DEFAULT NULL,
  `qtd` int(11) DEFAULT NULL,
  `cod_barra` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `controle`
--

INSERT INTO `controle` (`id_controle`, `id_setor`, `id_usuario`, `data_entrada`, `data_saida`, `qtd`, `cod_barra`) VALUES
(2, 1, 2, '2022-01-01', '2022-01-03', 2, 12043912);

-- --------------------------------------------------------

--
-- Estrutura da tabela `embalagem`
--

CREATE TABLE `embalagem` (
  `id_embalagem` int(11) NOT NULL,
  `tipo_embalagem` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `embalagem`
--

INSERT INTO `embalagem` (`id_embalagem`, `tipo_embalagem`) VALUES
(1, 'aço'),
(2, 'plástico'),
(3, 'madeira');

-- --------------------------------------------------------

--
-- Estrutura da tabela `estoque`
--

CREATE TABLE `estoque` (
  `id_estoque` int(11) NOT NULL,
  `qtd` int(11) DEFAULT NULL,
  `cod_barra` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `estoque`
--

INSERT INTO `estoque` (`id_estoque`, `qtd`, `cod_barra`) VALUES
(1, 500, 12043912);

-- --------------------------------------------------------

--
-- Estrutura da tabela `posicao`
--

CREATE TABLE `posicao` (
  `id_posicao` int(11) NOT NULL,
  `descricao` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `posicao`
--

INSERT INTO `posicao` (`id_posicao`, `descricao`) VALUES
(1, 'prateleira Y'),
(2, 'prateleira X'),
(3, 'prateleira Z');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `cod_barra` int(8) NOT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `id_pos` int(11) DEFAULT NULL,
  `largura` float DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `peso` float DEFAULT NULL,
  `comprimento` float DEFAULT NULL,
  `id_emb` int(11) DEFAULT NULL,
  `bloqueio` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`cod_barra`, `nome`, `id_pos`, `largura`, `altura`, `peso`, `comprimento`, `id_emb`, `bloqueio`) VALUES
(12043912, 'respirador', 1, 20, 12, 5, 3, 1, 0),
(12043931, 'luva', 2, 12, 5, 12, 3, 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `setor`
--

CREATE TABLE `setor` (
  `id_setor` int(11) NOT NULL,
  `nome` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `setor`
--

INSERT INTO `setor` (`id_setor`, `nome`) VALUES
(1, 'manuenção'),
(2, 'projetos'),
(3, 'compras');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(40) DEFAULT NULL,
  `senha` varchar(40) DEFAULT NULL,
  `bloqueio` tinyint(1) DEFAULT NULL,
  `data` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome`, `senha`, `bloqueio`, `data`) VALUES
(2, 'gustavo campos', '614908', 0, '2018-07-01'),
(11, 'vinicius pereira', '23423Vavbsvsbasd', 1, '2022-01-01');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `controle`
--
ALTER TABLE `controle`
  ADD PRIMARY KEY (`id_controle`),
  ADD KEY `fk_setor` (`id_setor`),
  ADD KEY `fk_usuario` (`id_usuario`),
  ADD KEY `fk_cod_controle` (`cod_barra`);

--
-- Índices para tabela `embalagem`
--
ALTER TABLE `embalagem`
  ADD PRIMARY KEY (`id_embalagem`);

--
-- Índices para tabela `estoque`
--
ALTER TABLE `estoque`
  ADD PRIMARY KEY (`id_estoque`),
  ADD KEY `fk_cod_barra` (`cod_barra`);

--
-- Índices para tabela `posicao`
--
ALTER TABLE `posicao`
  ADD PRIMARY KEY (`id_posicao`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`cod_barra`),
  ADD KEY `fk_posicao` (`id_pos`),
  ADD KEY `fk_embalagem` (`id_emb`);

--
-- Índices para tabela `setor`
--
ALTER TABLE `setor`
  ADD PRIMARY KEY (`id_setor`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `controle`
--
ALTER TABLE `controle`
  MODIFY `id_controle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `embalagem`
--
ALTER TABLE `embalagem`
  MODIFY `id_embalagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `estoque`
--
ALTER TABLE `estoque`
  MODIFY `id_estoque` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `posicao`
--
ALTER TABLE `posicao`
  MODIFY `id_posicao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `cod_barra` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12043932;

--
-- AUTO_INCREMENT de tabela `setor`
--
ALTER TABLE `setor`
  MODIFY `id_setor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `controle`
--
ALTER TABLE `controle`
  ADD CONSTRAINT `fk_cod_controle` FOREIGN KEY (`cod_barra`) REFERENCES `produto` (`cod_barra`),
  ADD CONSTRAINT `fk_setor` FOREIGN KEY (`id_setor`) REFERENCES `setor` (`id_setor`),
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Limitadores para a tabela `estoque`
--
ALTER TABLE `estoque`
  ADD CONSTRAINT `fk_cod_barra` FOREIGN KEY (`cod_barra`) REFERENCES `produto` (`cod_barra`);

--
-- Limitadores para a tabela `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `fk_embalagem` FOREIGN KEY (`id_emb`) REFERENCES `embalagem` (`id_embalagem`),
  ADD CONSTRAINT `fk_posicao` FOREIGN KEY (`id_pos`) REFERENCES `posicao` (`id_posicao`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
