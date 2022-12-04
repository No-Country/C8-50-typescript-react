import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { RealState } from "../entities/RealState.entity";

export class RealEstateSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const realEstateRepository = dataSource.getRepository(RealState);

    const realEstateData = [
      {
        name: "Las rocas",
        price: 8600000,
        description:
          "Situada en la esquina suroeste del Monte Argentario, esta maravillosa torre data del siglo XV y fue construida originalmente por la República de Siena como una torre de vigilancia que formaba parte de sus defensas de la costa sur. Siguió siendo un puesto militar de avanzada hasta finales del siglo XIX, cuando pasó a manos privadas. A la que se accede por una pista privada desde la puerta de Cannelle, la propiedad solo es realmente visible desde el mar y desde un punto de la carretera de acceso. La entrada, desde la zona de aparcamiento, se realiza a través de una puerta de madera en el maravilloso muro de piedra antiguo del jardín, que ofrece total privacidad y tranquilidad. Solo una vez que llegas a la terraza frente a la torre, aprecias plenamente la proximidad al mar y las maravillosas vistas. La torre principal es la única torre hexagonal de la Toscana y está construida en tres plantas, además de un sótano debajo de la terraza frente a ella. La torre está rodeada por un muro de piedra, que rodea un patio y otro edificio con cuatro dormitorios y baños. La torre tiene un gran dormitorio y un baño en las dos plantas superiores, con acceso a una terraza en la azotea. Un hall de entrada y una sala de estar en la planta baja y una cocina/comedor debajo de la terraza principal, con acceso al jardín, que está sin desarrollar, en gran medida cubierto, pero con arbustos y arbustos típicos de esta parte del Mediterráneo. La propiedad forma parte de la finca cerrada de Cannelle, que proporciona seguridad, así como suministro de agua y acceso al club de playa, si es necesario. Necesita una modernización considerable, pero una vez restaurada, proporcionará una magnífica casa privada de cinco dormitorios.",
        image:
          "https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa1-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa2-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa3-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa4-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa5-1110x623.jpghttps://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa6-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa7-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa8-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa9-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa10-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa11-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa12-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa13-1110x623.jpg,ttps://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa14-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa15-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa16-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa17-1110x623.jpg,https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa18-1110x623.jpg,ttps://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa19-1110x623.jpg,background-image:url(https://www.tuscany-realestate.it/wp-content/uploads/2021/05/outstanding-watchtower-converted-into-villa20-1110x623.jpg",
        country: "Italia",
        city: "Monte Argentaro",
        latitude: "42.376279",
        longitude: "11.143694",
      },
      {
        name: "Rincón en la ciudad",
        price: 128900,
        description: "Disfruta un departamento muy acogedor de 60 m2 de construcción, cuenta con cisterna, elevador, bodega, gas estacionario, estancia de sala-comedor, 2 habitaciones, 2 baños completos y 1 cajón de estacionamiento techado. El condominio cuenta con roof garden y vigilancia. Está ubicado muy cerca de diferentes supermercados, plazas y cuenta con excelentes opciones a transporte público.",
        image: "https://assets.easybroker.com/property_images/3355591/54177755/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177781/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177777/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177776/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177775/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177771/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177770/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177767/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177765/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177764/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177763/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177761/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177762/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177760/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177759/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177758/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177756/medium_EB-LW5591.jpeg?version=1667346726,https://assets.easybroker.com/property_images/3355591/54177757/medium_EB-LW5591.jpeg?version=1667346726",
        country: "México",
        city: "Ciudad de México",
        latitude: "19.3906211",
        longitude: "-99.1388485",
      },
      {
        name: "La Ofi",
        price: 154000,
        description: "Torre de oficinas junto a la Plaza de las Estrellas, 70m2, ideal para consultorios, oficinas, despacho, en el 3er piso de la torre A. Cuenta con recepción con clóset de archivos, 3 privados con clóset y área de archivos. Un baño. Seguridad. El edificio tiene elevador y la entrada es por Plaza de las Estrellas.",
        image: "https://assets.easybroker.com/property_images/2054788/31514313/EB-GW4788.jpg?version=1614271355,https://assets.easybroker.com/property_images/2054788/31514315/EB-GW4788.jpg?version=1614271355,https://assets.easybroker.com/property_images/2054788/31514316/EB-GW4788.jpg?version=1614271355,https://assets.easybroker.com/property_images/2054788/31514304/EB-GW4788.jpg?version=1614271355,https://assets.easybroker.com/property_images/2054788/31514303/EB-GW4788.jpg?version=1614271355,https://assets.easybroker.com/property_images/2054788/31514301/EB-GW4788.jpg?version=1614271355,https://assets.easybroker.com/property_images/2054788/31514302/EB-GW4788.jpg?version=1614271355,https://assets.easybroker.com/property_images/2054788/31514300/EB-GW4788.jpg?version=1614271354",
        country: "México",
        city: "Ciudad de México",
        latitude: "19.435323",
        longitude: "-99.171174",
      },
    ];

    const newRealEstates = realEstateRepository.create(realEstateData);
    await realEstateRepository.save(newRealEstates);

    //Add broker
    await dataSource.createQueryBuilder().relation(RealState, "user").of(1).set(1);
    await dataSource.createQueryBuilder().relation(RealState, "user").of(2).set(4);
    await dataSource.createQueryBuilder().relation(RealState, "user").of(3).set(6);

    //Add type
    await dataSource.createQueryBuilder().relation(RealState, "type").of(1).set(1);
    await dataSource.createQueryBuilder().relation(RealState, "type").of(2).set(2);
    await dataSource.createQueryBuilder().relation(RealState, "type").of(3).set(3);

    //Add operation type
    await dataSource.createQueryBuilder().relation(RealState, "operation").of(1).set(1);
    await dataSource.createQueryBuilder().relation(RealState, "operation").of(2).set(1);
    await dataSource.createQueryBuilder().relation(RealState, "operation").of(3).set(1);

    
  }
}
