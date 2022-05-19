-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-05-2022 a las 03:58:24
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `markpet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorymascotas`
--

CREATE TABLE `categorymascotas` (
  `id` int(11) NOT NULL,
  `nameMascota` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorymascotas`
--

INSERT INTO `categorymascotas` (`id`, `nameMascota`) VALUES
(1, 'Perro'),
(2, 'Gato'),
(3, 'Ave'),
(4, 'Pez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoryproductos`
--

CREATE TABLE `categoryproductos` (
  `id` int(11) NOT NULL,
  `nameProduct` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoryproductos`
--

INSERT INTO `categoryproductos` (`id`, `nameProduct`) VALUES
(1, 'Alimentos'),
(2, 'Juguetes y Accesorios'),
(3, 'Higiene y Estetica'),
(4, 'Salud');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `imagen` text DEFAULT NULL,
  `categoryMascotas_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `categoryProductos_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `imagen`, `categoryMascotas_id`, `description`, `categoryProductos_id`, `stock`) VALUES
(14, 'Rc Mini Adult', 2354, 10, 'producto-1652804970212.webp', 1, 'El  alimento Royal cannin Mini adult esta pensado para cuidar la salud de los adultos de 12 meses  a  8 años de edad que sean de talla pequeña hasta los 11kg   ', 1, 1234),
(15, 'Rc Mini Puppy', 2845, 10, 'producto-1652803250569.png', 1, 'El alimento Royal cannin Mini adult esta pensado para cuidar la salud de los cachorros desde los 3 meses a  los 12 meses de edad que sean de talla pequeña ', 1, 123),
(16, 'Rc Medium Adult', 2478, 10, 'producto-1652803357642.jpg', 1, 'El alimento Royal cannin Medium adult esta pensado para cuidar la salud de los adultos de 12 meses a 8 años de edad que sean de talla mediana hasta los 25kg  ', 1, 234),
(17, 'Rc Medium Puppy ', 2860, 10, 'producto-1652803426708.png', 1, 'El alimento Royal cannin Medium Puppy esta pensado para cuidar la salud de los cachorros desde los 3  hasta los 12 meses que sean de talla mediana hasta los 25g ', 1, 343),
(18, 'Rc Maxi Adult', 10890, 10, 'producto-1652803452433.jpg', 1, 'El alimento Royal cannin Maxi adult esta pensado para cuidar la salud de los adultos de 12 meses a 8 años de edad que sean de talla pequeña hasta los 50kg ', 1, 432),
(19, 'Rc Kitten ', 2532, 10, 'producto-1652803652806.webp', 2, 'El alimento Royal canni kitten esta pensado para nuestros felinos bebes de 3 a 12 meses, brinda una nutricion completa para fortalecer al cachorro ', 1, 543),
(20, 'Rc Fit 32', 2680, 10, 'producto-1652803706698.jpg', 2, 'El alimento Royal cannin fit 32 es ideal para los felinos activos, intrépidos activos. Del primer año de vida hasta los 7 años de edad ', 1, 532),
(21, 'Rc Gatos castrados', 3420, 10, 'producto-1652803737349.png', 2, 'El alimento Royal cannin gatos castrados apunta a los felinos que ya fueron castrados, ayudando a regular el peso y el indice S/O para prevenir problemas urinarios  ', 1, 543),
(23, 'Rc Pouch Kitten', 280, 10, 'producto-1652803892659.webp', 2, 'Alimento humedo para los mas exigentes! ', 1, 1345),
(24, 'Rc Pouch Instictive ', 280, 10, 'producto-1652803924448.png', 2, 'Alimento humedo para los mas exigentes! ', 1, 54321),
(25, 'Rc Pouch Beauty', 280, 10, 'producto-1652803980479.webp', 2, 'Alimento humedo para los mas exigentes! ', 1, 3223),
(27, 'Rc Pouch Feel ', 300, 10, 'producto-1652804057732.png', 2, 'Alimento humedo para los mas exigentes! ', 1, 432),
(28, 'Rc Pouch Smeel', 300, 10, 'producto-1652804079373.png', 2, 'Alimento humedo para los mas exigentes! ', 1, 32),
(29, 'Rc Pouch Taste', 300, 10, 'producto-1652804094021.png', 2, 'Alimento humedo para los mas exigentes! ', 1, 432),
(30, 'PP Adulto mediano', 3200, 10, 'producto-1652804139652.jpg', 1, 'El alimento Purina Pro Plan adulto mediano esta pensado para perros de 1 a 10 años de edad, ayuda a fortalecer masa muscular y desarrolla una mejor calidad de vida  ', 1, 322),
(31, 'PP Adulto Pequeño ', 3120, 10, 'producto-1652804308005.jpg', 1, 'El alimento Purina Pro Plan adulto pequeño esta pensado para perros de 1 a 10 años de edad, ayuda a fortalecer masa muscular y desarrolla una mejor calidad de vida  ', 1, 432),
(32, 'PP Cachorro mediano ', 8970, 10, 'producto-1652804329025.png', 1, 'El alimento Purina Pro Plan Cachorro mediano  esta pensado para perros de 3 a 12 meses de edad, ayuda a fortalecer masa muscular y desarrolla una mejor calidad de vida  ', 1, 432),
(33, 'PP Cachorro Pequeño ', 3245, 10, 'producto-1652804346837.jpg', 1, 'El alimento Purina Pro Plan Cachorro Pequeño  esta pensado para perros de 3 a 12 meses de edad, ayuda a fortalecer masa muscular y desarrolla una mejor calidad de vida ', 1, 223),
(34, 'PP Active Mind pequeño', 3421, 10, 'producto-1652804393538.jpg', 1, 'El alimento Purina Pro Plan Active Mind pequeño esta pensado para perros de mas de 7 años de edad, ayuda a fortalecer masa muscular y desarrolla una mejor calidad de vida cuidando las articulaciones ', 1, 345),
(36, 'Old prince cordero y arroz small', 1390, 10, 'producto-1652804792854.png', 1, 'El alimento Old prince cordero y arros small basa su proteina en la carne de cordero conviertiendo al alimento en una opcion hipoalergenica de excelente calidad y bajo costo, ideal para perros de 1 a 8 años de edad de talla pequeña ', 1, 432),
(37, 'Old prince cordero y arroz puppy', 1459, 10, 'producto-1652804812063.png', 1, 'El alimento Old prince cordero y arros puppy basa su proteina en la carne de cordero conviertiendo al alimento en una opcion hipoalergenica de excelente calidad y bajo costo, ideal para perros de 3 a 12 meses de edad  ', 1, 432),
(38, 'Old prince Cerdo y legumbres', 1342, 10, 'producto-1652804831903.png', 1, 'El alimento Old Cerdo y legumbres basa su proteina en la carne de cerdo conviertiendo al alimento en una opcion hipoalergénica de excelente calidad y bajo costo, ideal para perros de 1 a 8 años de edad de talla mediano ', 1, 234),
(39, 'Hueso Kong Extreme', 6780, 5, 'producto-1652577143166.webp', 1, 'Hueso Kong importado de USA. Este juguete es para las mordidas mas fuertes del reino animal, practicamente indestructible!', 2, 432),
(40, 'Snack Monamie Churrasquito de Carne', 990, 0, 'producto-1652577554714.png', 1, 'Snack de excelente calidad, 100% carne vacuna sin conservantes ni aditivos ', 2, 3224),
(41, 'Old prince cordero y arroz adulto', 2500, 10, 'producto-1652804891483.png', 1, 'El alimento Old prince cordero y arros puppy basa su proteina en la carne de cordero conviertiendo al alimento en una opcion hipoalergenica de excelente calidad y bajo costo, ideal para perros de 1 año a 12 años de edad ', 1, 1332),
(42, 'Gladiator', 4500, 5, 'producto-1652805129206.jpg', 1, 'Peluche de excelente calidad recubierto por una coraza de goma ultra resistente  ', 2, 432),
(43, 'Snoozy', 6500, 5, 'producto-1652805233844.jpg', 2, 'Alfombra de piso tipo plush con piso antideslizante super calentita', 2, 432),
(44, 'Kong Suruyo Extreme', 6543, 5, 'producto-1652805321523.jpg', 1, 'Suruyo Kong importado de USA. Este juguete es para las mordidas mas fuertes del reino animal, practicamente indestructible!', 2, 543),
(45, 'Piedras Gattos', 500, 5, 'producto-1652805409542.jpg', 2, 'Piedras aglutinantes de alta calidad, el contenido es de 4kg y se calcula que rinde 3 semanas con un gato adulto de aprox 5kg ', 3, 4322),
(46, 'Tidy cats Piedras ', 1850, 5, 'producto-1652805545449.png', 2, 'Las Tidy cats son las mejores piedras aglutinantes del mercado, con un alto poder aglutinante, neutralizan el olor y rinden 1 mes de uso', 3, 5432),
(47, 'Alta gama lavanda ', 730, 5, 'producto-1652805648497.jpg', 2, 'Piedras con aroma a lavanda, clasicas con 3,6kg de contenido por unidad', 3, 123),
(48, 'Pecera completa', 14590, 5, 'producto-1652805980083.jpeg', 4, 'Pecera de 90cm de largo por 45cm de profundidad y 60 cm de alto, cuenta con decoracion de interior ', 2, 23),
(49, 'Gold Fish', 346, 10, 'producto-1652806301461.png', 4, 'Alimento especialmente pensado para tus peces', 1, 323),
(50, 'Gold Fish', 350, 5, 'producto-1652806350170.png', 4, 'Alimento especialmente pensado para tus peces', 1, 34),
(51, 'Jaula para canarios', 13455, 5, 'producto-1652806443643.jpeg', 3, 'Jaula de 1,30mts de altura por 45cm de ancho por 45cm de largo', 2, 34),
(52, 'FruitBlend', 560, 5, 'producto-1652806524417.jpeg', 3, 'Alimento para canarios especialmente diseñado para aquellos que viven en cautiverio ', 1, 32);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productsusers`
--

CREATE TABLE `productsusers` (
  `id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usercategory`
--

CREATE TABLE `usercategory` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usercategory`
--

INSERT INTO `usercategory` (`id`, `name`) VALUES
(1, 'Usuario'),
(2, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userlog`
--

CREATE TABLE `userlog` (
  `id` int(11) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `profileImage` text NOT NULL,
  `password` text NOT NULL,
  `userCategory_id` int(11) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `profileImage`, `password`, `userCategory_id`, `phone`, `adress`) VALUES
(1, 'Diego', 'escobar', 'pepe@gmail.com', 'usuario-1652237092330.webp', '$2a$10$wsocCrjbqk2zW4TX5C000.oyxCpZTncmE1Uyi/wdJEXS0JSuL.4B.', 1, NULL, NULL),
(2, 'Diego', 'escobar', 'fernandezescobardiego@gmail.com', 'usuario-1652237160778.webp', '$2a$10$1TK.XrzQYTVGPmb4mpY.d.PVzDtIdEofYfILJIeffU.tgmUjooMdG', 1, NULL, NULL),
(3, 'Diego', 'escobar', 'bonnie@gmail.com', 'usuario-1652404247614.webp', '$2a$10$yru8XryOhg4ARCw3c2m5Ruvh1I9f/GeLCENa4AZ/1tAWwhgtGVWW2', 1, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorymascotas`
--
ALTER TABLE `categorymascotas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoryproductos`
--
ALTER TABLE `categoryproductos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_69983fc1-b1e8-4efe-9fc2-27972fb5d506` (`categoryMascotas_id`),
  ADD KEY `FK_f2bb08ef-ff20-461a-b2ce-eba8d466eaf6` (`categoryProductos_id`);

--
-- Indices de la tabla `productsusers`
--
ALTER TABLE `productsusers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_0fa32fc0-8525-4beb-a6b2-e3b4587d0128` (`products_id`),
  ADD KEY `FK_f55b150d-7e34-4df2-ae3d-3d5caf144e1c` (`user_id`);

--
-- Indices de la tabla `usercategory`
--
ALTER TABLE `usercategory`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `userlog`
--
ALTER TABLE `userlog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ae0fae2c-bddc-43e1-92d7-241e64d39e50` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_0fac84bd-4110-4610-af56-5a1b7486d092` (`userCategory_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorymascotas`
--
ALTER TABLE `categorymascotas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categoryproductos`
--
ALTER TABLE `categoryproductos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `productsusers`
--
ALTER TABLE `productsusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usercategory`
--
ALTER TABLE `usercategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `userlog`
--
ALTER TABLE `userlog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_69983fc1-b1e8-4efe-9fc2-27972fb5d506` FOREIGN KEY (`categoryMascotas_id`) REFERENCES `categorymascotas` (`id`),
  ADD CONSTRAINT `FK_f2bb08ef-ff20-461a-b2ce-eba8d466eaf6` FOREIGN KEY (`categoryProductos_id`) REFERENCES `categoryproductos` (`id`);

--
-- Filtros para la tabla `productsusers`
--
ALTER TABLE `productsusers`
  ADD CONSTRAINT `FK_0fa32fc0-8525-4beb-a6b2-e3b4587d0128` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_f55b150d-7e34-4df2-ae3d-3d5caf144e1c` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `userlog`
--
ALTER TABLE `userlog`
  ADD CONSTRAINT `FK_ae0fae2c-bddc-43e1-92d7-241e64d39e50` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_0fac84bd-4110-4610-af56-5a1b7486d092` FOREIGN KEY (`userCategory_id`) REFERENCES `usercategory` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
