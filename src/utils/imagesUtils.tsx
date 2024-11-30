export type carouselImagesType = {
    imgSource:string;
    title?:string;
    button?:string;
    description?:string;
    active?: boolean;//solo 1
}

export const carouselInicio: carouselImagesType[]=[
    {
        imgSource:"https://scontent.fgua6-2.fna.fbcdn.net/v/t39.30808-6/461834229_1257357505464411_6286160946320514923_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9pv72IzNbm4Q7kNvgE3GkO2&_nc_zt=23&_nc_ht=scontent.fgua6-2.fna&_nc_gid=AFKpZwYS9l0SQfLgJ30sIWq&oh=00_AYDj6ExQf9MNv4uWhmdXW3Vv5OsvqnRP0qrMs3UcXlpe7Q&oe=67507F5B",
        title:"Tu Cooperativa",
        description:"Servicios confiables para que puedas recibir tus remesas, pagos de Luz o pago de servicios.",
        active:true,
    },
    {
        imgSource:"https://scontent.fgua6-1.fna.fbcdn.net/v/t39.30808-6/468476980_1297544574779037_836180510990254914_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AXEnO6tyHCkQ7kNvgENGBll&_nc_zt=23&_nc_ht=scontent.fgua6-1.fna&_nc_gid=ACAGSF17-rKgH7-pr1iP1jz&oh=00_AYB9mgi1b1weNyFya3hesKhv3VsTMXPvF8ky6tO-daFc6w&oe=67506385",
        button:"Asociate",
        description:"Descubre un mundo de beneficios y oportunidades financieras",
       
    },
    {
        imgSource:"https://scontent.fgua6-1.fna.fbcdn.net/v/t39.30808-6/457879653_1237209350812560_5693300133964565669_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tDg2xf6aitMQ7kNvgF0oi6Q&_nc_zt=23&_nc_ht=scontent.fgua6-1.fna&_nc_gid=ARiYdUz_hxTV3ErwJigtwjc&oh=00_AYCouaYq2puyyO-50saHt56rBGMCMLNip-gYwS2FWDA3mA&oe=675061D2"
    }
]