CREATE TABLE `usuario` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `apellido` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);


INSERT INTO `usuario` (`id`, `apellido`, `email`, `nombre`, `password`, `username`) VALUES (1,	'Martín',	'pepe@sincorreo.com',	'Pepe',	'$2a$10$PMDCjYqXJxGsVlnve1t9Jug2DkDDckvUDl8.vF4Dc6yg0FMjovsXO',	'pepe');
INSERT INTO `usuario` (`id`, `apellido`, `email`, `nombre`, `password`, `username`) VALUES (2,	'Sin Miedo',	'obijuan@sincorreo.es',	'Juan',	'$2a$10$PMDCjYqXJxGsVlnve1t9Jug2DkDDckvUDl8.vF4Dc6yg0FMjovsXO',	'obijuan');
INSERT INTO `usuario` (`id`, `username`, `nombre`, `email`, `password`, `apellido`) VALUES (3, 'juanito', 'Juanito', 'juan.perez@email.com', '$2a$10$PMDCjYqXJxGsVlnve1t9Jug2DkDDckvUDl8.vF4Dc6yg0FMjovsXO', 'pulgarcito');