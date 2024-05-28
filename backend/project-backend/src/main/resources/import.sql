INSERT INTO `usuario`(`nombre`, `username`, `password`, `correo`, `telefono`) VALUES ('Juan Perez', 'juanpe', 'password123', 'juan.perez@example.com', '600123456');
INSERT INTO `usuario`(`nombre`, `username`, `password`, `correo`, `telefono`) VALUES ('Maria Garcia', 'mery', 'securePass456', 'maria.garcia@example.com', '600654321');
INSERT INTO `usuario`(`nombre`, `username`, `password`, `correo`, `telefono`) VALUES ('Carlos Lopez', 'carpe', 'myPassword789', 'carlos.lopez@example.com', '600987654');

INSERT INTO `bar`(`nombre`, `provincia`, `ciudad`, `direccion`, `calificacion`, `telefono`, `correo`, `imagen`) VALUES ('Cafe Central', 'Madrid', 'Madrid', 'Plaza del Ángel 10', 4, '912345678', 'barcentral@example.com', 'https://estaticos.esmadrid.com/cdn/farfuture/M-8XcZK-17wx1LKHLuyAyogv2ZTIfRCYeXznSVOD7es/mtime:1620137342/sites/default/files/recursosturisticos/noche/cafe_central.jpg');
INSERT INTO `bar`(`nombre`, `provincia`, `ciudad`, `direccion`, `calificacion`, `telefono`, `correo`, `imagen`) VALUES ('La Taverna', 'Barcelona', 'Barcelona', 'Ronda de la Universidad 37', 4, '933 017653', 'lataberna@example.com', 'https://lh3.googleusercontent.com/p/AF1QipP-5rnICcvvEsw0MEbZE1QwmzYNfVzRMHslwM6z=s680-w680-h510-rw');
INSERT INTO `bar`(`nombre`, `provincia`, `ciudad`, `direccion`, `calificacion`, `telefono`, `correo`, `imagen`) VALUES ('El Rincon', 'Valencia', 'Valencia', 'Avenida Blasco Ibañez 115', 4, '963710832', 'elrincon@example.com', 'https://media-cdn.tripadvisor.com/media/photo-s/07/75/15/4c/cerveceria-el-rincon.jpg');
INSERT INTO `bar`(`nombre`, `provincia`, `ciudad`, `direccion`, `calificacion`, `telefono`, `correo`, `imagen`) VALUES ('Bar El Baratillo', 'Sevilla', 'Sevilla', 'Calle Adriano 20', 4, '954219143', 'cafemoderno@example.com', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/b5/d4/86/bar-el-baratillo.jpg?w=600&h=-1&s=1');
INSERT INTO `bar`(`nombre`, `provincia`, `ciudad`, `direccion`, `calificacion`, `telefono`, `correo`, `imagen`) VALUES ('Bar Antigua Cigarreria', 'Bilbao', 'Bilbao', 'Astarloa Kalea 5', 4, '944248973', 'bodegaantigua@example.com', 'https://verybilbao.com/wp-content/uploads/2016/09/antigua-cigarreria-1-1024x542.jpg');

INSERT INTO `reserva`(`usuario_id`, `bar_id`, `comensales`, `fecha`, `hora`) VALUES (1, 1, '1', '2024-06-15', '20:00');
INSERT INTO `reserva`(`usuario_id`, `bar_id`, `comensales`, `fecha`, `hora`) VALUES (2, 2, '2', '2024-06-16', '21:00');
INSERT INTO `reserva`(`usuario_id`, `bar_id`, `comensales`, `fecha`, `hora`) VALUES (3, 3, '3', '2024-06-17', '19:30');
INSERT INTO `reserva`(`usuario_id`, `bar_id`, `comensales`, `fecha`, `hora`) VALUES (1, 4, '5', '2024-06-18', '18:00');
INSERT INTO `reserva`(`usuario_id`, `bar_id`, `comensales`, `fecha`, `hora`) VALUES (2, 5, '6', '2024-06-19', '20:30');
