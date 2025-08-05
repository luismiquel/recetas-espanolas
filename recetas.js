// recetas.js
const recetas = [
  { categoria: 'aperitivos', titulo: 'Tortilla Española', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Tortilla_de_patatas.jpg', descripcion: 'Tortilla de patatas clásica con cebolla.', ingredientes: ['4 huevos','500 g de patatas','1 cebolla','Aceite','Sal'], instrucciones: ['Pelar y cortar patatas y cebolla','Freír a fuego medio','Batir los huevos','Mezclar con patata y cuajar','Servir caliente'], tiempo: 30, dificultad: 'Media', fav: false },
  { categoria: 'aperitivos', titulo: 'Boquerones en Vinagre', img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Boquerones_en_vinagre.jpg', descripcion: 'Boquerones frescos marinados en vinagre.', ingredientes: ['500 g de boquerones','250 ml de vinagre','2 dientes de ajo','Perejil','Aceite','Sal'], instrucciones: ['Limpiar boquerones','Marinar en vinagre 1h','Escurrir','Aliñar con ajo picado y perejil','Añadir aceite'], tiempo: 60, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Patatas Bravas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Patates_braves.jpg/800px-Patates_braves.jpg', descripcion: 'Patatas fritas con una salsa picante especial.', ingredientes: ['4 patatas','Aceite para freír','Sal','Salsa brava'], instrucciones: ['Pelar y cortar las patatas','Freír en aceite caliente','Escurrir y salar','Servir con salsa brava por encima'], tiempo: 25, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Gambas al Ajillo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gambas-al-ajillo.jpg/800px-Gambas-al-ajillo.jpg', descripcion: 'Gambas salteadas en aceite de oliva con ajo y guindilla.', ingredientes: ['500 g de gambas peladas','4 dientes de ajo','Guindilla','Aceite de oliva','Perejil'], instrucciones: ['Calentar aceite en cazuela de barro','Sofreír el ajo y la guindilla','Añadir las gambas y cocinar','Espolvorear con perejil','Servir muy caliente'], tiempo: 15, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Croquetas de Jamón', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Croquetas_de_jam%C3%B3n.jpg/800px-Croquetas_de_jam%C3%B3n.jpg', descripcion: 'Cremosas croquetas caseras de jamón serrano.', ingredientes: ['100 g de jamón serrano picado','50 g de mantequilla','50 g de harina','500 ml de leche','Nuez moscada','Huevo','Pan rallado','Aceite para freír'], instrucciones: ['Hacer la bechamel con mantequilla, harina y leche','Añadir el jamón y especias','Dejar enfriar y formar las croquetas','Pasar por huevo y pan rallado','Freír en abundante aceite'], tiempo: 90, dificultad: 'Media', fav: false },
  { categoria: 'aperitivos', titulo: 'Pulpo a la Gallega', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pulpo_a_feira_%28cropped%29.jpg/800px-Pulpo_a_feira_%28cropped%29.jpg', descripcion: 'Tierno pulpo cocido y aliñado con pimentón, sal gorda y aceite de oliva.', ingredientes: ['1 pulpo de 1.5 kg','2 patatas grandes','Pimentón dulce','Pimentón picante','Aceite de oliva virgen extra','Sal gorda'], instrucciones: ['Congelar y descongelar el pulpo','Cocinar el pulpo en agua hirviendo','Cortar en rodajas','Cocer las patatas','Servir el pulpo sobre las patatas','Aliñar con sal gorda, pimentón y aceite'], tiempo: 90, dificultad: 'Media', fav: false },
  { categoria: 'aperitivos', titulo: 'Ensaladilla Rusa', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ensaladilla_rusa.jpg/800px-Ensaladilla_rusa.jpg', descripcion: 'Ensaladilla con patata, atún, guisantes, zanahoria y mahonesa.', ingredientes: ['3 patatas','2 zanahorias','1 lata de atún','100 g de guisantes','Mahonesa','Huevos cocidos','Aceitunas'], instrucciones: ['Cocer las patatas y zanahorias','Hacer una mahonesa','Mezclar con el atún, guisantes y huevos','Cubrir con mahonesa y decorar con aceitunas'], tiempo: 45, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Pinchos de Chistorra', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Pinchos_de_chistorra.jpg/800px-Pinchos_de_chistorra.jpg', descripcion: 'Chistorra frita sobre rebanadas de pan.', ingredientes: ['1 chistorra','Pan','Aceite'], instrucciones: ['Cortar la chistorra en trozos','Freír en una sartén','Tostar el pan','Colocar un trozo de chistorra sobre cada rebanada'], tiempo: 15, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Pimientos de Padrón', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pimientos_de_Padr%C3%B3n.jpg/800px-Pimientos_de_Padr%C3%B3n.jpg', descripcion: 'Pimientos fritos, "unos pican y otros no".', ingredientes: ['500 g de pimientos de Padrón','Aceite de oliva','Sal gorda'], instrucciones: ['Lavar y secar los pimientos','Freír en aceite caliente hasta que estén arrugados','Sacar, escurrir el exceso de aceite y salar'], tiempo: 10, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Calamares a la Romana', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Calamares_a_la_romana_2.jpg/800px-Calamares_a_la_romana_2.jpg', descripcion: 'Aros de calamar rebozados y fritos.', ingredientes: ['1 kg de calamares','Harina de trigo','1 huevo','Sal','Aceite para freír'], instrucciones: ['Limpiar los calamares y cortarlos en aros','Rebozar en harina, huevo y de nuevo en harina','Freír en abundante aceite caliente','Servir con limón'], tiempo: 20, dificultad: 'Media', fav: false },
  { categoria: 'aperitivos', titulo: 'Champiñones al Ajillo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Champiñones_al_ajillo.jpg/800px-Champiñones_al_ajillo.jpg', descripcion: 'Champiñones salteados con ajo y perejil.', ingredientes: ['500 g de champiñones','4 dientes de ajo','Perejil','Vino blanco','Aceite de oliva','Sal'], instrucciones: ['Laminar los champiñones','Sofreír el ajo picado','Añadir los champiñones y cocinar hasta que suelten el agua','Añadir el vino y el perejil'], tiempo: 20, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Gildas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Gilda_pintxo.jpg/800px-Gilda_pintxo.jpg', descripcion: 'Pintxo de aceituna, anchoa y guindilla.', ingredientes: ['Aceitunas','Anchoas en salazón','Guindillas en vinagre'], instrucciones: ['Ensartar en un palillo una aceituna, una guindilla y una anchoa','Servir frías'], tiempo: 5, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Salpicón de Marisco', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Salpicon_de_marisco.jpg/800px-Salpicon_de_marisco.jpg', descripcion: 'Ensalada fría de mariscos y verduras picadas.', ingredientes: ['200 g de gambas cocidas','200 g de pulpo cocido','1 cebolla','1 pimiento verde','1 pimiento rojo','Aceite','Vinagre','Sal'], instrucciones: ['Picar finamente las verduras y los mariscos','Mezclar todo en un bol','Aliñar con aceite, vinagre y sal','Dejar enfriar en la nevera'], tiempo: 20, dificultad: 'Fácil', fav: false },
  { categoria: 'aperitivos', titulo: 'Mejillones al Vapor', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mejillones_al_vapor.jpg/800px-Mejillones_al_vapor.jpg', descripcion: 'Mejillones frescos cocidos al vapor con limón.', ingredientes: ['1 kg de mejillones','1 limón','Vino blanco','Perejil'], instrucciones: ['Limpiar los mejillones','Cocerlos al vapor con vino blanco','Añadir limón y perejil','Servir calientes'], tiempo: 15, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Gazpacho Andaluz', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Gazpacho.jpg/800px-Gazpacho.jpg', descripcion: 'Sopa fría de tomate, pepino, pimiento y pan.', ingredientes: ['1 kg de tomates maduros','1 pepino','1 pimiento verde','1/2 cebolla','1 diente de ajo','Pan duro','Aceite de oliva','Vinagre','Sal'], instrucciones: ['Lavar y trocear las verduras','Triturar todos los ingredientes en una batidora','Pasar por un colador','Enfriar en la nevera','Servir muy frío'], tiempo: 20, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Salmorejo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Salmorejo_cordob%C3%A9s.jpg/800px-Salmorejo_cordob%C3%A9s.jpg', descripcion: 'Crema fría y espesa de tomate y pan, típica de Córdoba.', ingredientes: ['1 kg de tomates maduros','200 g de pan de telera','100 ml de aceite de oliva','1 diente de ajo','Sal','Jamón serrano picado','Huevo cocido'], instrucciones: ['Triturar los tomates y el ajo','Añadir el pan, el aceite y la sal','Triturar de nuevo hasta obtener una crema espesa','Enfriar y servir con jamón y huevo picado'], tiempo: 25, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Sopa de Ajo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sopa_de_ajo_2.jpg/800px-Sopa_de_ajo_2.jpg', descripcion: 'Sopa castellana con ajo, pan y pimentón.', ingredientes: ['5 dientes de ajo','200 g de pan duro','Pimentón','Caldo de carne','Aceite de oliva','Huevo'], instrucciones: ['Sofreír el ajo laminado','Añadir el pan y el pimentón','Cubrir con caldo y cocinar','Escalfar un huevo y servir'], tiempo: 25, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Lentejas a la Española', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lentejas_con_chorizo.jpg/800px-Lentejas_con_chorizo.jpg', descripcion: 'Estofado de lentejas con chorizo y verduras.', ingredientes: ['300 g de lentejas','1 chorizo','1 zanahoria','1 cebolla','1 pimiento','Ajo','Pimentón','Aceite','Caldo de verduras'], instrucciones: ['Pochar las verduras','Añadir las lentejas, el chorizo y el pimentón','Cubrir con caldo y cocinar a fuego lento'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'primer-plato', titulo: 'Pisto Manchego', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pisto_manchego.jpg/800px-Pisto_manchego.jpg', descripcion: 'Revuelto de verduras (tomate, pimiento, calabacín y cebolla).', ingredientes: ['1 calabacín','1 pimiento rojo','1 cebolla','5 tomates','Aceite','Sal','Azúcar'], instrucciones: ['Sofreír todas las verduras por separado','Unir en una cazuela','Añadir el tomate y cocinar a fuego lento'], tiempo: 45, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Judías Verdes con Jamón', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jud%C3%ADas_verdes_con_jam%C3%B3n.jpg/800px-Jud%C3%ADas_verdes_con_jam%C3%B3n.jpg', descripcion: 'Judías verdes salteadas con dados de jamón serrano.', ingredientes: ['500 g de judías verdes','150 g de jamón serrano en taquitos','2 dientes de ajo','Aceite de oliva','Sal'], instrucciones: ['Cocer las judías verdes','Sofreír el ajo y el jamón','Añadir las judías cocidas y saltear'], tiempo: 30, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Arroz a Banda', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Arroz_a_banda.jpg/800px-Arroz_a_banda.jpg', descripcion: 'Arroz cocinado en un caldo de pescado y marisco.', ingredientes: ['400 g de arroz','1 kg de morralla para caldo','200 g de sepia','100 g de gambas','Aceite','Ajo','Tomate triturado','Pimentón'], instrucciones: ['Hacer un fumet con el pescado','Sofreír el marisco con ajo y tomate','Añadir el arroz y el fumet','Cocinar hasta que el arroz esté en su punto'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'primer-plato', titulo: 'Escalivada', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Escalivada_catalana.jpg/800px-Escalivada_catalana.jpg', descripcion: 'Verduras asadas (berenjena, pimiento, cebolla) aliñadas con aceite.', ingredientes: ['2 berenjenas','2 pimientos rojos','1 cebolla','Aceite de oliva','Sal'], instrucciones: ['Asar las verduras en el horno','Pelarlas y cortarlas en tiras','Aliñar con aceite y sal'], tiempo: 75, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Crema de Calabaza', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Crema_de_calabaza.jpg/800px-Crema_de_calabaza.jpg', descripcion: 'Suave crema de calabaza con un toque de nata.', ingredientes: ['1 kg de calabaza','1 cebolla','Caldo de verduras','Nata líquida','Aceite de oliva','Sal'], instrucciones: ['Sofreír la cebolla','Añadir la calabaza troceada y el caldo','Cocer hasta que la calabaza esté tierna','Triturar y añadir la nata'], tiempo: 40, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Migas Extremeñas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Migas_extreme%C3%B1as.jpg/800px-Migas_extreme%C3%B1as.jpg', descripcion: 'Plato rural con pan, ajo, chorizo y pimiento frito.', ingredientes: ['1 pan de pueblo','200 g de panceta','1 chorizo','Pimientos verdes','Ajos','Aceite','Sal'], instrucciones: ['Humedecer el pan y dejar reposar','Sofreír el ajo, panceta, chorizo y pimientos','Añadir el pan desmigado y cocinar removiendo'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'primer-plato', titulo: 'Ensalada de Tomate con Ventresca', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ensalada_de_tomate_con_ventresca.jpg/800px-Ensalada_de_tomate_con_ventresca.jpg', descripcion: 'Ensalada simple y fresca con tomate, cebolla, ventresca y aceite de oliva.', ingredientes: ['4 tomates maduros','1 cebolleta','1 lata de ventresca','Aceite de oliva','Sal'], instrucciones: ['Cortar los tomates en rodajas y la cebolla en juliana','Disponer en un plato','Colocar la ventresca encima','Aliñar con aceite y sal'], tiempo: 10, dificultad: 'Fácil', fav: false },
  { categoria: 'primer-plato', titulo: 'Cocido Madrileño', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Cocido_madrile%C3%B1o_en_tres_vuelcos.jpg/800px-Cocido_madrile%C3%B1o_en_tres_vuelcos.jpg', descripcion: 'Guiso de garbanzos con verduras, carne y embutidos.', ingredientes: ['500 g de garbanzos','Morcillo','Chorizo','Morcilla','Tocino','Gallina','Zanahorias','Patatas','Repollo'], instrucciones: ['Remojar los garbanzos','Cocer las carnes con los garbanzos','Añadir las verduras','Servir en tres vuelcos: sopa, garbanzos y verduras, y carnes'], tiempo: 240, dificultad: 'Difícil', fav: false },
  { categoria: 'primer-plato', titulo: 'Sopa de Pescado y Marisco', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sopa_de_pescado_y_marisco.jpg/800px-Sopa_de_pescado_y_marisco.jpg', descripcion: 'Sopa marinera con trozos de pescado y marisco.', ingredientes: ['500 g de pescado','200 g de gambas','1 calamar','1 cebolla','2 dientes de ajo','Tomate frito','Pan duro','Caldo de pescado','Pimentón'], instrucciones: ['Sofreír el ajo y la cebolla','Añadir el calamar y el pescado','Incorporar el tomate, el pimentón y el caldo','Cocer, triturar parte del pan y añadir las gambas'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'primer-plato', titulo: 'Crema de Marisco', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Crema_de_marisco.jpg/800px-Crema_de_marisco.jpg', descripcion: 'Crema fina y elegante de marisco, ideal para celebraciones.', ingredientes: ['500 g de marisco (gambas, langostinos)','1 cebolla','2 puerros','2 tomates','Brandy','Caldo de pescado','Nata','Arroz'], instrucciones: ['Sofreír las verduras','Añadir el marisco y flambeado con brandy','Añadir el arroz y el caldo','Triturar y pasar por un chino','Servir con un toque de nata'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Paella Valenciana', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Paella_de_marisco.jpg/800px-Paella_de_marisco.jpg', descripcion: 'El plato español por excelencia, con pollo, conejo y verduras.', ingredientes: ['400 g de arroz redondo','Pollo','Conejo','Judías verdes','Garrofón','Tomate triturado','Azafrán','Aceite','Caldo'], instrucciones: ['Sofreír el pollo y el conejo','Añadir las verduras y el tomate','Incorporar el arroz, el azafrán y el caldo','Cocinar hasta que el arroz esté en su punto'], tiempo: 90, dificultad: 'Difícil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Cochinillo Asado', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cochinillo_segoviano.jpg/800px-Cochinillo_segoviano.jpg', descripcion: 'Asado de cochinillo con la piel crujiente.', ingredientes: ['1 cochinillo','Sal','Agua','Manteca de cerdo'], instrucciones: ['Salpimentar el cochinillo','Hornear a fuego lento con la piel hacia arriba','Subir la temperatura al final para que la piel se dore'], tiempo: 180, dificultad: 'Difícil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Cordero Asado', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pierna_de_cordero_asada.jpg/800px-Pierna_de_cordero_asada.jpg', descripcion: 'Pierna de cordero al horno con patatas.', ingredientes: ['1 pierna de cordero','Patatas','Ajo','Romero','Vino blanco','Aceite de oliva','Sal'], instrucciones: ['Adobar el cordero con ajo, romero, sal y aceite','Colocar en una bandeja con patatas y vino','Hornear lentamente hasta que esté tierno'], tiempo: 150, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Bacalao a la Vizcaína', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bacalao_a_la_vizca%C3%ADna.jpg/800px-Bacalao_a_la_vizca%C3%ADna.jpg', descripcion: 'Bacalao en salsa de pimientos choriceros y cebolla.', ingredientes: ['4 lomos de bacalao desalado','Pimientos choriceros','Cebolla','Ajo','Aceite de oliva'], instrucciones: ['Sofreír la cebolla y el ajo','Añadir los pimientos choriceros y el bacalao','Cocinar a fuego lento'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Marmitako', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Marmitako.jpg/800px-Marmitako.jpg', descripcion: 'Estofado de bonito y patatas, plato marinero del País Vasco.', ingredientes: ['Bonito fresco','Patatas','Pimientos verdes','Cebolla','Tomate','Caldo de pescado','Pimentón'], instrucciones: ['Sofreír las verduras','Añadir el pimentón y el tomate','Incorporar las patatas y el caldo','Cocer hasta que las patatas estén tiernas y añadir el bonito'], tiempo: 45, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Fabada Asturiana', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Fabada_asturiana_%284%29.jpg/800px-Fabada_asturiana_%284%29.jpg', descripcion: 'Potente guiso de fabes con chorizo, morcilla y tocino.', ingredientes: ['500 g de fabes','1 chorizo','1 morcilla','Tocino','Panceta','Cebolla','Ajo'], instrucciones: ['Remojar las fabes la noche anterior','Cocer las fabes con el compango','Añadir un sofrito de cebolla y ajo','Cocinar a fuego lento por horas'], tiempo: 180, dificultad: 'Difícil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Almejas a la Marinera', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Almejas_a_la_marinera_2.jpg/800px-Almejas_a_la_marinera_2.jpg', descripcion: 'Almejas cocinadas en una salsa de vino blanco y ajo.', ingredientes: ['1 kg de almejas','2 dientes de ajo','Vino blanco','Harina','Perejil','Aceite'], instrucciones: ['Limpiar bien las almejas','Sofreír el ajo y añadir la harina','Incorporar el vino blanco y el perejil','Añadir las almejas y tapar hasta que se abran'], tiempo: 20, dificultad: 'Fácil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Conejo al Ajillo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Conejo_al_ajillo_2.jpg/800px-Conejo_al_ajillo_2.jpg', descripcion: 'Trozos de conejo dorados en aceite con mucho ajo.', ingredientes: ['1 conejo troceado','1 cabeza de ajos','Vino blanco','Aceite de oliva','Romero','Tomillo'], instrucciones: ['Dorar el conejo en aceite','Añadir los ajos y el vino','Cocer a fuego lento con romero y tomillo'], tiempo: 50, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Arroz con Bogavante', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Arroz_con_bogavante.jpg/800px-Arroz_con_bogavante.jpg', descripcion: 'Arroz caldoso con bogavante, un manjar de marisco.', ingredientes: ['1 bogavante','400 g de arroz','Caldo de pescado','Cebolla','Pimiento','Ajo','Tomate triturado','Azafrán'], instrucciones: ['Hacer un sofrito con las verduras','Añadir el arroz y el bogavante troceado','Incorporar el caldo y el azafrán','Cocinar hasta que el arroz esté en su punto'], tiempo: 60, dificultad: 'Difícil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Caldereta de Cordero', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Caldereta_de_cordero.jpg/800px-Caldereta_de_cordero.jpg', descripcion: 'Estofado de cordero con verduras y vino tinto.', ingredientes: ['1 kg de cordero para guisar','Patatas','Cebolla','Pimiento','Zanahoria','Vino tinto','Caldo de carne'], instrucciones: ['Dorar el cordero','Sofreír las verduras','Añadir el cordero, el vino y el caldo','Cocer a fuego lento hasta que el cordero esté tierno'], tiempo: 120, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Callos a la Madrileña', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Callos_a_la_madrile%C3%B1a.jpg/800px-Callos_a_la_madrile%C3%B1a.jpg', descripcion: 'Guiso tradicional de tripas de ternera con chorizo y morcilla.', ingredientes: ['1 kg de callos de ternera','200 g de chorizo','150 g de morcilla','1 cebolla','Ajo','Pimentón','Caldo de carne','Guindilla'], instrucciones: ['Limpiar y cocer los callos','Sofreír cebolla y ajo','Añadir chorizo, morcilla y pimentón','Mezclar todo y cocinar a fuego lento'], tiempo: 180, dificultad: 'Difícil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Rabo de Toro', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Rabo_de_toro_cocido.jpg/800px-Rabo_de_toro_cocido.jpg', descripcion: 'Estofado de rabo de toro con verduras y vino tinto.', ingredientes: ['1.5 kg de rabo de toro','2 cebollas','2 zanahorias','1 puerro','Vino tinto','Caldo de carne','Harina','Aceite','Sal'], instrucciones: ['Enharinar y dorar el rabo','Sofreír las verduras','Añadir el rabo y el vino tinto','Cocer a fuego lento por varias horas'], tiempo: 240, dificultad: 'Difícil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Merluza a la Vasca', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Merluza_en_salsa_verde.jpg/800px-Merluza_en_salsa_verde.jpg', descripcion: 'Merluza en salsa verde con almejas y guisantes.', ingredientes: ['4 lomos de merluza','1 kg de almejas','Guisantes','Harina','Vino blanco','Ajo','Perejil','Aceite'], instrucciones: ['Sofreír el ajo picado','Añadir harina y vino','Incorporar el perejil, la merluza, las almejas y los guisantes','Cocinar hasta que las almejas se abran'], tiempo: 40, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Huevos a la Flamenca', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Huevos_a_la_flamenca_en_cazuela_de_barro.jpg/800px-Huevos_a_la_flamenca_en_cazuela_de_barro.jpg', descripcion: 'Huevos horneados sobre un lecho de pisto, jamón y chorizo.', ingredientes: ['4 huevos','Pisto','Jamón serrano en taquitos','Chorizo en rodajas','Aceite de oliva','Sal'], instrucciones: ['Poner el pisto en cazuelas de barro','Añadir el jamón y el chorizo','Hacer un hueco en el centro y añadir el huevo','Hornear hasta que la clara esté cuajada'], tiempo: 30, dificultad: 'Fácil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Fideuá de Mariscos', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fideua_de_marisco.jpg/800px-Fideua_de_marisco.jpg', descripcion: 'Plato similar a la paella, pero con fideos en lugar de arroz.', ingredientes: ['400 g de fideos','1 calamar','150 g de gambas','Caldo de pescado','Cebolla','Pimiento','Ajo','Tomate','Pimentón','Aceite'], instrucciones: ['Hacer un sofrito con verduras y marisco','Añadir los fideos y tostarlos','Incorporar el caldo y cocinar hasta que los fideos estén en su punto'], tiempo: 45, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Pollo al Ajillo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pollo_al_ajillo.jpg/800px-Pollo_al_ajillo.jpg', descripcion: 'Trozos de pollo dorados en aceite con ajo y hierbas aromáticas.', ingredientes: ['1 pollo troceado','1 cabeza de ajos','Vino blanco','Romero','Tomillo','Aceite de oliva','Sal'], instrucciones: ['Dorar el pollo en aceite','Añadir los ajos y el vino','Cocer a fuego lento con romero y tomillo'], tiempo: 50, dificultad: 'Fácil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Ternera a la Jardinera', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ternera_a_la_jardinera.jpg/800px-Ternera_a_la_jardinera.jpg', descripcion: 'Estofado de ternera con verduras frescas.', ingredientes: ['1 kg de ternera para guisar','2 zanahorias','1 cebolla','2 patatas','Guisantes','Vino blanco','Caldo de carne'], instrucciones: ['Dorar la ternera','Sofreír las verduras','Añadir la ternera, el vino y el caldo','Cocer a fuego lento hasta que la carne esté tierna'], tiempo: 120, dificultad: 'Media', fav: false },
  { categoria: 'segundo-plato', titulo: 'Atún con Tomate', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Atun_con_tomate.jpg/800px-Atun_con_tomate.jpg', descripcion: 'Lomos de atún cocinados en una salsa casera de tomate.', ingredientes: ['4 lomos de atún fresco','1 kg de tomates maduros','1 cebolla','Ajo','Aceite de oliva','Azúcar','Sal'], instrucciones: ['Sofreír la cebolla y el ajo','Añadir el tomate triturado y cocinar la salsa','Incorporar los lomos de atún','Cocer unos minutos y servir'], tiempo: 30, dificultad: 'Fácil', fav: false },
  { categoria: 'segundo-plato', titulo: 'Chipirones en su Tinta', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chipirones_en_su_tinta.jpg/800px-Chipirones_en_su_tinta.jpg', descripcion: 'Guiso de chipirones en su propia tinta, un plato típico del norte.', ingredientes: ['1 kg de chipirones','1 cebolla','1 pimiento','Tomate triturado','Vino blanco','Tinta de calamar','Arroz para acompañar'], instrucciones: ['Limpiar los chipirones y reservar la tinta','Hacer un sofrito de cebolla y pimiento','Añadir los chipirones y el vino','Disolver la tinta y añadirla al guiso','Cocer a fuego lento'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Crema Catalana', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Crema_catalana.jpg/800px-Crema_catalana.jpg', descripcion: 'Postre cremoso con base de huevo y leche, cubierto con azúcar caramelizado.', ingredientes: ['1 litro de leche','8 yemas de huevo','200 g de azúcar','40 g de maicena','Corteza de limón','Canela en rama'], instrucciones: ['Calentar la leche con la canela y el limón','Mezclar yemas, azúcar y maicena','Incorporar la leche y cocer a fuego lento','Servir en cuencos y quemar el azúcar por encima'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Arroz con Leche', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Arroz_con_leche.jpg/800px-Arroz_con_leche.jpg', descripcion: 'Postre clásico de arroz cocido en leche con canela y limón.', ingredientes: ['200 g de arroz','1 litro de leche','150 g de azúcar','Corteza de limón','Canela en rama','Canela en polvo'], instrucciones: ['Cocer el arroz con la corteza de limón y la canela','Añadir la leche poco a poco','Incorporar el azúcar al final','Servir frío espolvoreado con canela'], tiempo: 90, dificultad: 'Fácil', fav: false },
  { categoria: 'postre', titulo: 'Tarta de Santiago', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tarta_de_santiago.jpg/800px-Tarta_de_santiago.jpg', descripcion: 'Tarta tradicional gallega a base de almendras, huevos y azúcar.', ingredientes: ['250 g de almendras molidas','5 huevos','250 g de azúcar','Ralladura de limón','Azúcar glas'], instrucciones: ['Mezclar todos los ingredientes','Verter en un molde','Hornear a 180°C durante 40 minutos','Espolvorear con azúcar glas'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Flan de Huevo', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flan_de_huevo.jpg/800px-Flan_de_huevo.jpg', descripcion: 'Postre de huevo, leche y azúcar, con una capa de caramelo líquido.', ingredientes: ['4 huevos','500 ml de leche','150 g de azúcar','Caramelo líquido'], instrucciones: ['Hacer el caramelo y ponerlo en el molde','Batir los huevos con la leche y el azúcar','Verter en el molde','Cocer al baño María en el horno'], tiempo: 75, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Leche Frita', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Leche_frita_con_canela.jpg/800px-Leche_frita_con_canela.jpg', descripcion: 'Postre de trozos de leche fritos rebozados en azúcar y canela.', ingredientes: ['500 ml de leche','50 g de harina','50 g de maicena','100 g de azúcar','Canela en rama','Corteza de limón','Huevo','Pan rallado','Canela en polvo'], instrucciones: ['Hacer una crema con la leche y los demás ingredientes','Dejar enfriar y solidificar','Cortar en porciones, rebozar y freír','Espolvorear con azúcar y canela'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Torrijas', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Torrijas.jpg/800px-Torrijas.jpg', descripcion: 'Rebanadas de pan empapadas en leche y fritas, típicas de Semana Santa.', ingredientes: ['1 barra de pan duro','500 ml de leche','100 g de azúcar','1 huevo','Aceite para freír','Canela en rama','Corteza de limón'], instrucciones: ['Calentar la leche con la canela, el limón y la mitad del azúcar','Empapar el pan en la leche','Pasar por huevo batido y freír','Rebozar en azúcar y canela'], tiempo: 45, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Bizcocho de Yogur', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bizcocho_de_yogur.jpg/800px-Bizcocho_de_yogur.jpg', descripcion: 'Bizcocho casero y esponjoso con yogur natural.', ingredientes: ['1 yogur natural','3 huevos','2 medidas de azúcar','3 medidas de harina','1 medida de aceite','1 sobre de levadura','Ralladura de limón'], instrucciones: ['Mezclar todos los ingredientes en un bol','Verter en un molde engrasado','Hornear a 180°C durante 30-40 minutos'], tiempo: 50, dificultad: 'Fácil', fav: false },
  { categoria: 'postre', titulo: 'Natillas Caseras', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Natillas_con_galleta.jpg/800px-Natillas_con_galleta.jpg', descripcion: 'Clásicas natillas de huevo y leche con galleta.', ingredientes: ['1 litro de leche','5 yemas de huevo','150 g de azúcar','40 g de maicena','Canela en rama','Corteza de limón','Galletas María'], instrucciones: ['Calentar la leche con canela y limón','Mezclar yemas, azúcar y maicena','Incorporar la leche y cocer a fuego lento','Servir con una galleta por encima'], tiempo: 35, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Pestiños de Miel', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pesti%C3%B1os_de_miel.jpg/800px-Pesti%C3%B1os_de_miel.jpg', descripcion: 'Dulce frito con forma de lazo bañado en miel.', ingredientes: ['250 g de harina','50 ml de aceite de oliva','Anís','Ajonjolí','Miel','Aceite para freír'], instrucciones: ['Hacer una masa con la harina, aceite, anís y ajonjolí','Formar lazos y freír','Bañar en miel caliente'], tiempo: 45, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Brazo de Gitano de Nata', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Brazo_de_gitano.jpg/800px-Brazo_de_gitano.jpg', descripcion: 'Pastel enrollado de bizcocho genovés relleno de nata montada.', ingredientes: ['4 huevos','120 g de azúcar','120 g de harina','250 ml de nata para montar','Azúcar glas'], instrucciones: ['Hacer el bizcocho y extenderlo en una bandeja','Montar la nata con azúcar','Untar la nata sobre el bizcocho y enrollar','Decorar con azúcar glas'], tiempo: 60, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Quesada Pasiega', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Quesada_pasiega.jpg/800px-Quesada_pasiega.jpg', descripcion: 'Postre de Cantabria a base de cuajada, mantequilla y limón.', ingredientes: ['500 g de queso fresco o cuajada','150 g de azúcar','100 g de harina','3 huevos','70 g de mantequilla','Ralladura de limón'], instrucciones: ['Mezclar todos los ingredientes con batidora','Verter la mezcla en un molde','Hornear a 180°C durante 40 minutos'], tiempo: 50, dificultad: 'Fácil', fav: false },
  { categoria: 'postre', titulo: 'Tarta de la Abuela', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tarta_de_la_abuela.jpg/800px-Tarta_de_la_abuela.jpg', descripcion: 'Postre con capas de galletas, crema pastelera y chocolate.', ingredientes: ['Galletas','Crema pastelera','Chocolate de postres','Leche','Azúcar'], instrucciones: ['Mojar las galletas en leche y colocarlas como base','Alternar capas de galletas, crema y chocolate','Dejar enfriar en la nevera por varias horas'], tiempo: 45, dificultad: 'Fácil', fav: false },
  { categoria: 'postre', titulo: 'Buñuelos de Viento', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Buñuelos_de_viento.jpg/800px-Buñuelos_de_viento.jpg', descripcion: 'Bollos fritos de masa ligera, espolvoreados con azúcar.', ingredientes: ['125 g de harina','125 ml de agua','50 g de mantequilla','3 huevos','Azúcar','Aceite para freír'], instrucciones: ['Hacer una masa choux con agua, mantequilla y harina','Añadir los huevos de uno en uno','Freír la masa en aceite caliente','Rebozar en azúcar'], tiempo: 30, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Hojaldre con Crema', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Hojaldre_con_crema.jpg/800px-Hojaldre_con_crema.jpg', descripcion: 'Milhojas de hojaldre rellenas de crema pastelera.', ingredientes: ['1 lámina de hojaldre','Crema pastelera','Azúcar glas'], instrucciones: ['Cortar el hojaldre en rectángulos','Hornear hasta que suban y estén dorados','Abrir por la mitad y rellenar de crema','Espolvorear con azúcar glas'], tiempo: 40, dificultad: 'Media', fav: false },
  { categoria: 'postre', titulo: 'Gachas Manchegas Dulces', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Gachas_dulces_españolas.jpg/800px-Gachas_dulces_españolas.jpg', descripcion: 'Postre a base de harina, leche, anís y canela, típico de La Mancha.', ingredientes: ['100 g de harina','1 litro de leche','Azúcar','Aceite','Anís en grano','Pan frito','Canela'], instrucciones: ['Sofreír el pan y el anís','Retirar el pan y añadir la harina a la sartén','Añadir la leche y el azúcar','Cocer sin dejar de remover','Servir con pan frito y canela'], tiempo: 30, dificultad: 'Fácil', fav: false }
];

const favs = JSON.parse(localStorage.getItem('favs')||'{}');
recetas.forEach(r=>{ if(favs[r.titulo]) r.fav=true; });

document.addEventListener('DOMContentLoaded',()=>{
  const debug = document.createElement('div'); debug.id='debug'; debug.textContent=`Recetas cargadas: ${recetas.length}`;
  document.body.insertBefore(debug,document.querySelector('.tabs'));

  const cont = {
    'aperitivos': document.getElementById('contenedor-aperitivos'),
    'primer-plato': document.getElementById('contenedor-primer-plato'),
    'segundo-plato': document.getElementById('contenedor-segundo-plato'),
    'postre': document.getElementById('contenedor-postre')
  };
  const modal = document.getElementById('modal'), modalBody = document.getElementById('modalBody');
  document.querySelector('#modal .close').onclick = ()=> modal.style.display='none';
  document.getElementById('themeToggle').onclick = ()=>{
    const b = document.body;
    b.dataset.theme = b.dataset.theme==='light'?'dark':'light';
    document.getElementById('themeToggle').textContent = b.dataset.theme==='dark'?'☀️':'🌙';
  };

  function saveFavs(){
    const store = {};
    recetas.forEach(r=>{ if(r.fav) store[r.titulo]=true; });
    localStorage.setItem('favs', JSON.stringify(store));
  }

  function handleFavClick(e){
    e.stopPropagation();
    const card = e.currentTarget.closest('.receta');
    const title = card.dataset.title;
    const rec = recetas.find(r=>r.titulo===title);
    rec.fav = !rec.fav;
    saveFavs();
    render();
  }
  
  const allCards = [];

  function createAllCards() {
    recetas.forEach(receta => {
      const card = document.createElement('div');
      card.className = 'receta';
      card.dataset.tiempo = receta.tiempo;
      card.dataset.categoria = receta.categoria;
      card.dataset.title = receta.titulo;

      const ing = `<ul>${receta.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>`;
      const pas = `<ol>${receta.instrucciones.map(p => `<li>${p}</li>`).join('')}</ol>`;

      card.innerHTML = `
        <div class="star ${receta.fav ? 'fav' : ''}" data-title="${receta.titulo}">★</div>
        <h3>${receta.titulo}</h3>
        <img src="${receta.img}" alt="${receta.titulo}">
        <p><strong>Descripción:</strong> ${receta.descripcion}</p>
        <p><strong>Ingredientes:</strong>${ing}</p>
        <p><strong>Instrucciones:</strong>${pas}</p>
        <p class="info">⏱ ${receta.tiempo} min | 🔥 ${receta.dificultad}</p>
      `;
      
      card.onclick = () => {
        modalBody.innerHTML = card.innerHTML;
        modal.style.display = 'flex';
        const modalStar = modalBody.querySelector('.star');
        if (modalStar) modalStar.onclick = handleFavClick;
      };

      card.querySelector('.star').onclick = handleFavClick;
      allCards.push(card);
    });

    allCards.forEach(card => {
      cont[card.dataset.categoria].appendChild(card);
    });
  }

  function render() {
    const term = document.getElementById('search').value.toLowerCase();
    const sortv = document.getElementById('sort').value;
    const favsOnly = document.getElementById('favoritesOnly').checked;
    const activeTab = document.querySelector('.tab-button.active').dataset.tab;

    let visibleCards = [...allCards];

    if (favsOnly) {
      visibleCards = visibleCards.filter(card => recetas.find(r => r.titulo === card.dataset.title).fav);
    }

    if (term) {
      visibleCards = visibleCards.filter(card => card.dataset.title.toLowerCase().includes(term) || card.querySelector('p').textContent.toLowerCase().includes(term));
    }

    if (sortv === 'asc') {
      visibleCards.sort((a, b) => a.dataset.tiempo - b.dataset.tiempo);
    }
    if (sortv === 'desc') {
      visibleCards.sort((a, b) => b.dataset.tiempo - a.dataset.tiempo);
    }

    allCards.forEach(card => {
      const isVisible = visibleCards.includes(card) && card.dataset.categoria === activeTab;
      card.style.display = isVisible ? 'block' : 'none';
    });
  }

  function showTab(tabName) {
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
      if (button.dataset.tab === tabName) {
        button.classList.add('active');
      }
    });
    render();
  }

  ['search','sort','favoritesOnly'].forEach(id=>
    document.getElementById(id).addEventListener('input',render)
  );

  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      showTab(button.dataset.tab);
    });
  });

  createAllCards();
  render();
});
</script>
</body>
</html>
