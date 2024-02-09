export default{
    
    name:'accreditation',
    type:'document',
    title:'Accreditation',
    fields:[
        {
            name:'school',
            type:'string',
            title:'School'
        },
        {
            name:'description',
            type:'string',
            title:'Description'
        }
       ,{
        name:'degree',
        type:'file',
        title:'Degree'
       },
       {
        name:'certification',
        type:'file',
        title:'Certification'
       },
       {
        name:'logo',
        type:'image',
        title:'Logo'
       }

    ]
}

