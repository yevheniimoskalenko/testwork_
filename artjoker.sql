-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Фев 10 2020 г., 13:47
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `artjoker`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  `age` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=47 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `age`) VALUES
(31, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(32, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(33, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(34, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(35, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(36, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(37, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(38, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(39, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(40, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(41, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(42, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(43, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(44, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(45, 'Joker', 'Yevhenii', 'Moskalenko', 23),
(46, 'Joker', 'Yevhenii', 'Moskalenko', 23);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
