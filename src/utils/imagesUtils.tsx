export type carouselImagesType = {
    imgSource:string;
    title?:string;
    button?:string;
    description?:string;
    active?: boolean;//solo 1
}

export const carouselInicio: carouselImagesType[]=[
    {
        imgSource:"https://plus.unsplash.com/premium_photo-1661400100934-1ba03c96cc14?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXMlMjB0cmFiYWphbmRvfGVufDB8fDB8fHww",
        title:"Tu Cooperativa",
        description:"Servicios confiables para que puedas recibir tus remesas, pagos de Luz o pago de servicios.",
        active:true,
    },
    {
        imgSource:"https://cdn.pixabay.com/video/2021/09/05/87593-602317653_tiny.jpg",
        button:"Asociate",
        description:"Descubre un mundo de beneficios y oportunidades financieras",
       
    },
    {
        imgSource:"https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-15768.jpg"
    }
]